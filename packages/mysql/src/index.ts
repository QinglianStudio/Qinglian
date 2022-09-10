import {
  DataSource,
  DataSourceOptions,
  ObjectLiteral,
  SelectQueryBuilder,
  Repository,
} from "typeorm";

class Db {
  private options: DataSourceOptions;

  private dbInstance: DataSource;

  constructor(options: Partial<Omit<DataSourceOptions,'type'>>) {
    this.options = { type: "mysql", ...options } as DataSourceOptions;
    this.dbInstance = new DataSource(this.options);
  }
  /**
   * 获取当前链接对象
   * @returns
   */
  getInstance() {
    return this.dbInstance;
  }
  /**
   * 设置链接属性 并重置对象
   * @param options
   */
  setOptions(options: Partial<DataSourceOptions>) {
    this.options = {
      ...this.options,
      ...options,
    } as DataSourceOptions;
    this.dbInstance = new DataSource(this.options);
  }

  /**
   * 执行命令
   * @param db
   * @returns
   */
  exec<T extends string | ObjectLiteral>(
    db: T
  ): T extends string ? SelectQueryBuilder<any> : Repository<ObjectLiteral> {
    return typeof db === "string"
      ? this.dbInstance.createQueryBuilder(db as any)
      : (this.dbInstance.getRepository(db as any) as any);
  }
}

export { Db };
export default Db;
