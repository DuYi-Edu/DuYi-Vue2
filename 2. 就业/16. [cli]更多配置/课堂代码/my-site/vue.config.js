// vue-cli的配置文件
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://test.my-site.com',
      },
    },
  },
  publicPath: '/news',
  // runtimeCompiler: true,
  // transpileDependencies: []
  // configureWebpack: {
  //   // webpack配置
  // }
  // css: {
  //   requireModuleExtension: false,
  // },
};
