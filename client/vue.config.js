import { BUNDLE_ANALYZER_TOKEN } from "./config/index";
module.exports = {
  configureWebpack: config => {
    config.plugins.push([
      new BundleAnalyzerPlugin({ token: BUNDLE_ANALYZER_TOKEN })
    ]);
  }
};
