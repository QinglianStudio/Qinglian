import { Log } from "@qinglian/utils";
import { blue } from "ansi-colors";
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
      {
        cwd: info.packagePath,
      },
      (err, stdout, stderr) => {
        if (err) {
          Log.error(
            `${blue(info.packageName)} publish failed: ${err?.message}`
          );
          s(false);
        } else {
          Log.info(`${blue(info.packageName)} publish succeed.`);
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
