// @ts-ignore
import { MultiSelect, Prompt } from "enquirer";

export const selectPackages = (packages: string[]): Prompt => {
  return new MultiSelect({
    name: "packages",
    message: "📦 请选择发布的package",
    choices: packages.map((i) => {
      return {
        name: i,
        value: i,
      };
    }),
  });
};
