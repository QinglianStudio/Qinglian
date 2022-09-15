import knex, { Knex } from "knex";

type InitOptions<T extends boolean = false> = T extends true
  ? {
      [key: string]: Knex.MySql2ConnectionConfig;
    }
  : Knex.MySql2ConnectionConfig;

type DbExec<T extends boolean, R extends InitOptions<T>> = T extends true
  ? (db: keyof R) => Knex
  : () => Knex;

/**
 * 初始化配置
 */
interface Options<T extends boolean = false> {
  // 是否多项目
  multiple?: T;
  // 取代内置log
  log?: {
    info?: (...message) => void;
    error?: (...message) => void;
    warning?: (...message) => void;
    debug?: (...message) => void;
  };
}

class Mysql<T extends boolean = false, R extends InitOptions<T> = any> {
  private instances: {
    [key: string]: Knex;
  } = {};

  private option: Options<T> = { multiple: false } as any;
  private config: InitOptions<T> = {};

  constructor(config: R, option?: Options<T>) {
    this.config = config;
    this.option = {
      multiple: false,
      ...option,
    } as Options<T>;

    this.initDb();
  }

  private initDb() {
    const { multiple } = this.option;
    if (multiple) {
      for (const key in this.config) {
        this.instances[key] = knex({
          client: "mysql2",
          connection: this.config[key],
        });
      }
    } else {
      this.instances = {
        default: knex({
          client: "mysql2",
          connection: this.config,
        }),
      };
    }
  }

  setOptions(config?: InitOptions<T>) {
    this.config = {
      ...this.config,
      ...(config || {}),
    };
    this.initDb();
  }

  /**
   * 执行方法
   * @param db string
   * @returns
   */
  exec: DbExec<T, R> = (db = "default" as any) => {
    return this.instances[db as any];
  };

  /**
   * 销毁对象
   */
  destroy() {
    for (const instance in this.instances) {
      this.instances[instance]?.destroy?.();
    }
    this.instances = null;
  }
}

export { Mysql };
export default Mysql;
