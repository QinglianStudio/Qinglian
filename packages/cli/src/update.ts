import { execa } from "execa";
import ora from "ora";

const PKG_LIST = ["so-server", "so-cli"];

const checkNewVersion = async () => {};

export const update = async () => {
  const checkSpanner = ora("检查可更新资源中...").start();
  const canBeUpdatedPkgList = [];
  for await (const pkgName of PKG_LIST) {
    await checkNewVersion();
  }
};
