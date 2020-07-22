module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "~@/scss/core/_core.scss";'
      }
    }
  },
  chainWebpack: config => {
    config.module
      .rule("eslint")
      .use("eslint-loader")
      .options({
        fix: true
      });
  },
  publicPath: "/project-beetroot/"
};
