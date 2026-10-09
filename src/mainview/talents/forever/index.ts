import { AllClassDataType } from "../../../types";
import { druidData } from "./druid";
import { hunterData } from "./hunter";
import { mageData } from "./mage";
import { paladinData } from "./paladin";
import { priestData } from "./priest";
import { rogueData } from "./rogue";
import { shamanData } from "./shaman";
import { warlockData } from "./warlock";
import { warriorData } from "./warrior";

export const allClassesData: Partial<AllClassDataType> = {
  Druid: druidData,
  Hunter: hunterData,
  Mage: mageData,
  Paladin: paladinData,
  Priest: priestData,
  Rogue: rogueData,
  Shaman: shamanData,
  Warlock: warlockData,
  Warrior: warriorData,
};
