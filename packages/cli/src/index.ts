import { Command } from "commander";
import { readFileSync } from "fs";
import { join } from "path";
import { release } from "./release";

const packageFile = join(__dirname, "../package.json");

const { version: cliVersion } = JSON.parse(
  readFileSync(packageFile).toString()
);

const program = new Command();

export const run = async () => {
  program.name("jz").description("🪶 Node Cli for Ranger").version(cliVersion);

  program.command("update").description("Check '@qinglian/*' package's version");

  program
    .command("release")
    .description("release version use tag or others")
    .option("-t, --tag", "git tag xxx to release")
    .action(release);

  program.parse(process.argv);
};
