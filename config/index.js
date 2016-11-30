// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    //这是dist 中的index.html文件
    index: path.resolve(__dirname, '../dist/index.html'),
    //打包在那个目录下
    assetsRoot: path.resolve(__dirname, '../dist'),
    //资源文件子目录
    assetsSubDirectory: 'static',
    //设置路径
    assetsPublicPath: '/',
    //设置打包后dist 数据是否有Map.js（true：每个js文件对应一个  Map 文件）
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    //默认Gzip关闭等许多流行的静态主机
    //或者Netlify已经飙升gzip所有静态资产。
    //设置为“真正的”之前,确保:
    //npm安装——save-dev compression-webpack-plugin

    productionGzip: false,
    productionGzipExtensions: ['js', 'css']
  },
  dev: {
    env: require('./dev.env'),
    port: 8088,
    proxyTable: {}
  }
};
