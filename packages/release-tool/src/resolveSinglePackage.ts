import { Log } from "@qinglian/utils";
import path from "path";
import fs from "fs";
import { GenNonDuplicateID, isFileExist } from "./utils";
import { WorkspaceInfo } from "./resolvePackages";

export const resolveSinglePackage = (): WorkspaceInfo => {
  const rootPath = process.cwd();
  const rootPackageJsonFilePath = path.join(rootPath, "./package.json");

  if (!isFileExist(rootPackageJsonFilePath)) {
    Log.error(`${rootPackageJsonFilePath}文件不存在`);
    process.exit(-1);
  }
  const packageContent = JSON.parse(
    fs.readFileSync(rootPackageJsonFilePath).toString()
  );

  const packageName = packageContent.name;
  return {
    id: GenNonDuplicateID(),
    packageName,
    packagePath: rootPath,
    workspace: "",
  };
};
