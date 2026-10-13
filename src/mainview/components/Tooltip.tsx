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

  const cleanDescription = (raw: string) => {
    if (!raw) return "";
    return raw
      .replace(/<!--[\s\S]*?-->/g, "")
      .replace(/<br\s*\/?>/gi, "\n")
      .replace(/<[^>]+>/g, "");
  };

  const getRankDescription = (targetRank: number): string => {
    if (targetRank <= 0) return "";
    // If explicit description exists for this rank
    if (talent.descriptions && talent.descriptions[targetRank - 1]) {
      return cleanDescription(talent.descriptions[targetRank - 1]);
    }
    // Fallback if only 1 description provided for multi-rank talent
    const baseDesc = cleanDescription(talent.descriptions?.[0] || "");
    if (!baseDesc || talent.maxRank <= 1) return baseDesc;

    // Scale percentages
    const pctMatches = [...baseDesc.matchAll(/(\d+(?:\.\d+)?)(%)/g)];
    if (pctMatches.length > 0) {
      const firstVal = parseFloat(pctMatches[0][1]);
      const isMaxRankValue = firstVal >= talent.maxRank * 2 && firstVal % talent.maxRank === 0 && firstVal >= 10;
      return baseDesc.replace(/(\d+(?:\.\d+)?)(%)/g, (_match, numStr, pct) => {
        const num = parseFloat(numStr);
        const rankVal = isMaxRankValue
          ? Math.round(((num / talent.maxRank) * targetRank) * 10) / 10
          : Math.round((num * targetRank) * 10) / 10;
        return `${rankVal}${pct}`;
      });
    }

    // Scale durations
    const secMatches = [...baseDesc.matchAll(/(\d+(?:\.\d+)?)\s*(sec|seconds|minutes|min)/g)];
    if (secMatches.length > 0) {
      const firstVal = parseFloat(secMatches[0][1]);
      const isMaxRankValue = firstVal >= talent.maxRank && firstVal % talent.maxRank === 0;
      return baseDesc.replace(/(\d+(?:\.\d+)?)\s*(sec|seconds|minutes|min)/g, (_match, numStr, unit) => {
        const num = parseFloat(numStr);
        const rankVal = isMaxRankValue
          ? Math.round(((num / talent.maxRank) * targetRank) * 10) / 10
          : Math.round((num * targetRank) * 10) / 10;
        return `${rankVal} ${unit}`;
      });
    }

    return baseDesc;
  };

  const currDesc = rank > 0 ? getRankDescription(rank) : getRankDescription(1);
  const nextDesc = nextRank ? getRankDescription(rank + 1) : "";

  const requiredTreePoints = talent.minPointsRequired ?? talent.y * 5;

  return (
    <div
      ref={tooltipRef}
      className="fixed bg-gray-950/95 backdrop-blur border border-yellow-600/60 text-white p-3.5 rounded-lg shadow-2xl max-w-sm z-50 pointer-events-none transition-opacity duration-75"
      style={{ left: coords.x, top: coords.y }}
    >
      {talent.isUnchosen ? (
        <>
          <div className="flex items-center justify-between gap-2 border-b border-gray-700/80 pb-1.5 mb-2">
            <h3 className="text-base font-bold text-yellow-300 leading-tight">
              Empty Talent Slot
            </h3>
            <span className="text-[10px] uppercase tracking-wider bg-gray-800 text-gray-300 px-1.5 py-0.5 rounded border border-gray-700">
              Unchosen
            </span>
          </div>
          <p className="text-xs text-gray-300 leading-relaxed mb-2">
            Click to select an ability from any class to populate this slot.
          </p>
          {treeName &&
            treePoints !== undefined &&
            requiredTreePoints > treePoints && (
              <p className="mt-2 text-red-400 text-xs">
                Requires {requiredTreePoints} points in {treeName}
              </p>
            )}
        </>
      ) : (
        <>
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

          {treeName &&
            treePoints !== undefined &&
            requiredTreePoints > treePoints && (
              <p className="mt-2 text-red-400 text-xs">
                Requires {requiredTreePoints} points in {treeName}
              </p>
            )}

          {isCustomClass && (
            <p className="mt-2 text-[10px] text-fuchsia-300/80 italic border-t border-fuchsia-900/40 pt-1">
              💡 Long-press / hold to replace ability
            </p>
          )}
        </>
      )}
    </div>
  );
};
