import { exec } from "child_process";

// 提交信息
export interface CommitInfo {
  "commit-hash": string;
  tree: string;
  "abbreviated-commit-hash": string;
  "author-name": string;
  "author-email": string;
  "author-date": string;
  subject: string;
  "sanitized-subject-line": string;
  "commit-notes": string;
}

export const resolveLastVersionCommitInfo = async (
  filePath: string,
  content: string | RegExp,
) => {
  const result: string | false = await new Promise((s) => {
    // git log info format shell refer: https://gist.github.com/textarcana/1306223#file-git-log2json-sh
    exec(
      `git log -S'${content}' --pretty=format:'{%n  "commit-hash": "%H",%n  "tree": "%T",%n  "abbreviated-commit-hash": "%h",%n  "author-name": "%an",%n  "author-email": "%aE",%n  "author-date": "%aD",%n  "subject": "%s",%n  "sanitized-subject-line": "%f",%n  "commit-notes": "%N"%n}' ${filePath}`,
      (err, out, stdErr) => {
        if (err) {
          s(false);
        }
        s(out);
      },
    );
  });
  if (!result) {
    return false;
  }
  try {
    const commit = JSON.parse(result) as CommitInfo;
    return commit["commit-hash"];
  } catch (error) {
    return false;
  }
};

export const getCommitInfoSinceRefCommit = async (
  commit: string,
  latestCommit = "HEAD",
  filePath?: string,
): Promise<CommitInfo[]> => {
  const result: string | false = await new Promise((s) => {
    exec(
      `git log --pretty=format:'{%n  "commit-hash": "%H",%n  "tree": "%T",%n  "abbreviated-commit-hash": "%h",%n  "author-name": "%an",%n  "author-email": "%aE",%n  "author-date": "%aD",%n  "subject": "%s",%n  "sanitized-subject-line": "%f",%n  "commit-notes": "%N"%n},' ${commit}..${latestCommit}${
        filePath ? ` -- ${filePath}` : ""
      }`,
      (err, out, stdErr) => {
        if (err) {
          s(false);
        }
        s(out);
      },
    );
  });
  if (!result) {
    return [];
  }
  try {
    return JSON.parse(`[${result.slice(0, result.length - 1)}]`);
  } catch (error) {
    return [];
  }
};
