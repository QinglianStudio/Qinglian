### @qinglian/sql-parser

基于Rust实现的SQL Parser工具。

#### example
```js
const { parser } = require("@qinglian/sql-parser");

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

const sqlAst = parser(MockSQL);
console.log(sqlAst)
```
