export const isSnakeCase = (name: string) => {
  return /^(([a-z0-9])_?)+$/.test(name);
};

export const isCamelCase = (name: string) => {
  return /^([a-z]([A-Za-z0-9]{0,}))(([A-Z]([A-Za-z0-9]{0,})){0,})$/.test(name);
};

export const isKebabCase = (name: string) => {
  return /^(([a-z0-9])_?)+$/.test(name);
};

export const isPascalCase = (name: string) => {
  return /^([A-Z]([A-Za-z0-9]{0,}))+$/.test(name);
};
