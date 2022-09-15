import { join } from "path";
import execa from "execa";

export const release = async (...args) => {
  const options = args[0];
  const { tag } = options || {};
  if (tag) {
    execa("sh", [join(__dirname, "../libs/git_tag_release.sh")]).stdout.pipe(
      process.stdout
    );
  }
};
