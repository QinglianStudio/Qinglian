import { selectPackages, selectVersion } from "./prompts";
import { resolvePackages, WorkspaceInfo } from "./resolvePackages";
import { releaseNpmPackageVersion } from "./release";

interface Answer {
  packages?: WorkspaceInfo[];
  version: string;
}

export const release = async () => {
  const answer = {} as Answer;
  const workspace = await resolvePackages();
  if (workspace) {
    answer.packages = await selectPackages(workspace);
  }
  answer.version = await selectVersion();
  await releaseNpmPackageVersion(answer.packages, answer.version);
};
