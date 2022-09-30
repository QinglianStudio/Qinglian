import color from "colors";

export const client = async (mode) => {
  const commanders = ["start", "build"];
  if (!mode || !commanders.includes(mode)) {
    console.log(
      `☢ client only support ${color.red(
        commanders.join("\t")
      )}.\nYou can run ${color.green(`ql client ${commanders.join("/")}`)}\n`
    );
    process.exit(1);
  }
};
