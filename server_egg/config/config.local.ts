import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
  const config: PowerPartial<EggAppConfig> = {};

  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: 'localhost',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: 'xiaotian',
      // 数据库名
      database: 'brick',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  config.redis = {
    client: {
      port: 6379,          // Redis port
      host: '127.0.0.1',   // Redis host
      password: '',
      db: 0,
    },
  };

  config.elasticsearch = {
    host: 'localhost:9200',
    log: 'trace',
    apiVersion: '6.8',
  };

  // API
  const API = {
    // matataki api
    mApi: 'https://apitest.smartsignature.io',
  }

  return {
    ...config,
    ...API,
  };
};
