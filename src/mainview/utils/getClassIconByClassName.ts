import * as T from '../../types';

export const getClassIconByClassName = (className: T.CharacterClasses | string) => {
  const norm = className.toLowerCase();
  if (norm === "custom") {
    return "assets/icons/all/inv_misc_gem_variety_02.png";
  }
  return `assets/icons/class/class_${norm}.jpg`;
};