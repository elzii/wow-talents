import React, { useState } from "react";
import { calculateTreePoints } from "../utils";
import { TalentIcon } from "./TalentIcon/TalentIcon";
import { ClassData, TalentTreeData, PointsObject, TalentData } from "../../types";

interface Props {
  classData: ClassData;
  treeData: TalentTreeData;
  points: PointsObject;
  onSpend: (talentId: number) => void;
  onRefund: (talentId: number) => void;
  onReset: (treeName: string) => void;
  totalPoints: number;
  index: number;
  maxPoints: number;
  setTooltipData: (data: any) => void;
  isCustomClass?: boolean;
  onSlotLongPress?: (treeIndex: number, talent: TalentData) => void;
  onRenameTree?: (treeIndex: number, newName: string) => void;
  onOpenColorPicker?: (treeIndex: number) => void;
  onOpenTreeCopy?: (treeIndex: number) => void;
}

export const TalentTree: React.FC<Props> = ({
  treeData,
  points,
  onSpend,
  onRefund,
  onReset,
  totalPoints,
  maxPoints,
  setTooltipData,
  classData,
  index,
  isCustomClass = false,
  onSlotLongPress,
  onRenameTree,
  onOpenColorPicker,
  onOpenTreeCopy
}) => {
  const treePoints = calculateTreePoints(treeData, points);
  const [treeElement, setTreeElement] = useState<HTMLDivElement | null>(null);
  const [contextMenuPos, setContextMenuPos] = useState<{ x: number; y: number } | null>(null);

  const canSpend = (talent: TalentData) => {
    if (totalPoints >= maxPoints) return false;
    const currentRank = points[talent.id] || 0;
    if (currentRank >= talent.maxRank) return false;

    // Follow standard tree points required: minPointsRequired (y * 5)
    const requiredTreePoints = talent.minPointsRequired ?? talent.y * 5;
    if (treePoints < requiredTreePoints) return false;

    if (talent.requirements?.talentId) {
      const depRank = points[talent.requirements.talentId] || 0;
      if (depRank < talent.requirements.talentRank) return false;
    }

    return true;
  };

  const bgUrl = isCustomClass
    ? ""
    : `assets/icons/bg/${classData.name?.toLowerCase()}_${index}.jpg`;

  const handleContextMenu = (e: React.MouseEvent) => {
    if (!isCustomClass) return;
    // Only open if clicking on the tree container background or header
    e.preventDefault();
    setContextMenuPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      onContextMenu={handleContextMenu}
      className={`flex-1 p-4 rounded-xl shadow-xl min-w-[320px] max-w-[380px] relative overflow-hidden backdrop-blur flex flex-col transition-colors ${
        isCustomClass
          ? "border-2 border-white/70 shadow-2xl"
          : "bg-gray-900/90 border border-gray-800"
      }`}
      style={{
        backgroundColor: isCustomClass
          ? treeData.customColor || "rgba(10, 10, 10, 0.95)"
          : undefined
      }}
    >
      {bgUrl && (
        <div
          className="absolute inset-0 pointer-events-none opacity-20 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgUrl})` }}
        />
      )}

      {/* Header */}
      <div className="relative z-10 flex justify-between items-center mb-4 pb-2 border-b border-gray-800">
        <div className="flex items-center gap-2 flex-1 mr-2">
          {isCustomClass ? (
            <h2
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => {
                const text = e.currentTarget.textContent?.trim();
                if (text && text !== treeData.name) {
                  onRenameTree?.(index, text);
                }
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  e.currentTarget.blur();
                }
              }}
              className="text-lg font-bold text-white tracking-wide outline-none border-b border-dashed border-transparent hover:border-yellow-400 focus:border-yellow-400 focus:bg-black/40 px-1 rounded transition-colors cursor-text"
              title="Click to edit tree name"
            >
              {treeData.name}
            </h2>
          ) : (
            <h2 className="text-lg font-bold text-white tracking-wide">
              {treeData.name}
            </h2>
          )}
          <span className="text-lg font-extrabold text-yellow-400 bg-yellow-950/40 px-2 py-0.5 rounded border border-yellow-700/50">
            {treePoints}
          </span>
        </div>

        <div className="flex items-center gap-1">
          {isCustomClass && (
            <>
              <button
                onClick={() => onOpenColorPicker?.(index)}
                className="text-gray-400 hover:text-yellow-400 p-1.5 rounded hover:bg-yellow-950/40 transition text-sm flex items-center justify-center"
                title="Change background color (RGBA)"
              >
                🎨
              </button>
              <button
                onClick={() => onOpenTreeCopy?.(index)}
                className="text-yellow-400 hover:text-yellow-300 font-bold text-xl px-2 py-0.5 rounded hover:bg-yellow-950/40 transition flex items-center justify-center leading-none"
                title="Copy entire class talent tree into this slot"
              >
                +
              </button>
            </>
          )}
          <button
            onClick={() => onReset(treeData.name)}
            className="text-gray-400 hover:text-red-400 font-bold text-xl px-2 py-0.5 rounded hover:bg-red-950/40 transition leading-none"
            title={`Reset ${treeData.name} tree`}
          >
            &times;
          </button>
        </div>
      </div>

      {/* Context Menu for Custom Class */}
      {contextMenuPos && (
        <div
          className="fixed inset-0 z-50"
          onClick={() => setContextMenuPos(null)}
          onContextMenu={(e) => {
            e.preventDefault();
            setContextMenuPos(null);
          }}
        >
          <div
            className="absolute bg-neutral-900 border border-gray-700 rounded-lg shadow-2xl py-1 text-sm text-gray-200 min-w-[170px] z-50 animate-in fade-in duration-75"
            style={{ left: contextMenuPos.x, top: contextMenuPos.y }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => {
                setContextMenuPos(null);
                onOpenColorPicker?.(index);
              }}
              className="w-full text-left px-3 py-2 hover:bg-yellow-950/40 hover:text-yellow-300 flex items-center gap-2 transition"
            >
              <span>🎨</span>
              <span>Change Color</span>
            </button>
            <button
              onClick={() => {
                setContextMenuPos(null);
                onOpenTreeCopy?.(index);
              }}
              className="w-full text-left px-3 py-2 hover:bg-yellow-950/40 hover:text-yellow-300 flex items-center gap-2 transition border-t border-gray-800"
            >
              <span>📋</span>
              <span>Copy Class Tree</span>
            </button>
          </div>
        </div>
      )}

      {/* Tree Grid */}
      <div className="relative z-10 flex-1 flex justify-center items-start" ref={setTreeElement}>
        <div
          className="grid grid-cols-4 gap-x-4 gap-y-4 py-2"
          style={{ gridTemplateRows: "repeat(7, 3.5rem)" }}
        >
          {treeData.talents.map((talent) => {
            return (
              <div
                className="relative flex items-center justify-center"
                key={`${talent.id}-${talent.name}-${talent.x}-${talent.y}`}
                style={{
                  gridColumn: talent.x + 1,
                  gridRow: talent.y + 1
                }}
                onMouseEnter={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  setTooltipData({
                    talent,
                    rank: points[talent.id] || 0,
                    position: { x: rect.left, y: rect.bottom },
                    treeName: treeData.name,
                    treePoints,
                    isCustomClass,
                    totalPoints
                  });
                }}
                onMouseLeave={() => setTooltipData(null)}
              >
                <TalentIcon
                  talent={talent}
                  points={points}
                  onSpend={onSpend}
                  onRefund={onRefund}
                  canSpend={canSpend(talent)}
                  iconName={talent.iconName}
                  isCustomClass={isCustomClass}
                  onLongPress={() => onSlotLongPress?.(index, talent)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};