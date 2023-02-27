import { rimrafSync } from "rimraf";
import * as glob from "glob";

export const clean = (deletePath: string[]) => {
  const paths = deletePath.reduce((t, i) => {
    return [...t, ...glob.sync(i)];
  }, []);
  console.log("🫣 Start to clean some folders or files...");
  paths.forEach((i) => {
    rimrafSync(i);
    console.log(`rm -rf ${i}`);
  });
  console.log("🌟 All tasks finished!");
};
