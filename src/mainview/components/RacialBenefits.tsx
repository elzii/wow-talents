import React from 'react';
import racesDataRaw from '../talents/forever/racesData.json';

export interface RacialSpell {
  id: number;
  name: string;
  iconName: string;
  description: string;
}

export interface RaceInfo {
  id: string;
  name: string;
  iconName: string;
  racials: RacialSpell[];
}

const racesData = racesDataRaw as Record<string, RaceInfo>;

export interface RacialBenefitsProps {
  selectedRace: string;
}

export const RacialBenefits: React.FC<RacialBenefitsProps> = ({ selectedRace }) => {
  const currentRace = racesData[selectedRace] || racesData['Undead'];

  if (!currentRace) return null;

  return (
    <div className="w-full bg-neutral-900/90 backdrop-blur border border-neutral-800/90 rounded-2xl p-4 shadow-xl select-none">
      <div className="flex items-center justify-between border-b border-neutral-800/80 pb-3 mb-3">
        <div className="flex items-center gap-3">
          <img
            src={`assets/icons/all/${currentRace.iconName.toLowerCase()}.png`}
            alt={currentRace.name}
            className="w-7 h-7 rounded-lg border border-neutral-700 object-cover shadow-sm"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = `assets/icons/all/${currentRace.iconName.toLowerCase()}.jpg`;
            }}
          />
          <div>
            <h2 className="text-sm font-black tracking-wider uppercase text-yellow-400">
              {currentRace.name} Racial Traits
            </h2>
            <p className="text-[11px] text-gray-400 font-medium">
              Innate passive abilities and active racial powers for {currentRace.name}
            </p>
          </div>
        </div>

        <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 bg-neutral-800/80 px-2.5 py-1 rounded-full border border-neutral-700/60">
          {currentRace.racials.length} Traits
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {currentRace.racials.map((trait) => (
          <div
            key={trait.id}
            className="bg-black/60 hover:bg-neutral-800/60 border border-neutral-800/90 hover:border-yellow-500/50 rounded-xl p-3 flex items-start gap-3 transition-all duration-150 shadow-inner group"
            style={{ alignItems: 'center' }}
          >
            <div className="relative shrink-0">
              <img
                src={`assets/icons/all/${trait.iconName.toLowerCase()}.png`}
                alt={trait.name}
                className="w-10 h-10 rounded-lg border border-neutral-700 group-hover:border-yellow-400 object-cover transition-colors duration-150 shadow-md"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = `assets/icons/all/${trait.iconName.toLowerCase()}.jpg`;
                }}
              />
            </div>
            <div className="flex flex-col min-w-0 flex-1">
              <span className="text-xs font-bold text-gray-200 group-hover:text-yellow-300 transition-colors truncate">
                {trait.name}
              </span>
              <p className="text-[11px] text-gray-400 group-hover:text-gray-300 leading-snug mt-1 transition-colors">
                {trait.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
