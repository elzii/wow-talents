import * as T from '../../types';

/**
 * Finds all talent objects where the `talentLink` key is present.
 *
 * @param characterClass - The class data to search.
 * @returns An array of talents with the `talentLink` property.
 */
export const findClassTalentLinks = (characterClass: T.ClassData): T.TalentData[] => {
  return characterClass.talentTrees.flatMap((tree) =>
    tree.talents.filter((talent) => 'talentLink' in talent)
  )
}