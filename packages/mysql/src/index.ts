import knex, { Knex } from "knex";

class Mysql {
  private instance: Knex;

  private options: Knex.MySql2ConnectionConfig;

  constructor(options: Knex.MySql2ConnectionConfig) {
    this.options = options;
    this.instance = knex({
      client: "mysql2",
      connection: this.options,
    });
  }

  setOptions(options?: Partial<Knex.MySql2ConnectionConfig>) {
    this.options ={
      ...(this.options),
      ...(options || {}),
    };
    this.instance = knex({
      client: "mysql2",
      connection: this.options,
    });
  }

  /**
   * 执行对象
   * @returns {Knex}
   */
  exec() {
    return this.instance;
  }

  /**
   * 销毁对象
   */
  destroy() {
    this.instance.destroy();
    this.instance = null;
  }
}

export { Mysql };
export default Mysql;
