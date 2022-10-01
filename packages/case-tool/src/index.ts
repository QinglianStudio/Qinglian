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

/**
 * convert snake case to pascal case
 * @param name
 * @returns
 */
export const snakeToPascal = (name: string) => {
  return name
    .split("_")
    .filter(Boolean)
    .map((i) => `${i[0].toUpperCase()}${i.slice(1)}`)
    .join("");
};

/**
 * convert kebab case to pascal case
 * @param name
 * @returns
 */
export const kebabToPascal = (name: string) => {
  return name
    .split("-")
    .filter(Boolean)
    .map((i) => `${i[0].toUpperCase()}${i.slice(1)}`)
    .join("");
};

/**
 * convert camel case to pascal case
 * @param name
 * @returns
 */
export const camelToPascal = (name: string) => {
  return name ? `${name[0].toUpperCase()}${name.slice(1)}` : name;
};
