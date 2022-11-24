import { Log } from "@qinglian/utils";
import path from "path";
import fs from "fs";
import { isFileExist } from "../utils";
import { green } from "ansi-colors";

export const isWorkspaces = (rootPath: string): string[] | false => {
  const rootPackageJsonFilePath = path.join(rootPath, "./package.json");

  if (!isFileExist(rootPackageJsonFilePath)) {
    Log.error(`${rootPackageJsonFilePath}文件不存在`);
    process.exit(-1);
  }

  const packageContent = JSON.parse(
    fs.readFileSync(rootPackageJsonFilePath).toString()
  );

  const workspaces = packageContent.workspaces;

  if (workspaces) {
    Log.info(
      green("当前存在workspaces，将采用workspaces模式默认加载解析packages\n")
    );
    return workspaces;
  } else {
    Log.info(green("当前未配置workspaces，跳过workspaces模式只发布当前包\n"));
    return false;
  }
};
