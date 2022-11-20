import { getNpmVersionCommander } from "../src/release";

describe("Release Test", () => {
  it("getNpmVersionCommander test", () => {
    const semver_result = getNpmVersionCommander("major");
    expect(semver_result).toBe("npm version major");

    const custom_result = getNpmVersionCommander("alpha");
    expect(custom_result).toBe("npm version prerelease --preid alpha");
  });
});
