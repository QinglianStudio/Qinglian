import { Command } from "commander";
import { readFileSync } from "fs";
import { join } from "path";
import { release } from "./release";
import { client } from "./client";
import { server } from "./server";
import { sqlGen } from "./sql-gen";

const packageFile = join(__dirname, "../package.json");

const { version: cliVersion } = JSON.parse(
  readFileSync(packageFile).toString(),
);

const program = new Command();

export const run = async () => {
  program.name("ql").description("🪶 Node Cli for Ranger").version(cliVersion);

  program
    .command("update")
    .description("Check '@qinglian/*' package's version");

  program
    .command("release")
    .description("release version use tag or others")
    .option("-t, --tag", "git tag xxx to release")
    .action(release);

  program
    .command("client <mode>")
    .description("sub commander for client")
    .action(client);

  program
    .command("server <mode>")
    .description("sub commander for server")
    .action(server);

  program
    .command("sql-gen")
    .description("use sql file to generate typescript interface")
    .option(
      "-p, --path <path>",
      "sql file path and generate interface file will related this path",
    )
    .option("-n, --name <name>", "generate interface file name,default is mode")
    .action(sqlGen);

  program.parse(process.argv);
};
