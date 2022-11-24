import process from "process";
import { isWorkspaces } from "../src/package";

describe("Workspace Utils Test", () => {
  it("isWorkspace test", () => {
    const result = isWorkspaces(process.cwd());
    expect(result).toEqual(["templates/*", "packages/*"]);
  });
});
