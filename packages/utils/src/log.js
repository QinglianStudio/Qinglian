"use strict";
var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.Log = void 0;
var ansi_colors_1 = require("ansi-colors");
var dayjs_1 = require("dayjs");
var symbol_1 = require("./symbol");
var LOG_LEVEL = {
  Info: ansi_colors_1.blue,
  Warn: ansi_colors_1.yellow,
  Error: ansi_colors_1.red,
  Success: ansi_colors_1.green,
};
var buildLogFactory = function (level) {
  var color = LOG_LEVEL[level];
  return function () {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      params[_i] = arguments[_i];
    }
    console.log.apply(
      console,
      __spreadArray(
        [
          "".concat(
            color(
              ""
                .concat(
                  (0, ansi_colors_1.bold)(symbol_1.SYMBOL.DOT),
                  " Qinglian ",
                )
                .concat(level, " [")
                .concat(
                  (0, dayjs_1.default)().format("YYYY-MM-DD HH:mm:ss"),
                  "]: ",
                ),
            ),
          ),
        ],
        params,
        false,
      ),
    );
  };
};
var Log = {
  info: buildLogFactory("Info"),
  warn: buildLogFactory("Warn"),
  error: buildLogFactory("Error"),
  success: buildLogFactory("Success"),
};
exports.Log = Log;
