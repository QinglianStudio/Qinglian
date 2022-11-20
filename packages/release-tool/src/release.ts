import chalk from "chalk";
import ChildProcess from "child_process";
import { WorkspaceInfo } from "./resolvePackages";

const SEMVER_VERSION = ["major", "minor", "patch"];

export const getNpmVersionCommander = (version: string) => {
  return SEMVER_VERSION.includes(version)
    ? `npm version ${version}`
    : `npm version prerelease --preid ${version}`;
};

const runRelease = async (info: WorkspaceInfo, version: string) => {
  const npmVersionCommander = getNpmVersionCommander(version);
  return await new Promise((s) => {
    ChildProcess.exec(
      `${npmVersionCommander} && npm publish --access public`,
      (err, stdout, stderr) => {
        if (err || stderr) {
          console.log(
            `${chalk.blue(info.packageName)} publish failed: ${
              err.message || stderr.toString()
            }`
          );
          s(false);
        } else {
          console.log(`${chalk.blue(info.packageName)} publish succeed.`);
          s(true);
        }
      }
    );
  });
};

export const releaseNpmPackageVersion = async (
  packages: WorkspaceInfo[],
  version: string
) => {
  const successPackages = [];
  const failedPackages = [];
  for (let index = 0; index < packages.length; index++) {
    const element = packages[index];
    const isSucceed = await runRelease(element, version);
    isSucceed ? successPackages.push(element) : failedPackages.push(element);
  }
};
