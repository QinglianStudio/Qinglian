import { readFileSync } from "fs";
import path from "path";
import { isFileExist } from "../utils";

export const resolvePackageName = (packagePath): string | false => {
  const rootPackageJsonFilePath = path.join(packagePath, "./package.json");

  if (!isFileExist(rootPackageJsonFilePath)) {
    return false;
  }
  try {
    const packageContent = JSON.parse(
      readFileSync(rootPackageJsonFilePath).toString(),
    );
    return packageContent.name;
  } catch (error) {
    return false;
  }
};
