import color from "colors";
import { dev } from "./server";

// https://github.com/vitejs/vite/issues/9113
export const client = async (mode) => {
  const commanders = ["start", "build"];
  if (!(mode && commanders.includes(mode))) {
    console.log(
      `☢ client only support ${color.red(
        commanders.join("\t"),
      )}.\nYou can run ${color.green(`ql client ${commanders.join("/")}`)}\n`,
    );
    process.exit(1);
  }
  mode === "start" && dev();
};
