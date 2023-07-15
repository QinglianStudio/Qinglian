import Mysql from ".";
import knex from "knex";

vitest.mock("knex");

const queryBuilder = {
  select: vitest.fn().mockReturnThis(),
  from: vitest.fn().mockReturnThis(),
  destroy: vitest.fn().mockReturnThis(),
};

const mockConfig = {
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "123456",
  database: "test",
};

// @ts-ignore
knex.mockReturnValue(queryBuilder);

describe("Mysql Test", () => {
  it("should connection mysql", async () => {
    const db = new Mysql(mockConfig);
    expect(knex).toBeCalledWith({
      connection: mockConfig,
      client: "mysql2",
    });
    expect(db).not.toBeNull();
  });

  it("should exec knex query builder function", async () => {
    const db = new Mysql(mockConfig);
    await db.exec().select("*").from("info");
    expect(queryBuilder.select).toBeCalledWith("*");
    expect(queryBuilder.from).toBeCalledWith("info");
    expect(queryBuilder.select).toBeCalledTimes(1);
    expect(queryBuilder.from).toBeCalledTimes(1);
  });

  it("should be destroyed", async () => {
    const db = new Mysql(mockConfig);
    await db.destroy();
    expect(queryBuilder.destroy).toBeCalledTimes(1);
  });

  it("should support multi db", async () => {
    const dbs = new Mysql(
      {
        db: mockConfig,
        db2: mockConfig,
      },
      { multiple: true }
    );
    expect(knex).toBeCalledWith({
      connection: mockConfig,
      client: "mysql2",
    });
    expect(knex).toBeCalledTimes(5);
    await dbs.exec("db").select("*").from("info");
    expect(queryBuilder.select).toBeCalledWith("*");
    expect(queryBuilder.from).toBeCalledWith("info");
    expect(queryBuilder.select).toBeCalledTimes(2);
    expect(queryBuilder.from).toBeCalledTimes(2);
  });
});
