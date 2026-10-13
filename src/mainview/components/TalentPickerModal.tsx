import React, { useState, useMemo, useEffect, useRef } from "react";
import { TalentData } from "../../types";
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

const ITEM_HEIGHT = 80;
const CONTAINER_HEIGHT = 460;
const OVERSCAN = 4;

export const TalentPickerModal: React.FC<TalentPickerModalProps> = ({
  isOpen,
  onClose,
  onSelectTalent,
  targetSlot
}) => {
  const [query, setQuery] = useState("");
  // Remember previously chosen class filter via localStorage
  const [selectedClassFilter, setSelectedClassFilter] = useState<string>(() => {
    try {
      return localStorage.getItem("wow_custom_picker_class_filter") || "All";
    } catch {
      return "All";
    }
  });

  const [scrollTop, setScrollTop] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Focus input and reset query on open (preserving class filter)
  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setScrollTop(0);
      if (containerRef.current) {
        containerRef.current.scrollTop = 0;
      }
      setTimeout(() => inputRef.current?.focus(), 60);
    }
  }, [isOpen]);

  const handleClassFilterChange = (newClass: string) => {
    setSelectedClassFilter(newClass);
    setScrollTop(0);
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
    try {
      localStorage.setItem("wow_custom_picker_class_filter", newClass);
    } catch {}
  };

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setScrollTop(0);
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  };

  const classesList = useMemo(() => {
    const s = new Set<string>();
    poolData.forEach((t: any) => {
      if (t.sourceClass) s.add(t.sourceClass);
    });
    return ["All", ...Array.from(s).sort()];
  }, []);

  const cleanDescription = (raw: string) => {
    if (!raw) return "";
    return raw
      .replace(/<!--[\s\S]*?-->/g, "")
      .replace(/<br\s*\/?>/gi, " ")
      .replace(/<[^>]+>/g, "");
  };

  const filteredTalents = useMemo(() => {
    const q = query.trim().toLowerCase();
    return (poolData as TalentData[]).filter((t: any) => {
      if (selectedClassFilter !== "All" && t.sourceClass !== selectedClassFilter) {
        return false;
      }
      if (!q) return true;
      return (
        t.name.toLowerCase().includes(q) ||
        (t.sourceClass && t.sourceClass.toLowerCase().includes(q)) ||
        (t.sourceTree && t.sourceTree.toLowerCase().includes(q)) ||
        (t.descriptions && t.descriptions.some((d: string) => d.toLowerCase().includes(q)))
      );
    });
  }, [query, selectedClassFilter]);

  // Virtual Scroller Calculations
  const totalCount = filteredTalents.length;
  const startIndex = Math.max(0, Math.floor(scrollTop / ITEM_HEIGHT) - OVERSCAN);
  const endIndex = Math.min(
    totalCount,
    Math.ceil((scrollTop + CONTAINER_HEIGHT) / ITEM_HEIGHT) + OVERSCAN
  );

  const visibleItems = useMemo(() => {
    return filteredTalents.slice(startIndex, endIndex);
  }, [filteredTalents, startIndex, endIndex]);

  if (!isOpen || !targetSlot) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 select-none"
      onClick={onClose}
    >
      <div
        className="bg-neutral-900 border border-yellow-500/60 rounded-2xl shadow-2xl p-5 w-full max-w-2xl flex flex-col gap-4 text-white relative animate-in fade-in duration-150"
        style={{ maxHeight: "90vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center border-b border-gray-800 pb-3">
          <div>
            <h2 className="text-base font-bold text-yellow-400 flex items-center gap-2">
              <span>Select Custom Ability</span>
              <span className="text-xs bg-yellow-950 text-yellow-300 border border-yellow-700 px-2 py-0.5 rounded font-mono">
                Slot: {targetSlot.talent.name}
              </span>
            </h2>
            <p className="text-xs text-gray-400 mt-0.5">
              Choose an ability to assign to this slot. The tree coordinate and tier requirement are preserved.
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl font-bold px-2 py-0.5 leading-none rounded-lg hover:bg-gray-800 transition"
          >
            &times;
          </button>
        </div>

        {/* Search & Class Filter Controls */}
        <div className="flex gap-2">
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={handleQueryChange}
            placeholder="Search ability name, description, class, or specialization..."
            className="flex-1 bg-neutral-950 border border-gray-700 rounded-lg px-3.5 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
          />

          <select
            value={selectedClassFilter}
            onChange={(e) => handleClassFilterChange(e.target.value)}
            className="bg-neutral-950 border border-gray-700 rounded-lg px-3 py-2 text-xs font-semibold text-gray-200 focus:outline-none focus:border-yellow-500 cursor-pointer"
          >
            {classesList.map((cls) => (
              <option key={cls} value={cls}>
                {cls === "All" ? "All Classes" : cls}
              </option>
            ))}
          </select>
        </div>

        {/* Virtualized Row List Container */}
        <div
          ref={containerRef}
          onScroll={(e) => setScrollTop(e.currentTarget.scrollTop)}
          className="relative overflow-y-auto custom-scrollbar rounded-xl border border-neutral-800 bg-neutral-950/90"
          style={{ height: `${CONTAINER_HEIGHT}px` }}
        >
          {totalCount === 0 ? (
            <div className="h-full flex items-center justify-center text-gray-500 text-sm italic">
              No matching abilities found.
            </div>
          ) : (
            <div
              style={{
                height: `${totalCount * ITEM_HEIGHT}px`,
                position: "relative",
                width: "100%"
              }}
            >
              {visibleItems.map((item: any, index) => {
                const itemIndex = startIndex + index;
                const topPos = itemIndex * ITEM_HEIGHT;
                const abilityIconUrl = `assets/icons/all/${item.iconName.toLowerCase()}.png`;
                const classIconUrl = `assets/icons/class/class_${(item.sourceClass || "warrior").toLowerCase()}.jpg`;
                const desc = cleanDescription(item.descriptions?.[0] || "");

                return (
                  <div
                    key={`${item.id}-${item.name}-${itemIndex}`}
                    onClick={() => {
                      onSelectTalent(item);
                      onClose();
                    }}
                    style={{
                      position: "absolute",
                      top: `${topPos}px`,
                      left: 0,
                      right: 0,
                      height: `${ITEM_HEIGHT}px`
                    }}
                    className="p-2.5 flex items-center justify-between border-b border-gray-800/80 hover:border-yellow-500/80 hover:bg-yellow-950/20 cursor-pointer transition-colors duration-150 group"
                  >
                    <div className="flex items-center gap-3 overflow-hidden mr-3">
                      {/* Class Crest */}
                      <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-gray-700 group-hover:border-yellow-400 bg-gray-900 shrink-0">
                        <img
                          src={classIconUrl}
                          alt={item.sourceClass || ""}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLElement).style.display = "none";
                          }}
                        />
                      </div>

                      {/* Ability Icon */}
                      <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-gray-700 group-hover:border-yellow-400 bg-gray-900 shrink-0">
                        <img
                          src={abilityIconUrl}
                          alt={item.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLElement).style.display = "none";
                          }}
                        />
                      </div>

                      {/* Details Column */}
                      <div className="overflow-hidden">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-white group-hover:text-yellow-300 text-sm truncate">
                            {item.name}
                          </span>
                          {item.sourceClass && (
                            <span className="text-[10px] font-semibold text-gray-400 bg-gray-800 px-1.5 py-0.2 rounded border border-gray-700 shrink-0">
                              {item.sourceClass}{item.sourceTree ? ` • ${item.sourceTree}` : ""}
                            </span>
                          )}
                          <span className="text-[10px] font-bold text-yellow-300 bg-yellow-950/50 px-1.5 py-0.2 rounded border border-yellow-800/60 shrink-0">
                            Rank {item.maxRank}
                          </span>
                        </div>
                        <p className="text-xs text-gray-400 line-clamp-1 leading-normal mt-0.5 group-hover:text-gray-300">
                          {desc || "No description provided."}
                        </p>
                      </div>
                    </div>

                    {/* Action Hint */}
                    <div className="shrink-0 flex items-center pr-2">
                      <span className="text-xs font-semibold text-gray-500 group-hover:text-yellow-300 transition-colors">
                        Select &rarr;
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-gray-800 pt-2 text-xs text-gray-400">
          <span>
            Showing {totalCount} abilities {selectedClassFilter !== "All" && `(${selectedClassFilter})`}
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-200 font-semibold transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
