import { rimrafSync } from "rimraf";
import { Log } from "@qinglian/utils";
import * as glob from "glob";

export const clean = (deletePath: string[]) => {
  const paths = deletePath.reduce((t, i) => {
    return [...t, ...glob.sync(i)];
  }, []);
  Log.info("🫣 Start to clean some folders or files...");
  paths.forEach((i) => {
    rimrafSync(i);
    Log.warn(`rm -rf ${i}`);
  });
  Log.success("🌟 All tasks finished!");
};
