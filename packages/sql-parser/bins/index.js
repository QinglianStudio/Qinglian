const os = require("os");

const PlatformTargetMap = {
  win32: "./window.node",
  // github action not support M1 MAC
  // https://github.com/actions/runner-images/issues/2187
  darwin: "./mac.node",
  darwin_arm64: "./mac_arm.node",
  openbsd: "./linux.node",
  openbsd: "./linux.node",
  aix: "./linux.node",
  freebsd: "./linux.node",
  linux: "./linux.node",
};

const sqlParser = (sql) => {
  const { platform } = process;
  let runtimeBin = PlatformTargetMap[platform];
  if (!runtimeBin) {
    throw Error(
      `${platform} bin is not existed.\n\nPlease submit a issue.https://github.com/JuziDesign/so/issues/new`
    );
  }
  // M1 MAC
  if (platform === "darwin" && os.arch() === "arm64") {
    runtimeBin = PlatformTargetMap.darwin_arm64;
  }
  const { parser } = require(runtimeBin);
  const sqlAstStr = parser(sql);
  try {
    const sqlAst = JSON.parse(sqlAstStr);
    return sqlAst;
  } catch (error) {
    console.error(error);
    process.exit(-1);
  }
};

module.exports = exports = {
  parser: sqlParser,
};
