import { blue, bold, green, red, yellow } from "ansi-colors";
import dayjs from "dayjs";
import { SYMBOL } from "./symbol";

const LOG_LEVEL = {
  Info: blue,
  Warn: yellow,
  Error: red,
  Success: green,
};

const buildLogFactory = (level: keyof typeof LOG_LEVEL) => {
  const color = LOG_LEVEL[level];
  return (...params: any[]) => {
    console.log(
      `${color(
        `${bold(SYMBOL.DOT)} Qinglian ${level} [${dayjs().format(
          "YYYY-MM-DD HH:mm:ss",
        )}]: `,
      )}`,
      ...params,
    );
  };
};

const Log = {
  info: buildLogFactory("Info"),
  warn: buildLogFactory("Warn"),
  error: buildLogFactory("Error"),
  success: buildLogFactory("Success"),
};

export { Log };
