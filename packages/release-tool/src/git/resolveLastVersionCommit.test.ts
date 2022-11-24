import { join } from "path";
import {
  resolveLastVersionCommitInfo,
  getCommitInfoSinceRefCommit,
} from "./resolveLastVersionCommit";

describe("resolveLastVersionCommit Test", () => {
  it("resolveLastVersionCommit test", async () => {
    const result = await resolveLastVersionCommitInfo(
      join(__dirname, "../../package.json"),
      '"name": "@qinglian/release-tool"'
    );
    expect(result).not.toBeFalsy();
  });

  it("getCommitInfoSinceRefCommitToHead test", async () => {
    const result = await getCommitInfoSinceRefCommit(
      "a107fa37d28d6044896dc58e2937a95bb4bfbd78",
      "8393712aef12a8539a78785a6ffa2963c8f4f511",
      join(__dirname, "../../../")
    );
    expect(result.length).toBe(3);
  });
});
