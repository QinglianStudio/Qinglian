import colors from "colors";
import { existsSync } from "fs";
import path from "path";

export const sqlGen = async (options) => {
  if (!options?.path) {
    console.log(
      colors.yellow(
        "\n ‼️ You should provider sql file path,if not the default path is `process.cwd() + index.sql`\n"
      )
    );
  }
  const sqlFilePath = options?.path || path.join(process.cwd(),'./index.sql');
  if(!existsSync(sqlFilePath)){
    console.error(colors.red(`❌ SQL file is not existed.Please check file path: ${sqlFilePath}`))
  }
};
