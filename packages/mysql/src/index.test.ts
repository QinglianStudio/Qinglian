import Mysql from ".";

describe("Mysql Test", () => {
  it("should connection mysql", async () => {
    const mockConfig = {
      host: "127.0.0.1",
      port: 3306,
      user: "root",
      password: "123456",
      database: "test",
    };
    const db = new Mysql(mockConfig);
    expect(db).not.toBeNull();
    await db.exec().select("*").from("user");
  });
});
