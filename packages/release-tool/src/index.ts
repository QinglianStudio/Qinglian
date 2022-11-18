import { selectPackages, selectVersion } from "./prompts";
import { resolvePackages, WorkspaceInfo } from "./resolvePackages";

interface Answer {
  packages?: WorkspaceInfo[];
  version: string;
}

export const release = async () => {
  const answer = {} as Answer;
  const workspace = await resolvePackages();
  if (workspace) {
    answer.packages = await selectPackages(workspace).run();
  }
  answer.version = await selectVersion();
};

release();
