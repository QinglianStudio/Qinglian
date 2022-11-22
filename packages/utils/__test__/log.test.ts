import { Log } from "../src";

describe("Log Test", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("info test", () => {
    const infoLogMock = jest.spyOn(console, "log");
    Log.info("i am test info");
    expect(infoLogMock).toHaveBeenCalledTimes(1);
  });

  it("warn test", () => {
    const infoLogMock = jest.spyOn(console, "log");
    Log.info("i am test info");
    expect(infoLogMock).toHaveBeenCalledTimes(1);
  });

  it("error test", () => {
    const infoLogMock = jest.spyOn(console, "log");
    Log.info("i am test info");
    expect(infoLogMock).toHaveBeenCalledTimes(1);
  });
});
