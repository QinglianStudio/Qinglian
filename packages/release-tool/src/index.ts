import { selectPackages, selectVersion } from "./prompts";
import {
  resolvePackages,
  WorkspaceInfo,
  releaseNpmPackageVersion,
  resolveSinglePackage,
} from "./package";

interface Answer {
  packages: WorkspaceInfo[];
  version: string;
}

export const release = async () => {
  const answer = {} as Answer;
  const workspace = await resolvePackages();
  if (workspace) {
    answer.packages = await selectPackages(workspace);
  } else {
    answer.packages = [resolveSinglePackage()];
  }
  answer.version = await selectVersion();
  await releaseNpmPackageVersion(answer.packages, answer.version);
};
