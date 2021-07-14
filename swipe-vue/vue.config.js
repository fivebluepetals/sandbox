const PROD_CONFIG = {
  lintOnSave: false,
  publicPath: "/sandbox/swipe-vue",
  outputDir: "../assets",
  assetsDir: "../assets",
  indexPath: "../index.html",
};

const DEV_CONFIG = {
  lintOnSave: true,
  publicPath: "/",
  outputDir: "assets",
  assetsDir: "assets",
  indexPath: "index.html",
};

module.exports = {
  // Default shared configurations

  // Environment overrides
  ...(process.env.NODE_ENV === "production" ? PROD_CONFIG : DEV_CONFIG),
};
