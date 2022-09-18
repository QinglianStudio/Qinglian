// @ts-ignore
import { parser } from "../dist/index.node";

describe("SQL Parser Test", () => {
  it("should parser sql success", () => {
    const a = parser(`
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
    expect(a).not.toBe("");
  });
});
