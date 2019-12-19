import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
  const config: PowerPartial<EggAppConfig> = {};

  // cors
  config.security = {
    domainWhiteList: [
      'localhost',
      '127.0.0.1',
    ],
  };
  // cors end

  return config;
};
