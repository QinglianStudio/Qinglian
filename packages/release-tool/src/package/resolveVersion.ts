import { Log } from "@qinglian/utils";
import { readFileSync, writeFileSync } from "fs";
import path from "path";
import { inc, ReleaseType } from "semver";
import { SEMVER_VERSION } from "./constant";
import { isFileExist } from "../utils";

/**
 * resolve current package version
 * @param packagePath
 * @returns
 */
export const getOldVersion = (packagePath) => {
  const packageFilePath = path.join(packagePath, "./package.json");
  if (!isFileExist(packageFilePath)) {
    Log.error(`${packageFilePath} 文件不存在，无法进行构建\n`);
    process.exit(-1);
  }
  try {
    const packageContent = JSON.parse(readFileSync(packageFilePath).toString());
    return packageContent.version || "0.0.0";
  } catch (error) {
    Log.error(`${packageFilePath} 不是标准JSON文件，请检查格式\n`);
    process.exit(-1);
  }
};

/**
 * get new package version
 * @param version old package version
 * @param release ReleaseType
 * @returns
 */
export const resolveVersion = (version: string, release: string) => {
  const v = SEMVER_VERSION.includes(release) ? release : "prerelease";
  return inc(version, v as ReleaseType, v === "prerelease" && release);
};

/**
 * update package.json or package-lock.json
 * @param version
 * @param packagePath
 */
export const updatePackageAndLockFileVersion = (
  version: string,
  packagePath: string
) => {
  const packageFilePath = path.join(packagePath, "./package.json");
  const packageLockFilePath = path.join(packagePath, "./package-lock.json");
  if (!isFileExist(packageFilePath)) {
    Log.error(`${packageFilePath} 文件不存在，无法进行构建\n`);
    process.exit(-1);
  }
  try {
    const packageContent = JSON.parse(readFileSync(packageFilePath).toString());
    packageContent.version = version;
    writeFileSync(packageFilePath, JSON.stringify(packageContent, null, 2));
  } catch (error) {
    Log.error(`${packageFilePath} 更新失败.${error.message}\n`);
    process.exit(-1);
  }
  if (isFileExist(packageLockFilePath)) {
    try {
      const packageContent = JSON.parse(
        readFileSync(packageLockFilePath).toString()
      );
      packageContent.version = version;
      writeFileSync(
        packageLockFilePath,
        JSON.stringify(packageContent, null, 2)
      );
    } catch (error) {
      Log.error(`${packageLockFilePath} 更新失败.${error.message}\n`);
      process.exit(-1);
    }
  }
};
