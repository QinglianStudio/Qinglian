/**
 * validate name is snake case
 * @example a_b
 * @param name 
 * @returns 
 */
export const isSnakeCase = (name: string) => {
  return /^(([a-z0-9])_?)+$/.test(name);
};


/**
 * validate name is camel case
 * @example userName
 * @param name 
 * @returns 
 */
export const isCamelCase = (name: string) => {
  return /^([a-z]([A-Za-z0-9]{0,}))(([A-Z]([A-Za-z0-9]{0,})){0,})$/.test(name);
};

/**
 * validate name is kebab case
 * @example a-b
 * @param name 
 * @returns 
 */
export const isKebabCase = (name: string) => {
  return /^(([a-z0-9])-?)+$/.test(name);
};

/**
 * validate name is pascal case
 * @example UserName
 * @param name 
 * @returns 
 */
export const isPascalCase = (name: string) => {
  return /^([A-Z]([A-Za-z0-9]{0,}))+$/.test(name);
};
