import React, { useState, useRef, useEffect } from 'react';
import { CharacterClasses } from '../../types';
import { getClassIconByClassName } from '../utils/getClassIconByClassName';
import racesDataRaw from '../talents/forever/racesData.json';

export interface ClassSelectorProps {
  availableClasses: CharacterClasses[];
  selectedClass: CharacterClasses;
  onSelectClass: (className: CharacterClasses) => void;
  selectedRace: string;
  onSelectRace: (race: string) => void;
}

const classColorMap: Record<string, string> = {
  Druid: "border-amber-600 hover:border-amber-400",
  Hunter: "border-green-600 hover:border-green-400",
  Mage: "border-sky-400 hover:border-sky-300",
  Paladin: "border-pink-400 hover:border-pink-300",
  Priest: "border-gray-200 hover:border-white",
  Rogue: "border-yellow-400 hover:border-yellow-300",
  Shaman: "border-blue-600 hover:border-blue-400",
  Warlock: "border-purple-600 hover:border-purple-400",
  Warrior: "border-amber-800 hover:border-amber-600",
  Custom: "border-fuchsia-500 hover:border-fuchsia-400 shadow-fuchsia-500/20"
};

const racesList = Object.values(racesDataRaw).map((r: any) => ({
  id: r.id,
  name: r.name,
  iconName: r.iconName
}));

export const ClassSelector: React.FC<ClassSelectorProps> = ({
  availableClasses,
  selectedClass,
  onSelectClass,
  selectedRace,
  onSelectRace
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const activeRaceInfo = racesList.find((r) => r.name === selectedRace) || racesList.find((r) => r.name === 'Undead') || racesList[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="bg-neutral-900/90 backdrop-blur border border-neutral-800/90 p-2.5 rounded-xl flex flex-wrap items-center justify-between gap-3 mb-4 shadow-xl">
      {/* Left-justified: Race Selector Dropdown */}
      <div className="relative" ref={dropdownRef}>
        <button
          type="button"
          onClick={() => setIsDropdownOpen((prev) => !prev)}
          className="flex items-center gap-2.5 bg-black/70 hover:bg-neutral-800/80 border border-neutral-700/80 hover:border-yellow-500/80 px-3 py-1.5 rounded-lg transition-all duration-150 text-xs font-semibold shadow-md group"
          title="Select Race"
        >
          {/*<span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">
            Race:
          </span> */}
          {activeRaceInfo && (
            <img
              src={`assets/icons/all/${activeRaceInfo.iconName.toLowerCase()}.png`}
              alt={activeRaceInfo.name}
              className="w-5 h-5 rounded object-cover border border-neutral-600 group-hover:border-yellow-400 transition-colors"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = `assets/icons/all/${activeRaceInfo.iconName.toLowerCase()}.jpg`;
              }}
            />
          )}
          <span className="text-gray-100 font-bold group-hover:text-yellow-300 transition-colors">
            {activeRaceInfo?.name || 'Undead'}
          </span>
          <svg
            className={`w-3.5 h-3.5 text-gray-400 group-hover:text-yellow-400 transition-transform duration-150 ${
              isDropdownOpen ? 'rotate-180 text-yellow-400' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute left-0 mt-1.5 w-60 max-h-80 overflow-y-auto bg-neutral-950/95 border border-neutral-700/90 rounded-xl shadow-2xl py-1.5 z-50 backdrop-blur">
            <div className="px-3 py-1 text-[10px] font-bold text-gray-400 uppercase tracking-wider border-b border-neutral-800/80 mb-1">
              Select Character Race
            </div>
            {racesList.map((race) => {
              const isSelected = race.name === selectedRace;
              return (
                <button
                  key={race.id}
                  type="button"
                  onClick={() => {
                    onSelectRace(race.name);
                    setIsDropdownOpen(false);
                  }}
                  className={`w-full flex items-center gap-2.5 px-3 py-1.5 text-left text-xs font-semibold transition-colors ${
                    isSelected
                      ? 'bg-yellow-500/20 text-yellow-300 font-bold border-l-2 border-yellow-400'
                      : 'text-gray-300 hover:bg-neutral-800/80 hover:text-white'
                  }`}
                >
                  <img
                    src={`assets/icons/all/${race.iconName.toLowerCase()}.png`}
                    alt={race.name}
                    className="w-5 h-5 rounded object-cover border border-neutral-700 shrink-0"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = `assets/icons/all/${race.iconName.toLowerCase()}.jpg`;
                    }}
                  />
                  <span className="truncate">{race.name}</span>
                  {isSelected && (
                    <span className="ml-auto text-yellow-400 text-xs">✓</span>
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Right-justified: Class Selector Buttons */}
      <div className="flex flex-wrap items-center justify-end gap-2">
        {availableClasses.map((className) => {
          const isSelected = selectedClass === className;
          const iconSrc = getClassIconByClassName(className);
          const borderColor = classColorMap[className] || "border-neutral-700";

          return (
            <button
              key={className}
              onClick={() => onSelectClass(className)}
              className={`relative px-3 py-1.5 rounded-lg border-2 transition-all duration-150 flex items-center gap-2 overflow-hidden ${borderColor} ${
                isSelected
                  ? "bg-neutral-800 ring-2 ring-yellow-400 scale-105 shadow-md"
                  : "bg-black/60 opacity-80 hover:opacity-100 hover:scale-102"
              }`}
            >
              {iconSrc && (
                <img
                  src={iconSrc}
                  alt={className}
                  className="w-5 h-5 rounded object-cover"
                />
              )}
              <span
                className={`text-xs font-bold tracking-wide ${
                  isSelected ? "text-yellow-300" : "text-gray-300"
                }`}
              >
                {className}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};