import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1576324842346_1060';

  // add your egg config in here
  config.middleware = [];

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // 站酷
  const crawlerUrl = {
    zcool: 'https://www.zcool.com.cn',
  };

  // API
  const API = {
    // matataki api
    mApi: 'https://api.smartsignature.io'
  }

  config.security = {
    domainWhiteList: [ 'localhost', '127.0.0.1', '123.207.60.132', 'netlify.com', '192.168.1.6' ],
    csrf: {
      enable: false,
    },
  };

  // the return config will combines to EggAppConfig
  return {
      ...config,
      ...bizConfig,
      ...crawlerUrl,
      ...API
    };
  };
