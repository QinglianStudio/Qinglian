import { GenNonDuplicateID } from "./utils";
import { WorkspaceInfo } from "./resolvePackages";
import { resolvePackageName } from "./resolvePackageName";
import { Log } from "@qinglian/utils";

export const resolveSinglePackage = (): WorkspaceInfo => {
  const rootPath = process.cwd();

  const name = resolvePackageName(rootPath);
  if (!name) {
    Log.error("项目不存在package.json或者格式有误，无法进行发布操作.\n");
    process.exit(-1);
  }
  return {
    id: GenNonDuplicateID(),
    packageName: name,
    packagePath: rootPath,
    workspace: "",
  };
};
