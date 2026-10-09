import * as T from '../../types';

export const getClassIconByClassName = (className: T.CharacterClasses | string) => {
  try {
    return require(`../../assets/icons/class/class_${className.toLowerCase()}.jpg`)?.default;
  } catch (error) {
    console.error(`Icon for class ${className.toLowerCase()} not found.`);
    return null
  }
}