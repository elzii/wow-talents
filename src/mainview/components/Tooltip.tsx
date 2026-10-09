import React, { useLayoutEffect, useRef, useState } from "react";
import { ClassData, TalentData } from "../../types";

export interface TooltipProps {
  classData: ClassData;
  talent: TalentData;
  rank: number;
  position: { x: number; y: number };
  treeName?: string;
  treePoints?: number;
  aboveCursor?: boolean;
  isCustomClass?: boolean;
  treesWithPointsCount?: number;
  totalPoints?: number;
}

export const Tooltip: React.FC<TooltipProps> = ({
  classData,
  talent,
  rank,
  position,
  treeName,
  treePoints,
  aboveCursor,
  isCustomClass,
  treesWithPointsCount = 0,
  totalPoints = 0
}) => {
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useLayoutEffect(() => {
    if (tooltipRef.current) {
      const { width, height } = tooltipRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      let x = position.x + 65;
      let y = aboveCursor ? position.y - height - 10 : position.y + 15;

      if (x + width > viewportWidth - 20) {
        x = position.x - width - 15;
      }
      if (y + height > viewportHeight - 20) {
        y = viewportHeight - height - 20;
      }
      if (y < 10) y = 10;
      if (x < 10) x = 10;

      setCoords({ x, y });
    }
  }, [position, talent, rank]);

  if (!talent || !classData) return null;

  const nextRank = rank < talent.maxRank;
  const depTalent = talent.requirements?.talentId
    ? classData.talentTrees
        .flatMap((t) => t.talents)
        .find((t) => t.id === talent.requirements?.talentId)
    : null;

  // Custom milestone checks
  let customMilestoneWarning = "";
  if (isCustomClass) {
    if (talent.minPointsRequired === 10 && treesWithPointsCount < 2) {
      customMilestoneWarning = "Requires points invested in at least 2 talent trees to unlock.";
    } else if (talent.minPointsRequired === 20 && treesWithPointsCount < 2) {
      customMilestoneWarning = "Requires points invested in at least 2 talent trees to unlock.";
    } else if (talent.minPointsRequired === 40 && totalPoints < 40) {
      customMilestoneWarning = "Requires 40 points invested across all trees to unlock capstone.";
    }
  }

  const cleanDescription = (raw: string) => {
    if (!raw) return "";
    return raw
      .replace(/<!--[\s\S]*?-->/g, "")
      .replace(/<br\s*\/?>/gi, "\n")
      .replace(/<[^>]+>/g, "");
  };

  const currDesc = cleanDescription(
    talent.descriptions[rank > 0 ? rank - 1 : 0] || talent.descriptions[0] || ""
  );
  const nextDesc =
    nextRank && talent.descriptions[rank]
      ? cleanDescription(talent.descriptions[rank])
      : "";

  return (
    <div
      ref={tooltipRef}
      className="fixed bg-gray-950/95 backdrop-blur border border-yellow-600/60 text-white p-3.5 rounded-lg shadow-2xl max-w-sm z-50 pointer-events-none transition-opacity duration-75"
      style={{ left: coords.x, top: coords.y }}
    >
      <div className="flex items-center justify-between gap-2 border-b border-gray-700/80 pb-1.5 mb-2">
        <h3 className="text-base font-bold text-yellow-300 leading-tight">
          {talent.name}
        </h3>
        {talent.sourceClass && (
          <span className="text-[10px] uppercase tracking-wider bg-yellow-900/40 text-yellow-300 px-1.5 py-0.5 rounded border border-yellow-700/50">
            {talent.sourceClass}
          </span>
        )}
      </div>

      <div className="text-xs text-gray-300 mb-2 font-medium">
        Rank {rank}/{talent.maxRank}
      </div>

      {rank > 0 && currDesc && (
        <div className="text-xs text-green-300 leading-relaxed whitespace-pre-line mb-2">
          {currDesc}
        </div>
      )}

      {nextRank && (
        <div className="pt-2 border-t border-gray-800">
          <p className="text-[11px] uppercase tracking-wide text-gray-400 mb-1 font-semibold">
            {rank === 0 ? "Description" : "Next Rank:"}
          </p>
          <p className="text-xs text-green-300 leading-relaxed whitespace-pre-line">
            {rank === 0 ? currDesc : nextDesc}
          </p>
        </div>
      )}

      {depTalent && talent.requirements && (
        <p className="mt-2 text-red-400 text-xs">
          Requires {talent.requirements.talentRank} pt(s) in {depTalent.name}
        </p>
      )}

      {!isCustomClass &&
        treeName &&
        treePoints !== undefined &&
        talent.minPointsRequired > treePoints && (
          <p className="mt-2 text-red-400 text-xs">
            Requires {talent.minPointsRequired} points in {treeName}
          </p>
        )}

      {customMilestoneWarning && (
        <p className="mt-2 text-red-400 text-xs font-semibold">
          {customMilestoneWarning}
        </p>
      )}
    </div>
  );
};
