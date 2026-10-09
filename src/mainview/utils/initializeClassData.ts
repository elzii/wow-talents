import * as T from '../../types';

export const initializeClassData = (data: T.ClassData): T.ClassData => {
  if (!data?.talentTrees) {
    // @ts-ignore
    if (data) data.talentMap = []
    return data
  }
  data.talentMap = data.talentTrees.flatMap(tree => tree.talents.map(t => t.id.toString()));
  return data;
};