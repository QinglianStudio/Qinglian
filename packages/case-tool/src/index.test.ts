import { isSnakeCase } from ".";

describe("Name case tool Test", () => {
  it("snake-case", () => {
    const isSnakeCaseResult = isSnakeCase("a-b");
    expect(isSnakeCaseResult).toBeFalsy();
  });
});
