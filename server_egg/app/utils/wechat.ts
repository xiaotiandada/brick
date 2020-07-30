import { ApiConfigKit, ApiConfig } from 'tnwx';

export default {
  async init() {
    // const apiConfig = await new ApiConfig('', '','wechat');
    const apiConfig = await new ApiConfig('', '','wechat');
    // 微信公众号、微信小程序、微信小游戏 支持多应用
    ApiConfigKit.putApiConfig(apiConfig);
    // 开启开发模式,方便调试
    ApiConfigKit.devMode = true;
    // 设置当前应用
    ApiConfigKit.setCurrentAppId(apiConfig.getAppId);
  },
};
