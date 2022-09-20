// @ts-ignore
import { parser } from "../dist/index.node";

describe("SQL Parser Test", () => {
  it("should parser sql success", () => {
    const sqlAst = parser(`
create table room_user
(
    id          varchar(50)                        not null,
    openid      varchar(50)                        not null,
    roomid      varchar(50)                        not null,
    status      tinyint  default 1                 not null,
    create_time datetime default CURRENT_TIMESTAMP not null,
    update_time datetime default CURRENT_TIMESTAMP not null
);
`);
    expect(sqlAst).not.toBe("");
  });

  it("should parser multi sql success", () => {
    const sqlAst = parser(`
create table room_user
(
    id          varchar(50)                        not null,
    openid      varchar(50)                        not null,
    roomid      varchar(50)                        not null,
    status      tinyint  default 1                 not null,
    create_time datetime default CURRENT_TIMESTAMP not null,
    update_time datetime default CURRENT_TIMESTAMP not null
);
create table room_info
(
    id          varchar(50)                        not null,
    openid      varchar(50)                        not null,
    roomid      varchar(50)                        not null,
    status      tinyint  default 1                 not null,
    create_time datetime default CURRENT_TIMESTAMP not null,
    update_time datetime default CURRENT_TIMESTAMP not null
);
`);
    expect(sqlAst).not.toBe("");
    const sqlAstObj = JSON.parse(sqlAst);
    expect(sqlAstObj.length).toBe(2)
  });
});
