import { flatNestData } from "./dataSet";

describe("DataSet tool Test", () => {
  it("flatNestData should be success", () => {
    const NestData = {
      a: "1",
      b: ["2", "3", "4"],
      c: {
        a: "5",
      },
    };
    const flatData = [];
    flatNestData(NestData, flatData);
    expect(flatData.length).not.toBe(0);
    expect(flatData).toEqual([
      ["a", "1"],
      ["b", "2"],
      ["b", "3"],
      ["b", "4"],
      ["a", "5"],
    ]);
  });
});
