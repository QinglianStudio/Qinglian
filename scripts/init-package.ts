import { execaCommandSync } from "execa";
import { mkdir, lstat } from "fs/promises";
import { join } from "path";

const PackageNameReg = /^((([A-Za-z]{1,})\-?){1,})(?<!-)$/;

const init = async () => {
  const args = process.argv;
  if (!args?.[2] || !PackageNameReg.test(args?.[2])) {
    console.log(
      "\n\n初始化Package请执行命令: npm run init package-name\n\npackage-name仅支持以下格式: xx,xx-xx\n\n"
    );
    process.exit(-1);
  }
  const packageName = args[2];
  const packageFolder = join(__dirname, `./packages/${packageName}`);
  const stat = await lstat(packageFolder);
  if (stat.isDirectory()) {
    console.log(`\n\n 包名：${packageName} 已存在，请更换其他名称 \n\n`);
    process.exit(-1);
  }
  await mkdir(packageFolder);
  console.log("\n\n创建子包成功\n\n");
  execaCommandSync("npm init");
};

init();
