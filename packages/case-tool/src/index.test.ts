import { isCamelCase, isKebabCase, isPascalCase, isSnakeCase } from ".";

describe("Name case tool Test", () => {
  it("snake-case", () => {
    const notSnakeCaseResult = isSnakeCase("a-b");
    expect(notSnakeCaseResult).toBeFalsy();

    const isSnakeCaseResult = isSnakeCase("a_b");
    expect(isSnakeCaseResult).toBeTruthy();
  });

  it("camel-case", () => {
    const notCamelCase = isCamelCase("ABC");
    expect(notCamelCase).toBeFalsy();

    const isCamelCaseResult = isCamelCase("aBcD");
    expect(isCamelCaseResult).toBeTruthy();
  });

  it("kebab-case", () => {
    const notKebabCase = isKebabCase("a_b");
    expect(notKebabCase).toBeFalsy();

    const isKebabCaseResult = isKebabCase("a-b-c");
    expect(isKebabCaseResult).toBeTruthy();
  });

  it("pascal-case", () => {
    const notPascalCase = isPascalCase("abc");
    expect(notPascalCase).toBeFalsy();

    const isPascalCaseResult = isPascalCase("AbcDef");
    expect(isPascalCaseResult).toBeTruthy();
  });
});
