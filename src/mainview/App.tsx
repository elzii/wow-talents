import React, { useState, useMemo, useEffect } from "react";
import {
  CharacterClasses,
  ClassData,
  PointsObject,
  TalentData
} from "../types";
import { calculateTreePoints } from "./utils";
import { TalentTree } from "./components/TalentTree";
import { Tooltip } from "./components/Tooltip";
import { ClassSelector } from "./components/ClassSelector";
import { TalentPickerModal } from "./components/TalentPickerModal";
import { ColorPickerModal } from "./components/ColorPickerModal";
import { TreeCopyModal } from "./components/TreeCopyModal";
import { LegacyCalculator } from "./components/LegacyCalculator";
import { RacialBenefits } from "./components/RacialBenefits";

import { allClassesData as classicData } from "./talents/classic";
import { allClassesData as tbcData } from "./talents/tbc";
import { allClassesData as foreverData } from "./talents/forever";
import { customClassData as initialCustomClassData } from "./talents/custom/custom";

type WoWVersion = "classic" | "tbc" | "forever";

const availableVersions: { id: WoWVersion; label: string }[] = [
  { id: "classic", label: "WoW - Classic" },
  { id: "tbc", label: "WoW - The Burning Crusade" },
  { id: "forever", label: "WoW - Forever" }
];

const standardClasses: CharacterClasses[] = [
  "Druid",
  "Hunter",
  "Mage",
  "Paladin",
  "Priest",
  "Rogue",
  "Shaman",
  "Warlock",
  "Warrior",
  "Custom"
];

export const App: React.FC = () => {
  const [wowVersion, setWoWVersion] = useState<WoWVersion>("forever");
  const [selectedClass, setSelectedClass] = useState<CharacterClasses>("Warrior");
  const [points, setPoints] = useState<PointsObject>({});
  const [tooltipData, setTooltipData] = useState<any>(null);
  const [notification, setNotification] = useState<string | null>(null);

  // Legacy points calculator toggle (enabled by default for Forever)
  const [showLegacyCalc, setShowLegacyCalc] = useState<boolean>(true);

  // Selected race for racial benefits (defaults to Undead)
  const [selectedRace, setSelectedRace] = useState<string>(() => {
    return localStorage.getItem("wow_selected_race") || "Undead";
  });

  const handleSelectRace = (race: string) => {
    setSelectedRace(race);
    try {
      localStorage.setItem("wow_selected_race", race);
    } catch (e) {}
  };

  // Dynamic custom class state (allows user ability replacements and tree custom colors)
  const [customClassState, setCustomClassState] = useState<ClassData>(() => {
    try {
      const saved = localStorage.getItem("wow_custom_class_data");
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return initialCustomClassData;
  });

  // Target slot for talent picker modal
  const [pickerSlot, setPickerSlot] = useState<{
    treeIndex: number;
    talent: TalentData;
  } | null>(null);

  // Modal states for Color Picker & Tree Copy
  const [colorPickerTreeIndex, setColorPickerTreeIndex] = useState<number | null>(null);
  const [treeCopyIndex, setTreeCopyIndex] = useState<number | null>(null);

  const maxPoints = useMemo(() => {
    if (selectedClass === "Custom") return 51;
    if (wowVersion === "tbc") return 61;
    return 51;
  }, [wowVersion, selectedClass]);

  const currentClassData = useMemo<ClassData>(() => {
    if (selectedClass === "Custom") {
      return customClassState;
    }

    let source = foreverData;
    if (wowVersion === "classic") source = classicData as any;
    if (wowVersion === "tbc") source = tbcData as any;

    const data = (source as any)[selectedClass];
    if (data) return data;
    return customClassState;
  }, [wowVersion, selectedClass, customClassState]);

  // Reset points on class or version change
  useEffect(() => {
    setPoints({});
  }, [wowVersion, selectedClass]);

  const totalPoints = useMemo(() => {
    return Object.values(points).reduce((sum, val) => sum + (val || 0), 0);
  }, [points]);

  const pointsLeft = maxPoints - totalPoints;
  const requiredLevel = totalPoints > 0 ? totalPoints + 9 : 10;

  const findTalentById = (id: number) => {
    for (const tree of currentClassData.talentTrees) {
      const found = tree.talents.find((t) => t.id === id);
      if (found) return { talent: found, tree };
    }
    return null;
  };

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 2500);
  };

  // Spending points
  const handleSpendPoint = (talentId: number) => {
    const result = findTalentById(talentId);
    if (!result) return;
    const { talent, tree } = result;

    const currentRank = points[talentId] || 0;
    if (currentRank >= talent.maxRank) return;
    if (totalPoints >= maxPoints) {
      showNotification("Maximum talent points reached!");
      return;
    }

    const treePoints = calculateTreePoints(tree, points);
    const requiredTreePoints = talent.minPointsRequired ?? talent.y * 5;

    if (treePoints < requiredTreePoints) {
      showNotification(`Requires ${requiredTreePoints} points in ${tree.name}`);
      return;
    }

    if (talent.requirements?.talentId) {
      const depRank = points[talent.requirements.talentId] || 0;
      if (depRank < talent.requirements.talentRank) {
        showNotification(
          `Requires ${talent.requirements.talentRank} rank(s) in prerequisite talent.`
        );
        return;
      }
    }

    setPoints((prev) => ({ ...prev, [talentId]: currentRank + 1 }));
  };

  // Refunding points
  const handleRefundPoint = (talentId: number) => {
    const currentRank = points[talentId] || 0;
    if (currentRank <= 0) return;

    // Check if any spent talent depends directly on this one
    const isDependedOn = currentClassData.talentTrees.some((tree) =>
      tree.talents.some(
        (t) => t.requirements?.talentId === talentId && (points[t.id] || 0) > 0
      )
    );
    if (isDependedOn) {
      showNotification("Cannot refund: another talent depends on this.");
      return;
    }

    const newPoints = { ...points, [talentId]: currentRank - 1 };
    if (newPoints[talentId] === 0) delete newPoints[talentId];

    const result = findTalentById(talentId);
    if (!result) return;
    const { tree } = result;

    // Verify tree tier constraints remain valid for talents in higher tiers
    const prospectiveTreePoints = calculateTreePoints(tree, newPoints);
    const hasInvalidHigherTier = tree.talents.some((t) => {
      const rank = newPoints[t.id] || 0;
      const req = t.minPointsRequired ?? t.y * 5;
      return rank > 0 && prospectiveTreePoints < req;
    });

    if (hasInvalidHigherTier) {
      showNotification("Cannot refund: points in higher tiers require this investment.");
      return;
    }

    setPoints(newPoints);
  };

  const handleResetTree = (treeName: string) => {
    const treeToReset = currentClassData.talentTrees.find(
      (t) => t.name === treeName
    );
    if (!treeToReset) return;

    setPoints((prev) => {
      const updated = { ...prev };
      treeToReset.talents.forEach((t) => {
        delete updated[t.id];
      });
      return updated;
    });
  };

  const handleResetAll = () => {
    setPoints({});
  };

  // Replace talent in Custom class slot
  const handleReplaceCustomTalent = (newTalent: TalentData) => {
    if (!pickerSlot) return;
    const { treeIndex, talent: oldSlot } = pickerSlot;

    // Clear points spent on this slot if replacing
    if (points[oldSlot.id]) {
      setPoints((prev) => {
        const next = { ...prev };
        delete next[oldSlot.id];
        return next;
      });
    }

    setCustomClassState((prev) => {
      const newTrees = prev.talentTrees.map((tree, tIdx) => {
        if (tIdx !== treeIndex) return tree;
        const updatedTalents = tree.talents.map((t) => {
          if (t.x === oldSlot.x && t.y === oldSlot.y) {
            return {
              ...t,
              id: newTalent.id,
              name: newTalent.name,
              maxRank: newTalent.maxRank || t.maxRank,
              iconName: newTalent.iconName,
              spellIds: newTalent.spellIds || [newTalent.id],
              descriptions: newTalent.descriptions || [],
              sourceClass: newTalent.sourceClass,
              sourceTree: newTalent.sourceTree
            };
          }
          return t;
        });
        return { ...tree, talents: updatedTalents };
      });

      const updatedData = { ...prev, talentTrees: newTrees };
      try {
        localStorage.setItem("wow_custom_class_data", JSON.stringify(updatedData));
      } catch (e) {}
      return updatedData;
    });

    showNotification(`Replaced with ${newTalent.name}!`);
    setPickerSlot(null);
  };

  const handleResetCustomClassToDefault = () => {
    setCustomClassState(initialCustomClassData);
    try {
      localStorage.removeItem("wow_custom_class_data");
    } catch (e) {}
    setPoints({});
    showNotification("Custom class reset to template default!");
  };

  const handleRenameTree = (treeIndex: number, newName: string) => {
    setCustomClassState((prev) => {
      const newTrees = prev.talentTrees.map((tree, tIdx) => {
        if (tIdx !== treeIndex) return tree;
        return { ...tree, name: newName };
      });
      const updated = { ...prev, talentTrees: newTrees };
      try {
        localStorage.setItem("wow_custom_class_data", JSON.stringify(updated));
      } catch (e) {}
      return updated;
    });
    showNotification(`Renamed tree to "${newName}"`);
  };

  const handleSetTreeColor = (treeIndex: number, colorRgba: string) => {
    setCustomClassState((prev) => {
      const newTrees = prev.talentTrees.map((tree, tIdx) => {
        if (tIdx !== treeIndex) return tree;
        return { ...tree, customColor: colorRgba };
      });
      const updated = { ...prev, talentTrees: newTrees };
      try {
        localStorage.setItem("wow_custom_class_data", JSON.stringify(updated));
      } catch (e) {}
      return updated;
    });
    showNotification("Tree color updated!");
  };

  const handleCopyTree = (
    treeIndex: number,
    selected: { treeName: string; talents: TalentData[] }
  ) => {
    // Reset points for old talents in this tree slot
    setPoints((prev) => {
      const next = { ...prev };
      const oldTree = customClassState.talentTrees[treeIndex];
      if (oldTree) {
        oldTree.talents.forEach((t) => delete next[t.id]);
      }
      return next;
    });

    setCustomClassState((prev) => {
      const newTrees = prev.talentTrees.map((tree, tIdx) => {
        if (tIdx !== treeIndex) return tree;
        return {
          ...tree,
          name: selected.treeName,
          talents: selected.talents
        };
      });
      const updated = { ...prev, talentTrees: newTrees };
      try {
        localStorage.setItem("wow_custom_class_data", JSON.stringify(updated));
      } catch (e) {}
      return updated;
    });
    showNotification(`Copied ${selected.treeName} tree!`);
  };

  const handleExportBuild = () => {
    const buildEntries = Object.entries(points).map(([id, rank]) => [
      parseInt(id, 10),
      rank
    ]);
    const buildString = btoa(JSON.stringify(buildEntries));
    const fullCode = `${wowVersion}:${selectedClass}:${buildString}`;
    navigator.clipboard.writeText(fullCode).then(() => {
      showNotification("Build code copied to clipboard!");
    });
  };

  const handleImportBuild = () => {
    const code = prompt("Paste your build code:");
    if (!code) return;
    try {
      const [ver, cls, b64] = code.split(":");
      if (!b64) throw new Error("Invalid format");
      if (ver && (ver === "classic" || ver === "tbc" || ver === "forever")) {
        setWoWVersion(ver as WoWVersion);
      }
      if (cls && standardClasses.includes(cls as CharacterClasses)) {
        setSelectedClass(cls as CharacterClasses);
      }
      const raw = JSON.parse(atob(b64));
      const loadedPoints: PointsObject = {};
      raw.forEach(([id, rank]: [number, number]) => {
        loadedPoints[id] = rank;
      });
      setPoints(loadedPoints);
      showNotification("Build imported successfully!");
    } catch (e) {
      showNotification("Failed to import build code.");
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-gray-100 flex flex-col font-sans select-none p-4 overflow-x-auto">
      {/* Top Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-4 bg-neutral-900/90 p-3 rounded-xl border border-neutral-800/90 shadow-xl backdrop-blur">
        <div className="flex items-center gap-3">
          <span className="text-xl font-black tracking-wider text-yellow-400 uppercase">
            WoW Talents
          </span>

          <select
            value={wowVersion}
            onChange={(e) => setWoWVersion(e.target.value as WoWVersion)}
            className="bg-neutral-800 border border-neutral-700 text-white font-semibold text-sm rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-yellow-500 cursor-pointer"
          >
            {availableVersions.map((v) => (
              <option key={v.id} value={v.id}>
                {v.label}
              </option>
            ))}
          </select>

          {wowVersion === "forever" && (
            <button
              onClick={() => setShowLegacyCalc((prev) => !prev)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition flex items-center gap-1.5 ${
                showLegacyCalc
                  ? "bg-yellow-500/20 text-yellow-300 border-yellow-500/80 shadow-md shadow-yellow-500/10"
                  : "bg-neutral-800 text-gray-400 border-neutral-700 hover:text-white"
              }`}
              title="Toggle Legacy Points Calculator"
            >
              <span>⚡</span>
              <span>Legacy Points Calculator</span>
            </button>
          )}
        </div>

        {/* Stats */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-400 uppercase font-semibold">
              Points Left:
            </span>
            <span
              className={`text-lg font-black ${
                pointsLeft === 0 ? "text-red-400" : "text-yellow-400"
              }`}
            >
              {pointsLeft}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-400 uppercase font-semibold">
              Req. Level:
            </span>
            <span className="text-lg font-black text-green-400">
              {requiredLevel}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleResetAll}
              className="bg-red-950/60 hover:bg-red-900/80 text-red-300 text-xs font-semibold px-3 py-1.5 rounded-lg border border-red-700/60 transition"
            >
              Reset All
            </button>
            <button
              onClick={handleExportBuild}
              className="bg-neutral-800 hover:bg-neutral-700 text-yellow-300 text-xs font-semibold px-3 py-1.5 rounded-lg border border-neutral-700 transition"
            >
              Export
            </button>
            <button
              onClick={handleImportBuild}
              className="bg-neutral-800 hover:bg-neutral-700 text-gray-200 text-xs font-semibold px-3 py-1.5 rounded-lg border border-neutral-700 transition"
            >
              Import
            </button>
          </div>
        </div>
      </div>

      {/* Notification Toast */}
      {notification && (
        <div className="fixed bottom-6 right-6 bg-yellow-500 text-black font-bold px-4 py-2 rounded-lg shadow-2xl z-50 animate-bounce text-sm">
          {notification}
        </div>
      )}

      {/* Main Talent Calculator Inset Container */}
      <div className="w-full p-6 bg-neutral-950/90 border border-gray-800 rounded-2xl shadow-2xl flex flex-col gap-6 select-none relative backdrop-blur">
        {/* Class Selection at the top */}
        <ClassSelector
          availableClasses={standardClasses}
          selectedClass={selectedClass}
          onSelectClass={setSelectedClass}
          selectedRace={selectedRace}
          onSelectRace={handleSelectRace}
        />

        {/* Main Trees Area */}
        <div className="flex-1 flex justify-center items-start gap-4 flex-wrap">
          {currentClassData?.talentTrees?.map((tree, idx) => (
            <TalentTree
              key={`${selectedClass}-${tree.name}-${idx}`}
              index={idx}
              classData={currentClassData}
              treeData={tree}
              points={points}
              onSpend={handleSpendPoint}
              onRefund={handleRefundPoint}
              onReset={handleResetTree}
              totalPoints={totalPoints}
              maxPoints={maxPoints}
              setTooltipData={setTooltipData}
              isCustomClass={selectedClass === "Custom"}
              onSlotLongPress={(treeIndex, talent) => {
                setPickerSlot({ treeIndex, talent });
              }}
              onRenameTree={handleRenameTree}
              onOpenColorPicker={(treeIndex) => setColorPickerTreeIndex(treeIndex)}
              onOpenTreeCopy={(treeIndex) => setTreeCopyIndex(treeIndex)}
            />
          ))}
        </div>

        {/* Racial Benefits dependent on selected race */}
        <RacialBenefits selectedRace={selectedRace} />

        {/* Custom Class Banner & Controls at the bottom */}
        {selectedClass === "Custom" && (
          <div className="p-3 bg-neutral-900/90 border border-neutral-800 rounded-xl flex items-center justify-between text-xs text-neutral-200">
            <div>
              <span className="font-bold text-yellow-400 mr-2">
                ✨ Custom Class Builder:
              </span>
              Click empty '?' slots to pick abilities directly, or hold/long-press chosen abilities to change them. Rename tree titles inline, or use '+' to copy an entire class spec!
            </div>
            <button
              onClick={handleResetCustomClassToDefault}
              className="px-2.5 py-1 bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 rounded text-neutral-200 font-semibold transition shrink-0 ml-3"
            >
              Reset Tree Layout
            </button>
          </div>
        )}
      </div>

      {/* Legacy Calculator (WoW Forever only) */}
      {wowVersion === "forever" && showLegacyCalc && (
        <LegacyCalculator />
      )}

      {/* Tooltip */}
      {tooltipData && (
        <Tooltip
          classData={currentClassData}
          talent={tooltipData.talent}
          rank={tooltipData.rank}
          position={tooltipData.position}
          treeName={tooltipData.treeName}
          treePoints={tooltipData.treePoints}
          isCustomClass={selectedClass === "Custom"}
          totalPoints={totalPoints}
        />
      )}

      {/* Custom Ability Picker Modal */}
      <TalentPickerModal
        isOpen={Boolean(pickerSlot)}
        onClose={() => setPickerSlot(null)}
        onSelectTalent={handleReplaceCustomTalent}
        targetSlot={pickerSlot}
      />

      {/* Color Picker Modal */}
      <ColorPickerModal
        isOpen={colorPickerTreeIndex !== null}
        onClose={() => setColorPickerTreeIndex(null)}
        currentColor={
          colorPickerTreeIndex !== null
            ? customClassState.talentTrees[colorPickerTreeIndex]?.customColor || "rgba(10, 10, 10, 0.95)"
            : "rgba(10, 10, 10, 0.95)"
        }
        treeName={
          colorPickerTreeIndex !== null
            ? customClassState.talentTrees[colorPickerTreeIndex]?.name || ""
            : ""
        }
        onSelectColor={(rgba: string) => {
          if (colorPickerTreeIndex !== null) {
            handleSetTreeColor(colorPickerTreeIndex, rgba);
          }
        }}
      />

      {/* Tree Copy Modal */}
      <TreeCopyModal
        isOpen={treeCopyIndex !== null}
        onClose={() => setTreeCopyIndex(null)}
        targetTreeIndex={treeCopyIndex ?? 0}
        currentTreeName={
          treeCopyIndex !== null
            ? customClassState.talentTrees[treeCopyIndex]?.name || ""
            : ""
        }
        onSelectTree={(selected) => {
          if (treeCopyIndex !== null) {
            handleCopyTree(treeCopyIndex, selected);
          }
        }}
      />
    </div>
  );
};
export default App;
