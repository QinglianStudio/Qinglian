import fs from "fs";
import path from "path";
import process from "process";
import * as glob from "glob";
import { isWorkspaces } from "./workspace";
import { GenNonDuplicateID } from "../utils";
import { resolvePackageName } from "./resolvePackageName";
import { Log } from "@qinglian/utils";

export interface WorkspaceInfo {
  id: string;
  /**
   * package名称
   */
  packageName: string;
  /**
   * 所属workspace父级目录
   */
  workspace: string;
  /**
   * package路径
   */
  packagePath: string;
}

export const resolvePackages = async (): Promise<WorkspaceInfo[] | false> => {
  const rootPath = process.cwd();
  const workspace = isWorkspaces(rootPath);

  if (workspace) {
    const packages = [];
    workspace.forEach((i) => {
      const files = glob.sync(path.join(rootPath, i));
      files.forEach((item) => {
        const stat = fs.lstatSync(item);
        if (stat.isDirectory() === true) {
          const parentPath = path.resolve(item, "..");
          const packageName = resolvePackageName(item);
          const ignoreFolderName = path.basename(item);
          packageName
            ? packages.push({
                packageName,
                workspace: path.basename(parentPath),
                packagePath: item,
                id: GenNonDuplicateID(),
              })
            : Log.warn(
                `${ignoreFolderName} 不存在package.json或者格式有误，已跳过对应文件夹.`,
              );
        }
      });
    });
    return packages;
  } else {
    return false;
  }
};
