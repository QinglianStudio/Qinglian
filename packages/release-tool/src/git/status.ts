import { exec } from "child_process";

/**
 * check path's git is clean
 * @param basePath
 * @returns boolean
 */
export const checkGitCleanStatus = async (basePath: string = process.cwd()) => {
  const result = await new Promise((s) => {
    exec(
      "git status --porcelain",
      {
        cwd: basePath,
      },
      (err, std) => {
        if (err) {
          s(false);
        }
        s(std ? false : true);
      },
    );
  });
  return result;
};

export const gitCommit = async (
  commitMessage: string,
  basePath: string = process.cwd(),
) => {
  const result = await new Promise((s) => {
    exec(
      `git add . && git commit -m "${commitMessage}"`,
      {
        cwd: basePath,
      },
      (err, std) => {
        if (err) {
          s(false);
        }
        s(std ? false : true);
      },
    );
  });
  return result;
};
