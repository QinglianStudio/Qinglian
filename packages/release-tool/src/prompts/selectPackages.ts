import { Log } from "@qinglian/utils";
import { blue } from "ansi-colors";
import inquirer from "inquirer";
import { WorkspaceInfo } from "../package/resolvePackages";

export const selectPackages = async (
  packages: WorkspaceInfo[],
): Promise<WorkspaceInfo[]> => {
  const workspacePackages = packages.reduce((t, i) => {
    if (!t[i.workspace]) {
      t[i.workspace] = [];
    }
    t[i.workspace].push(i);
    return t;
  }, {});

  const choices = Object.keys(workspacePackages)
    .sort()
    .reduce((t, i) => {
      t.push(new inquirer.Separator(`${blue(i)} workspace packages list`));
      t.push(
        ...workspacePackages[i].map((p) => {
          return {
            value: p.id,
            name: p.packageName,
          };
        }),
      );
      t.push(new inquirer.Separator("\n"));
      return t;
    }, []);

  const selectedPackages = await inquirer.prompt([
    {
      type: "checkbox",
      message: "请选择发布的package",
      name: "packages",
      prefix: "📦",
      choices,
    },
  ]);
  if (!selectedPackages?.packages?.length) {
    Log.error("未选择任何发布包，退出流程");
    process.exit(-1);
  }
  return packages.filter((i) => selectedPackages.packages.includes(i.id));
};
