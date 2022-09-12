import knex, { Knex } from "knex";

class Mysql {
  private instance: Knex;

  private options: Knex.MySql2ConnectionConfig;

  constructor(options: Knex.MySql2ConnectionConfig) {
    this.options = options;
    console.log(this.options)
    this.instance = knex({
      client: "mysql2",
      connection: this.options,
      debug: true
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

  exec() {
    return this.instance;
  }
}

export { Mysql };
export default Mysql;
