import {MysqlAst} from './mysql';

// eslint-disable-next-line no-unused-vars
declare function sqlParser(sql: any): MysqlAst;
export { sqlParser as parser };