import { TalentData, PointsObject } from "../../../types";
import * as React from "react";

interface Props {
  talent: TalentData;
  points: PointsObject;
  onSpend: (talentId: number) => void;
  onRefund: (talentId: number) => void;
  canSpend: boolean;
  iconName?: string;
}

export const TalentIcon: React.FC<Props> = ({
  talent,
  points,
  onSpend,
  onRefund,
  canSpend,
  iconName
}) => {
  const rank = points[talent.id] || 0;
  const isMaxRank = rank === talent.maxRank;

  let borderColor = "border-gray-600";
  let filterStyles: React.CSSProperties = {};

  if (canSpend && !isMaxRank) borderColor = "border-green-500 shadow-lg shadow-green-500/20";
  if (rank > 0 && !isMaxRank) borderColor = "border-yellow-400";
  if (isMaxRank) borderColor = "border-yellow-500 shadow-md shadow-yellow-500/30";

  const locked = !canSpend && rank === 0;
  if (locked) {
    filterStyles = { filter: "grayscale(100%) brightness(60%)" };
  }

  // Path resolved via static copy in electrobun views
  const normalizedIcon = (iconName || talent.iconName || "").toLowerCase();
  const iconUrl = normalizedIcon ? `assets/icons/all/${normalizedIcon}.png` : "";

  const getIconInitial = (name: string) =>
    name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase();

  const [imgError, setImgError] = React.useState(false);

  return (
    <div
      className="relative w-14 h-14 select-none group"
      onContextMenu={(e) => {
        e.preventDefault();
        onRefund(talent.id);
      }}
    >
      <div
        className={`w-full h-full bg-gray-900 border-2 rounded-md flex items-center justify-center cursor-pointer transition-all duration-150 overflow-hidden ${borderColor} ${
          locked ? "opacity-60" : "hover:scale-105"
        }`}
        onClick={() => onSpend(talent.id)}
        style={filterStyles}
      >
        {iconUrl && !imgError ? (
          <img
            src={iconUrl}
            alt={talent.name}
            className="w-full h-full object-cover pointer-events-none"
            onError={() => setImgError(true)}
          />
        ) : (
          <span className="text-xs font-bold text-gray-400">
            {getIconInitial(talent.name)}
          </span>
        )}
      </div>

      {rank > 0 && (
        <div
          className={`absolute -bottom-1.5 -right-1.5 min-w-[20px] h-5 px-1 bg-black/90 text-white rounded flex items-center justify-center text-xs font-bold border ${
            isMaxRank ? "border-yellow-400 text-yellow-300" : "border-green-400 text-green-300"
          }`}
        >
          {rank}
        </div>
      )}
    </div>
  );
};