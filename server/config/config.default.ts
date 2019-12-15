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
  // cors
  config.security = {
    domainWhiteList: [ 'http://localhost:8080', 'http://127.0.0.1:8080' ],
  };
  // cors end

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
    ...crawlerUrl,
  };
};
