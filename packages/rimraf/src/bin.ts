#!/usr/bin/env node
import minimist from "minimist";
import { clean } from "./clean";

const run = () => {
  // get args
  const args = minimist(process.argv.slice(2));
  // just support BSD mode
  clean(args?._ || []);
};

run();
