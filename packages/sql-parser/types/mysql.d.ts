interface DataType {
  /// Fixed-length character type e.g. CHAR(10)
  Char: string;
  /// Variable-length character type e.g. VARCHAR(10)
  Varchar: string;
  /// Variable-length character type e.g. NVARCHAR(10)
  Nvarchar: string;
  /// Uuid type
  Uuid: string;
  /// Large character object e.g. CLOB(1000)
  Clob: string;
  /// Fixed-length binary type e.g. BINARY(10)
  Binary: string;
  /// Variable-length binary type e.g. VARBINARY(10)
  Varbinary: string;
  /// Large binary object e.g. BLOB(1000)
  Blob: string;
  /// Decimal type with optional precision and scale e.g. DECIMAL(10,2)
  Decimal: number;
  /// Floating point with optional precision e.g. FLOAT(8)
  Float: number;
  /// Tiny integer with optional display width e.g. TINYINT or TINYINT(3)
  TinyInt: number;
  /// Unsigned tiny integer with optional display width e.g. TINYINT UNSIGNED or TINYINT(3) UNSIGNED
  UnsignedTinyInt: number;
  /// Small integer with optional display width e.g. SMALLINT or SMALLINT(5)
  SmallInt: number;
  /// Unsigned small integer with optional display width e.g. SMALLINT UNSIGNED or SMALLINT(5) UNSIGNED
  UnsignedSmallInt: number;
  /// Integer with optional display width e.g. INT or INT(11)
  Int: number;
  /// Integer with optional display width e.g. INTEGER or INTEGER(11)
  Integer: number;
  /// Unsigned integer with optional display width e.g. INT UNSIGNED or INT(11) UNSIGNED
  UnsignedInt: number;
  /// Unsigned integer with optional display width e.g. INTGER UNSIGNED or INTEGER(11) UNSIGNED
  UnsignedInteger: number;
  /// Big integer with optional display width e.g. BIGINT or BIGINT(20)
  BigInt: number;
  /// Unsigned big integer with optional display width e.g. BIGINT UNSIGNED or BIGINT(20) UNSIGNED
  UnsignedBigInt: number;
  /// Floating point e.g. REAL
  Real: number;
  /// Double e.g. DOUBLE PRECISION
  Double: number;
  /// Boolean
  Boolean: boolean;
  /// Date
  Date: string;
  /// Time
  Time: string;
  /// Datetime
  Datetime: string;
  /// Timestamp [Without Time Zone]
  Timestamp;
  /// Timestamp With Time Zone
  TimestampTz: string;
  /// Interval
  Interval: string;
  /// Regclass used in postgresql serial
  Regclass: string;
  /// Text
  Text: string;
  /// String
  String: string;
  /// Bytea
  Bytea: string;
  /// Custom type such as enums
  // Custom(ObjectName),
  /// Arrays
  Array: DataType[];
  /// Enums
  Enum: string[];
  /// Set
  Set: string[];
}

// 列定义
interface Column {
  // 列命名
  name: {
    value: string;
  };
  // 数据类型
  data_type: {
    [K in keyof DataType]: DataType[K] | any;
  };
}

interface CreateTable {
  columns: Column[];
}

interface Field {
  // 创建表
  CreateTable?: CreateTable;
}

export type MysqlAst = Array<{
  [K in keyof Field]: Field[K];
}>;
