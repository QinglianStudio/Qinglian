import { parser } from "../bins";

const MockSQL = `
create table room_user
(
    id          varchar(50)                        not null,
    openid      varchar(50)                        not null,
    roomid      varchar(50)                        not null,
    status      tinyint  default 1                 not null,
    create_time datetime default CURRENT_TIMESTAMP not null,
    update_time datetime default CURRENT_TIMESTAMP not null
);
`;

describe("Test Js Reexport Node addon files", () => {
  it("should be error if not support platform", () => {
    const originalPlatform = process.platform;
    Object.defineProperty(process, "platform", {
      value: "MockOS",
    });
    expect(() => {
      parser(MockSQL);
    }).toThrow();
    Object.defineProperty(process, "platform", {
      value: originalPlatform,
    });
  });

  it("should be call with success", () => {
    const sqlAst = parser(MockSQL);
    expect(sqlAst.length).toBe(1);
  });
});
