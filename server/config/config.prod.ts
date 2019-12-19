import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
  const config: PowerPartial<EggAppConfig> = {};

  // cors
  config.security = {
    domainWhiteList: [
      '123.207.60.132',
      '.netlify.com'
    ],
  };
  // cors end

  return config;
};
