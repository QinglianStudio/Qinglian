import esbuild from "esbuild";
import colors from "colors";
import { resolveEntryPoints } from "./resolveEntryPoints";
import { getIPAddress } from "../utils/getLocalIps";

export const dev = async () => {
  const entry = await resolveEntryPoints();
  const Ips = getIPAddress();
  esbuild
    .serve(
      {
        port: 9527,
      },
      {
        entryPoints: [entry],
        bundle: true,
        outdir: "dist",
        format: "iife",
        chunkNames: "[name]",
        target: ["es6"],
      },
    )
    .then(async (result) => {
      console.log(
        `Server is running at: ${colors.green(`http://${Ips}:${result.port}`)}`,
      );
      console.log(
        `Server is running at: ${colors.green(
          `http://127.0.0.1:${result.port}`,
        )}`,
      );
    });
};
