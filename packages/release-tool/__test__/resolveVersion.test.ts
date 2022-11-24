import { resolveVersion } from "../src/package";

describe("ResolveVersion Test", () => {
  it("resolveVersion test", () => {
    const beta = resolveVersion("0.0.1", "beta");
    expect(beta).toBe("0.0.2-beta.0");

    const patch = resolveVersion("0.0.1", "patch");
    expect(patch).toBe("0.0.2");

    const minor = resolveVersion("0.0.1", "minor");
    expect(minor).toBe("0.1.0");

    const major = resolveVersion("0.0.1", "major");
    expect(major).toBe("1.0.0");
  });
});
