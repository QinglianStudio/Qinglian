import { Log } from "@qinglian/utils";
import { blue } from "ansi-colors";
import ChildProcess from "child_process";
import { WorkspaceInfo } from "./resolvePackages";
import {
  getOldVersion,
  resolveVersion,
  updatePackageAndLockFileVersion,
} from "./resolveVersion";

const runRelease = async (info: WorkspaceInfo, version: string) => {
  const currentVersion = getOldVersion(info.packagePath);
  const newVersion = resolveVersion(currentVersion, version);
  updatePackageAndLockFileVersion(newVersion, info.packagePath);
  return await new Promise((s) => {
    ChildProcess.exec(
      "npm publish --access public",
      {
        cwd: info.packagePath,
      },
      (err, stdout, stderr) => {
        if (err) {
          Log.error(
            `${blue(info.packageName)}@${newVersion} publish failed: ${
              err?.message
            }`
          );
          s(false);
        } else {
          Log.success(
            `${blue(info.packageName)}@${newVersion} publish succeed.`
          );
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
