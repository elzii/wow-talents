import React, { useState, useMemo, useEffect, useRef } from "react";
import { TalentData } from "../../types";
import catalogData from "../talents/forever/allTreesCatalog.json";

export interface TreeCatalogItem {
  id: string;
  className: string;
  treeIndex: number;
  treeName: string;
  talentCount: number;
  iconName: string;
  classIcon: string;
  talents: TalentData[];
}

export interface TreeCopyModalProps {
  isOpen: boolean;
  onClose: () => void;
  targetTreeIndex: number;
  currentTreeName: string;
  onSelectTree: (selected: { treeName: string; talents: TalentData[] }) => void;
}

export const TreeCopyModal: React.FC<TreeCopyModalProps> = ({
  isOpen,
  onClose,
  targetTreeIndex,
  currentTreeName,
  onSelectTree
}) => {
  const [query, setQuery] = useState("");
  const [selectedClassFilter, setSelectedClassFilter] = useState<string>("All");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedClassFilter("All");
      setTimeout(() => inputRef.current?.focus(), 60);
    }
  }, [isOpen]);

  const classesList = useMemo(() => {
    const s = new Set<string>();
    (catalogData as TreeCatalogItem[]).forEach((t) => {
      s.add(t.className);
    });
    return ["All", ...Array.from(s).sort()];
  }, []);

  const filteredTrees = useMemo(() => {
    const q = query.trim().toLowerCase();
    return (catalogData as TreeCatalogItem[]).filter((item) => {
      if (selectedClassFilter !== "All" && item.className !== selectedClassFilter) {
        return false;
      }
      if (!q) return true;
      return (
        item.treeName.toLowerCase().includes(q) ||
        item.className.toLowerCase().includes(q)
      );
    });
  }, [query, selectedClassFilter]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 select-none"
      onClick={onClose}
    >
      <div
        className="bg-neutral-900 border border-yellow-500/60 rounded-2xl shadow-2xl p-5 w-full max-w-2xl flex flex-col gap-4 text-white relative animate-in fade-in duration-150"
        style={{ maxHeight: "88vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center border-b border-gray-800 pb-3">
          <div>
            <h2 className="text-base font-bold text-yellow-400 flex items-center gap-2">
              <span>Copy Entire Class Specialization</span>
              <span className="text-xs bg-yellow-950 text-yellow-300 border border-yellow-700 px-2 py-0.5 rounded font-mono">
                Tree #{targetTreeIndex + 1}: {currentTreeName}
              </span>
            </h2>
            <p className="text-xs text-gray-400 mt-0.5">
              Select any class specialization tree to copy all abilities, requirements, and ranks into this custom tree.
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl font-bold px-2 py-0.5 leading-none rounded-lg hover:bg-gray-800 transition"
          >
            &times;
          </button>
        </div>

        {/* Search & Filter Controls */}
        <div className="flex gap-2">
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search specialization or class (e.g. Shadow, Frost, Paladin)..."
            className="flex-1 bg-neutral-950 border border-gray-700 rounded-lg px-3.5 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
          />

          <select
            value={selectedClassFilter}
            onChange={(e) => setSelectedClassFilter(e.target.value)}
            className="bg-neutral-950 border border-gray-700 rounded-lg px-3 py-2 text-xs font-semibold text-gray-200 focus:outline-none focus:border-yellow-500 cursor-pointer"
          >
            {classesList.map((cls) => (
              <option key={cls} value={cls}>
                {cls === "All" ? "All Classes" : cls}
              </option>
            ))}
          </select>
        </div>

        {/* Trees List */}
        <div className="flex-1 overflow-y-auto pr-1 space-y-2 max-h-[460px] custom-scrollbar">
          {filteredTrees.length === 0 ? (
            <div className="py-12 text-center text-gray-500 text-sm italic">
              No matching class trees found.
            </div>
          ) : (
            filteredTrees.map((item) => {
              const specIconUrl = `assets/icons/all/${item.iconName.toLowerCase()}.png`;
              const classIconUrl = `assets/icons/class/class_${item.className.toLowerCase()}.jpg`;

              return (
                <div
                  key={item.id}
                  onClick={() => {
                    onSelectTree({
                      treeName: item.treeName,
                      talents: item.talents
                    });
                    onClose();
                  }}
                  className="flex items-center justify-between p-3 rounded-xl bg-neutral-950 border border-gray-800 hover:border-yellow-500/80 hover:bg-yellow-950/20 cursor-pointer transition-all duration-150 group"
                >
                  <div className="flex items-center gap-3">
                    {/* Class Crest */}
                    <div className="relative w-11 h-11 rounded-lg overflow-hidden border border-gray-700 group-hover:border-yellow-400 bg-gray-900 shrink-0">
                      <img
                        src={classIconUrl}
                        alt={item.className}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = "none";
                        }}
                      />
                    </div>

                    {/* Spec Icon */}
                    <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-gray-700 group-hover:border-yellow-400 bg-gray-900 shrink-0">
                      <img
                        src={specIconUrl}
                        alt={item.treeName}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = "none";
                        }}
                      />
                    </div>

                    {/* Titles */}
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white group-hover:text-yellow-300 text-sm">
                          {item.treeName}
                        </span>
                        <span className="text-[11px] font-semibold text-gray-400 bg-gray-800 px-2 py-0.5 rounded border border-gray-700">
                          {item.className}
                        </span>
                      </div>
                      <p className="text-xs text-gray-400 mt-0.5">
                        {item.talentCount} talents • Standard progression tree
                      </p>
                    </div>
                  </div>

                  {/* Copy Button action hint */}
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-gray-400 group-hover:text-yellow-300 transition-colors">
                      Copy Tree &rarr;
                    </span>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-gray-800 pt-3 text-xs text-gray-400">
          <span>Found {filteredTrees.length} talent trees</span>
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
