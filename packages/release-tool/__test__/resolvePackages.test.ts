import { resolvePackages } from "../src/package";

describe("ResolvePackages Utils Test", () => {
  it("resolvePackages test", () => {
    const result = resolvePackages();
    expect(result).not.toBeFalsy();
  });
});
