import { Command } from "commander";
import pkg from "../package.json";

const { version: cliVersion } = pkg;

const program = new Command();

export const run = async () => {
  program.name("so").description("🪶 Node Cli for Ranger").version(cliVersion);

  program.command("update", "Check 'so-*' package's version").parse();
};
