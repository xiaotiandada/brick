const { BUNDLE_ANALYZER_TOKEN } = require("./config/index");
const BundleAnalyzerPlugin = require("@bundle-analyzer/webpack-plugin");
module.exports = {
  configureWebpack: config => {
    config.plugins.push(
      new BundleAnalyzerPlugin({
        token: BUNDLE_ANALYZER_TOKEN
      })
    );
  }
};
