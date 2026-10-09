import React, { useState, useMemo, useEffect } from "react";
import {
  AllClassDataType,
  CharacterClasses,
  ClassData,
  PointsObject,
  TalentTreeData
} from "../types";
import { calculateTreePoints } from "./utils";
import { TalentTree } from "./components/TalentTree";
import { Tooltip } from "./components/Tooltip";
import { ClassSelector } from "./components/ClassSelector";

import { allClassesData as classicData } from "./talents/classic";
import { allClassesData as tbcData } from "./talents/tbc";
import { allClassesData as foreverData } from "./talents/forever";
import { customClassData } from "./talents/custom/custom";

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

  const maxPoints = useMemo(() => {
    if (selectedClass === "Custom") return 51;
    if (wowVersion === "tbc") return 61;
    return 51;
  }, [wowVersion, selectedClass]);

  const currentClassData = useMemo<ClassData>(() => {
    if (selectedClass === "Custom") {
      return customClassData;
    }

    let source = foreverData;
    if (wowVersion === "classic") source = classicData as any;
    if (wowVersion === "tbc") source = tbcData as any;

    const data = (source as any)[selectedClass];
    if (data) return data;
    return customClassData;
  }, [wowVersion, selectedClass]);

  // Reset points on class or version change
  useEffect(() => {
    setPoints({});
  }, [wowVersion, selectedClass]);

  const totalPoints = useMemo(() => {
    return Object.values(points).reduce((sum, val) => sum + (val || 0), 0);
  }, [points]);

  const pointsLeft = maxPoints - totalPoints;
  const requiredLevel = totalPoints > 0 ? totalPoints + 9 : 10;

  // Calculate points per tree and count of trees that have at least 1 point
  const treePointCounts = useMemo(() => {
    if (!currentClassData?.talentTrees) return [0, 0, 0];
    return currentClassData.talentTrees.map((tree) =>
      calculateTreePoints(tree, points)
    );
  }, [currentClassData, points]);

  const treesWithPointsCount = useMemo(() => {
    return treePointCounts.filter((cnt) => cnt > 0).length;
  }, [treePointCounts]);

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

    // Custom class rules
    if (selectedClass === "Custom") {
      // 10-point milestone requires points in at least 2 trees
      if (talent.minPointsRequired === 10 && treesWithPointsCount < 2) {
        showNotification("Requires points invested in at least 2 trees to unlock!");
        return;
      }
      // 20-point milestone requires points in at least 2 trees
      if (talent.minPointsRequired === 20 && treesWithPointsCount < 2) {
        showNotification("Requires points invested in at least 2 trees to unlock!");
        return;
      }
      // 40-point capstone requires points across all trees (or >= 40 total points)
      if (talent.minPointsRequired === 40 && totalPoints < 40) {
        showNotification("Requires at least 40 points total to unlock capstone!");
        return;
      }
      if (treePoints < talent.y * 5) {
        showNotification(`Requires ${talent.y * 5} points in this tree.`);
        return;
      }
    } else {
      if (treePoints < talent.minPointsRequired) {
        showNotification(`Requires ${talent.minPointsRequired} points in ${tree.name}`);
        return;
      }
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
      return rank > 0 && prospectiveTreePoints < t.y * 5;
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
      <div className="flex flex-wrap items-center justify-between gap-4 mb-4 bg-gray-900/60 p-3 rounded-xl border border-gray-800">
        <div className="flex items-center gap-3">
          <span className="text-xl font-black tracking-wider text-yellow-400 uppercase">
            WoW Talents
          </span>

          <select
            value={wowVersion}
            onChange={(e) => setWoWVersion(e.target.value as WoWVersion)}
            className="bg-gray-800 border border-gray-700 text-white font-semibold text-sm rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-yellow-500 cursor-pointer"
          >
            {availableVersions.map((v) => (
              <option key={v.id} value={v.id}>
                {v.label}
              </option>
            ))}
          </select>
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
              className="bg-gray-800 hover:bg-gray-700 text-yellow-300 text-xs font-semibold px-3 py-1.5 rounded-lg border border-gray-700 transition"
            >
              Export
            </button>
            <button
              onClick={handleImportBuild}
              className="bg-gray-800 hover:bg-gray-700 text-cyan-300 text-xs font-semibold px-3 py-1.5 rounded-lg border border-gray-700 transition"
            >
              Import
            </button>
          </div>
        </div>
      </div>

      {/* Class Selection */}
      <ClassSelector
        availableClasses={standardClasses}
        selectedClass={selectedClass}
        onSelectClass={setSelectedClass}
      />

      {/* Custom Class Banner */}
      {selectedClass === "Custom" && (
        <div className="mb-4 p-3 bg-fuchsia-950/40 border border-fuchsia-800/60 rounded-xl flex items-center justify-between text-xs text-fuchsia-200">
          <div>
            <span className="font-bold text-fuchsia-300 mr-2">
              ✨ Custom Hybrid Class:
            </span>
            Pick and combine abilities across classes. Requires investing points
            in at least 2 trees to unlock 10 and 20 pt tiers, and 40 points total for capstones.
          </div>
          <div className="font-semibold text-fuchsia-300">
            Active Trees with Points: {treesWithPointsCount} / 3
          </div>
        </div>
      )}

      {/* Notification Toast */}
      {notification && (
        <div className="fixed bottom-6 right-6 bg-yellow-500 text-black font-bold px-4 py-2 rounded-lg shadow-2xl z-50 animate-bounce text-sm">
          {notification}
        </div>
      )}

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
            treesWithPointsCount={treesWithPointsCount}
          />
        ))}
      </div>

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
          treesWithPointsCount={treesWithPointsCount}
          totalPoints={totalPoints}
        />
      )}
    </div>
  );
};
export default App;
