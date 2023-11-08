const { execSync } = require("child_process");

const { TARGET_PLATFORM } = process.env;
const { platform } = process;

execSync(
  `cargo-cp-artifact -nc lib/${
    TARGET_PLATFORM || platform
  }.node -- cargo build --message-format=json-render-diagnostics --release`,
  {
    stdio: "inherit",
  },
);
