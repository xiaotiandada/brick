import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
  const config: PowerPartial<EggAppConfig> = {};

  // API
  const API = {
    // matataki api
    mApi: 'https://apitest.smartsignature.io'
  }

  return {
    ...config,
    ...API
  };
};
