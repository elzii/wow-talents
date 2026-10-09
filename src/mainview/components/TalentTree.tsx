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
  onSlotLongPress
}) => {
  const treePoints = calculateTreePoints(treeData, points);
  const [treeElement, setTreeElement] = useState<HTMLDivElement | null>(null);

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
    ? `assets/icons/bg/mage_${index}.jpg`
    : `assets/icons/bg/${classData.name?.toLowerCase()}_${index}.jpg`;

  return (
    <div className="flex-1 p-4 bg-gray-900/90 border border-gray-800 rounded-xl shadow-xl min-w-[320px] max-w-[380px] relative overflow-hidden backdrop-blur flex flex-col">
      {bgUrl && (
        <div
          className="absolute inset-0 pointer-events-none opacity-20 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgUrl})` }}
        />
      )}

      {/* Header */}
      <div className="relative z-10 flex justify-between items-center mb-4 pb-2 border-b border-gray-800">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-bold text-white tracking-wide">
            {treeData.name}
          </h2>
          <span className="text-lg font-extrabold text-yellow-400 bg-yellow-950/40 px-2 py-0.5 rounded border border-yellow-700/50">
            {treePoints}
          </span>
        </div>
        <button
          onClick={() => onReset(treeData.name)}
          className="text-gray-400 hover:text-red-400 font-bold text-xl px-2 py-0.5 rounded hover:bg-red-950/40 transition"
          title={`Reset ${treeData.name} tree`}
        >
          &times;
        </button>
      </div>

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