import React from 'react';
import { CharacterClasses } from '../../types';
import { getClassIconByClassName } from '../utils/getClassIconByClassName';

export interface ClassSelectorProps {
  availableClasses: CharacterClasses[];
  selectedClass: CharacterClasses;
  onSelectClass: (className: CharacterClasses) => void;
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

export const ClassSelector: React.FC<ClassSelectorProps> = ({
  availableClasses,
  selectedClass,
  onSelectClass
}) => {
  return (
    <div className="bg-neutral-900/90 backdrop-blur border border-neutral-800/90 p-2.5 rounded-xl flex flex-wrap justify-center items-center gap-2 mb-4 shadow-xl">
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
  );
};