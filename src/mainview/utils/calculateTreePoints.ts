import * as T from '../../types';
/**
 * Calculates the total points spent in a talent tree.
 */
export const calculateTreePoints = (tree: T.TalentTreeData, points: T.TalentPointState): number => {
  return tree.talents.reduce((sum, talent) => sum + (points[talent.id] || 0), 0);
};