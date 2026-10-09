import React, { useState, useMemo, useEffect, useRef } from "react";
import { TalentData } from "../../../types";
import poolData from "./allTalentsPool.json";

export interface TalentPickerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTalent: (talent: TalentData) => void;
  targetSlot: {
    treeIndex: number;
    talent: TalentData;
  } | null;
}

export const TalentPickerModal: React.FC<TalentPickerModalProps> = ({
  isOpen,
  onClose,
  onSelectTalent,
  targetSlot
}) => {
  const [query, setQuery] = useState("");
  const [selectedClassFilter, setSelectedClassFilter] = useState<string>("All");
  const [hoveredTalent, setHoveredTalent] = useState<TalentData | null>(null);
  const [hoverPosition, setHoverPosition] = useState<{ x: number; y: number } | null>(null);
  const [page, setPage] = useState(0);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedClassFilter("All");
      setPage(0);
      setHoveredTalent(null);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  const classesList = useMemo(() => {
    const s = new Set<string>();
    poolData.forEach((t: any) => {
      if (t.sourceClass) s.add(t.sourceClass);
    });
    return ["All", ...Array.from(s).sort()];
  }, []);

  const filteredTalents = useMemo(() => {
    const q = query.trim().toLowerCase();
    return poolData.filter((t: any) => {
      if (selectedClassFilter !== "All" && t.sourceClass !== selectedClassFilter) {
        return false;
      }
      if (!q) return true;
      return (
        t.name.toLowerCase().includes(q) ||
        (t.sourceClass && t.sourceClass.toLowerCase().includes(q)) ||
        (t.sourceTree && t.sourceTree.toLowerCase().includes(q))
      );
    });
  }, [query, selectedClassFilter]);

  // 6 columns x 4 rows = 24 items per page
  const PAGE_SIZE = 24;
  const totalPages = Math.ceil(filteredTalents.length / PAGE_SIZE) || 1;
  const pagedTalents = useMemo(() => {
    const start = page * PAGE_SIZE;
    return filteredTalents.slice(start, start + PAGE_SIZE);
  }, [filteredTalents, page]);

  if (!isOpen || !targetSlot) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 select-none"
      onClick={onClose}
    >
      <div
        className="bg-neutral-900 border border-yellow-500/50 rounded-2xl shadow-2xl p-5 w-full max-w-3xl flex flex-col gap-4 text-white relative animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center border-b border-gray-800 pb-3">
          <div>
            <h2 className="text-lg font-bold text-yellow-400 flex items-center gap-2">
              <span>Select Custom Ability</span>
              <span className="text-xs bg-yellow-950 text-yellow-300 border border-yellow-700 px-2 py-0.5 rounded font-mono">
                Replacing: {targetSlot.talent.name}
              </span>
            </h2>
            <p className="text-xs text-gray-400 mt-0.5">
              Choose any ability from any class. The slot's tier requirement and coordinates are preserved.
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl font-bold px-2 py-1 leading-none rounded-lg hover:bg-gray-800 transition"
          >
            &times;
          </button>
        </div>

        {/* Search Controls */}
        <div className="flex gap-2">
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(0);
            }}
            placeholder="Search ability name, class, or specialization..."
            className="flex-1 bg-neutral-950 border border-gray-700 rounded-lg px-3.5 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
          />

          <select
            value={selectedClassFilter}
            onChange={(e) => {
              setSelectedClassFilter(e.target.value);
              setPage(0);
            }}
            className="bg-neutral-950 border border-gray-700 rounded-lg px-3 py-2 text-xs font-semibold text-gray-200 focus:outline-none focus:border-yellow-500 cursor-pointer"
          >
            {classesList.map((cls) => (
              <option key={cls} value={cls}>
                {cls === "All" ? "All Classes" : cls}
              </option>
            ))}
          </select>
        </div>

        {/* 6x4 Grid of Icons */}
        <div className="bg-neutral-950/80 p-4 rounded-xl border border-gray-800/80 min-h-[300px]">
          {pagedTalents.length === 0 ? (
            <div className="h-[268px] flex items-center justify-center text-gray-500 text-sm italic">
              No matching abilities found.
            </div>
          ) : (
            <div className="grid grid-cols-6 grid-rows-4 gap-3 justify-items-center">
              {pagedTalents.map((item: any) => {
                const iconUrl = `assets/icons/all/${item.iconName.toLowerCase()}.png`;
                return (
                  <button
                    key={`${item.id}-${item.name}`}
                    onClick={() => {
                      onSelectTalent(item);
                      onClose();
                    }}
                    onMouseEnter={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      setHoveredTalent(item);
                      setHoverPosition({ x: rect.right + 10, y: rect.top });
                    }}
                    onMouseLeave={() => {
                      setHoveredTalent(null);
                      setHoverPosition(null);
                    }}
                    className="w-12 h-12 rounded-lg bg-gray-900 border-2 border-gray-700 hover:border-yellow-400 hover:scale-110 active:scale-95 transition-all p-0.5 overflow-hidden flex items-center justify-center relative group shadow-md"
                  >
                    <img
                      src={iconUrl}
                      alt={item.name}
                      className="w-full h-full object-cover rounded pointer-events-none"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = "none";
                      }}
                    />
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Pagination & Counter */}
        <div className="flex items-center justify-between text-xs text-gray-400 pt-1">
          <div>
            Showing {pagedTalents.length} of {filteredTalents.length} abilities
          </div>
          <div className="flex items-center gap-2">
            <button
              disabled={page <= 0}
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              className="px-2.5 py-1 rounded bg-gray-800 hover:bg-gray-700 disabled:opacity-40 disabled:hover:bg-gray-800 transition font-bold text-gray-200"
            >
              Prev
            </button>
            <span className="font-semibold text-gray-300">
              Page {page + 1} of {totalPages}
            </span>
            <button
              disabled={page >= totalPages - 1}
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              className="px-2.5 py-1 rounded bg-gray-800 hover:bg-gray-700 disabled:opacity-40 disabled:hover:bg-gray-800 transition font-bold text-gray-200"
            >
              Next
            </button>
          </div>
        </div>

        {/* Floating Tooltip inside modal */}
        {hoveredTalent && hoverPosition && (
          <div
            className="fixed z-[60] bg-gray-950/95 border border-yellow-500/80 p-3 rounded-lg shadow-2xl max-w-xs text-xs pointer-events-none animate-in fade-in-50 duration-75"
            style={{
              left: Math.min(window.innerWidth - 280, hoverPosition.x),
              top: Math.max(20, Math.min(window.innerHeight - 200, hoverPosition.y))
            }}
          >
            <div className="flex items-center justify-between gap-2 border-b border-gray-800 pb-1 mb-1.5">
              <span className="font-bold text-yellow-300">{hoveredTalent.name}</span>
              {hoveredTalent.sourceClass && (
                <span className="text-[10px] bg-yellow-950 text-yellow-300 border border-yellow-800 px-1.5 py-0.2 rounded font-semibold">
                  {hoveredTalent.sourceClass}
                </span>
              )}
            </div>
            <div className="text-gray-400 mb-1">Max Rank: {hoveredTalent.maxRank}</div>
            <div className="text-green-300 leading-relaxed whitespace-pre-line">
              {hoveredTalent.descriptions?.[0]?.replace(/<[^>]+>/g, "") || "No description available."}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
