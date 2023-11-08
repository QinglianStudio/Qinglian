import path from "path";

export const readConfig = async () => {
  const configs = await import(path.resolve("qinglian.config.js"));
  return configs;
};
