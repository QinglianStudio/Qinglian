import chalk from "chalk";
import path from "path";
import fs from "fs";
import { isFileExist } from "./utils";

export const isWorkspaces = (rootPath: string): string[] | false => {
  const rootPackageJsonFilePath = path.join(rootPath, "./package.json");

  if (!isFileExist(rootPackageJsonFilePath)) {
    console.log(
      `\n ❌ ${chalk.red(`${rootPackageJsonFilePath}文件不存在 \n`)}`
    );
    process.exit(-1);
  }

  const packageContent = JSON.parse(
    fs.readFileSync(rootPackageJsonFilePath).toString()
  );

  const workspaces = packageContent.workspaces;

  if (workspaces) {
    console.log(
      chalk.green(
        "\n当前存在workspaces，将采用workspaces模式默认加载解析packages\n"
      )
    );
    return workspaces;
  } else {
    console.log(
      chalk.green("\n当前未配置workspaces，跳过workspaces模式只发布当前包\n")
    );
    return false;
  }
};
