import { vitest } from "vitest";
import { Log } from "../src";

describe("Log Test", () => {
  afterEach(() => {
    vitest.restoreAllMocks();
  });

  it("info test", () => {
    const infoLogMock = vitest.spyOn(console, "log");
    Log.info("i am test info");
    expect(infoLogMock).toHaveBeenCalledTimes(1);
  });

  it("warn test", () => {
    const infoLogMock = vitest.spyOn(console, "log");
    Log.info("i am test info");
    expect(infoLogMock).toHaveBeenCalledTimes(1);
  });

  it("error test", () => {
    const infoLogMock = vitest.spyOn(console, "log");
    Log.info("i am test info");
    expect(infoLogMock).toHaveBeenCalledTimes(1);
  });
});
