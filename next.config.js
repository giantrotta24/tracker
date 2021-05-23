const { parsed: localEnv } = require("dotenv").config;
const webpack = require("webpack");

module.exports = {
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin({ NODE_ENV: localEnv }));
    return config;
  },
};
