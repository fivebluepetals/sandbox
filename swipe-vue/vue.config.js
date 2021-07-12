const path = require('path');

module.exports = {
  lintOnSave: true,
  filenameHashing: false,

  publicPath: process.env.NODE_ENV === 'production'
    ? '/sandbox/swipe-vue'
    : '/',

  chainWebpack: config => {
    config.optimization.delete('splitChunks')
  },

  outputDir: path.resolve(__dirname, "../assets"),
  assetsDir: "../assets",

  // we want this at the root directory
  indexPath: "../index.html"
};
