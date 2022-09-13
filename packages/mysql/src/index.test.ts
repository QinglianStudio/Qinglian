import Mysql from ".";

describe("Mysql Test", () => {
  let db = null as Mysql;

  beforeAll(() => {
    const mockConfig = {
      host: "127.0.0.1",
      port: 3306,
      user: "root",
      password: "123456",
      database: "test",
    };
    db = new Mysql(mockConfig);
  });

  afterAll(() => {
    db?.destroy?.();
  });

  it("should connection mysql", async () => {
    expect(db).not.toBeNull();
    const da = await db.exec().select("*").from("info");
    expect(da.length).toBe(1);
  });
});
