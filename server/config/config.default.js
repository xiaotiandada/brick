/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1577631937690_680';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  // 站酷
  const crawlerUrl = {
    zcool: 'https://www.zcool.com.cn',
  };

  // config.security = {
  //   domainWhiteList: [ 'localhost', '123.207.60.132', 'netlify.com', 'http://192.168.1.6:8080' ],
  //   csrf: {
  //     enable: false,
  //   },
  // };

  // config.cors = {
  //   allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  //   credentials: true,
  // };
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };

  return {
    ...config,
    ...userConfig,
    ...crawlerUrl,
  };
};
