import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1576324842346_1060';

  // add your egg config in here
  config.middleware = [];

  // proxy 获取id地址
  config.proxy = true;

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // 站酷
  const crawlerUrl = {
    zcool: 'https://www.zcool.com.cn',
  };

  config.security = {
    domainWhiteList: [ 'localhost', '127.0.0.1', '123.207.60.132', 'netlify.com', '192.168.1.6' ],
    csrf: {
      enable: false,
    },
  };

  // egg-socketio
  config.io = {
    init: { }, // passed to engine.io
    namespace: {
      '/': {
        connectionMiddleware: [],
        packetMiddleware: [],
      },
      '/example': {
        connectionMiddleware: [],
        packetMiddleware: [],
      },
    },
  };

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

  // the return config will combines to EggAppConfig
  return {
      ...config,
      ...bizConfig,
      ...crawlerUrl
    };
  };
