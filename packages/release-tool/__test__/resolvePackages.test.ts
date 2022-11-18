import { resolvePackages } from "../src/resolvePackages";

describe("ResolvePackages Utils Test", () => {
  it("resolvePackages test", () => {
    const result = resolvePackages();
    expect(result).not.toBeFalsy();
  });
});
