import { existsSync } from "fs";

/**
 * file is exist
 * @param path
 * @returns
 */
export const isFileExist = (path: string) => {
  return existsSync(path);
};

/**
 * 生成一个用不重复的ID
 */
export const GenNonDuplicateID = (randomLength = 36) => {
  return Number(
    Math.random().toString().substr(2, randomLength) + Date.now(),
  ).toString(36);
};
