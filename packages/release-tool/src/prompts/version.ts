import inquirer from "inquirer";

export const selectVersion = async (): Promise<string> => {
  const versionResult = await inquirer.prompt([
    {
      type: "list",
      name: "version",
      prefix: "🎫",
      message: "请选择发布的版本",
      choices: ["beta", "patch", "minor", "major", "custom"],
    },
  ]);
  let version = versionResult.version;
  if (version === "custom") {
    const inputResult = await inquirer.prompt([
      {
        type: "input",
        prefix: "🪡 ",
        message: "请输入发布的版本(例如: alpha)",
        initial: "alpha",
        name: "version",
        validate: (v) => {
          if (!(v || "").trim().length) {
            return "版本不允许为空";
          }
          if (!/^[a-z]+$/.test(v)) {
            return "版本仅支持/^[a-z]+$/,例如: alpha";
          }
          return true;
        },
      },
    ]);
    version = inputResult.version;
  }

  return version;
};
