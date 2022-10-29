import fs, { access } from "fs";
import { promisify } from "util";

// check file already exist
export const isExistFile = async (path: string) => {
  try {
    await promisify(access)(path, fs.constants.F_OK);
    return true;
  } catch (error) {
    return false;
  }
};
