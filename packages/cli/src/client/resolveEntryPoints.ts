import colors from "colors";
import { isExistFile } from "../utils/checkFile";

export const resolveEntryPoints = async () => {
  const existEntry = [];
  try {
    const entry = [
      "./src/app.ts",
      "./src/app.tsx",
      "./src/index.ts",
      "./src/index.tsx",
    ];
    for (let index = 0; index < entry.length; index++) {
      const element = entry[index];
      const isExist = await isExistFile(element);
      isExist && existEntry.push(element);
    }
    return existEntry[0];
  } catch (_error) {}

  if (!existEntry?.length) {
    console.log(
      colors.red(
        `Can't find any entry files.Please check src/app.tsx? or src/index.tsx?`
      )
    );
    process.exit(-1);
  }
};
