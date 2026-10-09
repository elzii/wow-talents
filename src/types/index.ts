export enum CharacterClass {
  Druid = "druid",
  Hunter = "hunter",
  Mage = "mage",
  Paladin = "paladin",
  Priest = "priest",
  Rogue = "rogue",
  Shaman = "shaman",
  Warlock = "warlock",
  Warrior = "warrior",
  Custom = "custom"
}

export type CharacterClasses =
  | "Druid"
  | "Hunter"
  | "Mage"
  | "Paladin"
  | "Priest"
  | "Rogue"
  | "Shaman"
  | "Warlock"
  | "Warrior"
  | "Custom";

export interface TalentRequirement {
  talentId: number;
  talentRank: number;
  talentName?: string;
}

export interface TalentData {
  id: number;
  name: string;
  maxRank: number;
  minPointsRequired: number;
  spellIds: number[];
  descriptions: string[];
  requirements?: TalentRequirement;
  x: number; // Column (0-3)
  y: number; // Row (0-6 in vanilla, up to 8 in tbc)
  iconName: string;
  talentLink?: string;
  // Custom class metadata (optional)
  sourceClass?: string;
  sourceTree?: string;
}

export interface TalentTreeData {
  name: string;
  talents: TalentData[];
  icon?: string;
}

export interface ClassData {
  name: string;
  talentTrees: TalentTreeData[];
  talentMap?: string[];
}

export type AllClassDataType = Record<CharacterClasses, ClassData>;

export type PointsObject = Record<number | string, number>;
