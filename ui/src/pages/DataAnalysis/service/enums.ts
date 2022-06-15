export enum BusinessEngineEnum {
  Kafka = "Kafka",
  MergeTree = "MergeTree",
  Distributed = "Distributed",
}

export enum bigDataNavEnum {
  RealTimeTrafficFlow = "realtime",
  TemporaryQuery = "short",
}

export enum folderType {
  node = 1,
  folder = 2,
}

export enum PrimaryEnums {
  /**
   * 数据开发
   */
  mining = 1,

  /**
   * 临时查询
   */
  short = 3,
}

export enum SecondaryEnums {
  /**
   * 数据库
   */
  database = 1,
  /**
   * 数据集成
   */
  dataIntegration = 2,
}

export enum TertiaryEnums {
  /**
   * clickhouse
   */
  clickhouse = 10,
  /**
   * mysql
   */
  mysql = 11,
  /**
   * 离线分析
   */
  offline = 20,
  /**
   * 实时分析
   */
  realtime = 21,
}