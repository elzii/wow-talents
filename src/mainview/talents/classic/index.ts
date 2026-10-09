import { warriorData } from "./warrior";
import { rogueData } from "./rogue";
import { mageData } from "./mage";
import { priestData } from "./priest";
import { druidData } from "./druid";
import { hunterData } from "./hunter";
import { paladinData } from "./paladin";
import { shamanData } from "./shaman";
import { warlockData } from "./warlock";
import { ClassData } from "../../../types";

import { initializeClassData } from "../../utils";

export const allClassesData = {
  "Warrior": initializeClassData(warriorData),
  "Shaman": initializeClassData(shamanData),
  "Paladin": initializeClassData(paladinData),
  "Rogue": initializeClassData(rogueData),
  "Druid": initializeClassData(druidData),
  "Hunter": initializeClassData(hunterData),
  "Priest": initializeClassData(priestData),
  "Mage": initializeClassData(mageData),
  "Warlock": initializeClassData(warlockData)
};

export const classColors = {
  "Warrior": "bg-amber-800",
  "Mage": "bg-cyan-500",
  "Rogue": "bg-yellow-500",
  "Druid": "bg-orange-500",
  "Priest": "bg-zinc-600",
  "Hunter": "bg-green-600",
  "Paladin": "bg-rose-500",
  "Shaman": "bg-blue-600",
  "Warlock": "bg-purple-800",
};

export const classFGColors = {
  "Warrior": "text-amber-500",
  "Mage": "text-cyan-500",
  "Rogue": "text-yellow-500",
  "Druid": "text-orange-500",
  "Priest": "text-white-500",
  "Hunter": "text-green-500",
  "Paladin": "text-rose-500",
  "Shaman": "text-blue-500",
  "Warlock": "text-purple-500",
};

export const classCoreColors = {
  "Warrior": "amber-800",
  "Mage": "cyan-500",
  "Rogue": "yellow-500",
  "Druid": "orange-500",
  "Priest": "zinc-600",
  "Hunter": "green-600",
  "Paladin": "rose-500",
  "Shaman": "blue-600",
  "Warlock": "purple-800",
}

export const classBorderColors = {
  "Warrior": "border-amber-800",
  "Mage": "border-cyan-500",
  "Rogue": "border-yellow-500",
  "Druid": "border-orange-500",
  "Priest": "border-zinc-600",
  "Hunter": "border-green-600",
  "Paladin": "border-rose-500",
  "Shaman": "border-blue-600",
  "Warlock": "border-purple-800",
};

export const classTitleColors = {
  "Warrior": "text-amber-800",
  "Mage": "text-cyan-500",
  "Rogue": "text-yellow-500",
  "Druid": "text-orange-500",
  "Priest": "text-zinc-600",
  "Hunter": "text-green-600",
  "Paladin": "text-rose-500",
  "Shaman": "text-blue-600",
  "Warlock": "text-purple-800",
};

export {
  warriorData,
  rogueData,
  mageData,
  priestData,
  druidData,
  hunterData,
  paladinData,
  shamanData,
  warlockData
}
