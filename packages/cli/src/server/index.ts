import color from "colors";

export const server = async (mode) => {
  const commanders = ["start", "build", "deploy"];
  if (!(mode && commanders.includes(mode))) {
    console.log(
      `☢ server only support ${color.red(
        commanders.join("\t")
      )}.\nYou can run ${color.green(`ql server ${commanders.join("/")}`)}\n`
    );
    process.exit(1);
  }
};
