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
    init: {
      wsEngine: 'ws',
    }, // passed to engine.io
    namespace: {
      // io 消息聊天室 demo
      '/': {
        connectionMiddleware: [
        ],
        packetMiddleware: [],
      },
      '/api/v1/io/chat': {
        connectionMiddleware: [
            'connection',
        ],
        packetMiddleware: [], // 针对消息的处理暂时不实现
      },
      // 通知
      '/api/v1/io/notification': {
        connectionMiddleware: [],
        packetMiddleware: [],
      },
    },
    // cluster 模式下，通过 redis 实现数据共享
    redis: {
      port: 6379,          // Redis port
      host: '127.0.0.1',   // Redis host
      db: 0,
    },
  };

  config.passportGithub = {
    key: '20a65c554f8f88f4ca4e',
    secret: '704350dc94569ea32f7d2d5e29a46a63f6efb8ec',
    // callbackURL: '/passport/github/callback',
    // proxy: false,
  };

  config.jwt = {
    secret: 'shhhhh',
  };

  // middleware
  // config.middleware = [ 'verify' ];
  //
  // config.verify = {
  //   match: '/api/v1/tokenVerifyMiddleware',
  //   test: 'test',
  // };

  // the return config will combines to EggAppConfig
  return {
      ...config,
      ...bizConfig,
      ...crawlerUrl,
    };
  };
