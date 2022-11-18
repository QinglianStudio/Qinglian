// @ts-ignore
import { Select, Input } from "enquirer";

export const selectVersion = async (): Promise<string> => {
  let version = await new Select({
    name: "version",
    message: "🎫 请选择发布的版本",
    choices: ["beta", "patch", "minor", "major", "custom"],
  }).run();
  console.log(version);
  if (version === "custom") {
    version = await new Input({
      message: "🪡  请输入发布的版本(例如: alpha)",
      initial: "alpha",
      validate: (v) => {
        if(!(v || '').trim().length) {
            return '版本不允许为空'
        }
        if(!(/^[a-z]+$/.test(v))){
            return '版本仅支持/^[a-z]+$/,例如: alpha'
        }
        return undefined;
      }
    }).run();
  }
  return version;
};
