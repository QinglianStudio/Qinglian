import Mysql from ".";
import knex from "knex";

jest.mock("knex");

const queryBuilder = {
  select: jest.fn().mockReturnThis(),
  from: jest.fn().mockReturnThis(),
  destroy: jest.fn().mockReturnThis(),
};

const mockConfig = {
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "123456",
  database: "test",
};

describe("Mysql Test", () => {
  let db = null as Mysql;

  beforeAll(() => {
    // @ts-ignore
    knex.mockReturnValue(queryBuilder);
    db = new Mysql(mockConfig);
  });

  it("should connection mysql", async () => {
    expect(knex).toBeCalledWith({
      connection: mockConfig,
      client: "mysql2",
    });
    expect(db).not.toBeNull();
  });

  it("should exec knex query builder function", async () => {
    await db.exec().select("*").from("info");
    expect(queryBuilder.select).toBeCalledWith("*");
    expect(queryBuilder.from).toBeCalledWith("info");
    expect(queryBuilder.select).toBeCalledTimes(1);
    expect(queryBuilder.from).toBeCalledTimes(1);
  });

  it("should be destroyed",async () => {
    await db.destroy();
    expect(queryBuilder.destroy).toBeCalledTimes(1);
  })
});
