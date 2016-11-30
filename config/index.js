// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    //����dist �е�index.html�ļ�
    index: path.resolve(__dirname, '../dist/index.html'),
    //������Ǹ�Ŀ¼��
    assetsRoot: path.resolve(__dirname, '../dist'),
    //��Դ�ļ���Ŀ¼
    assetsSubDirectory: 'static',
    //����·��
    assetsPublicPath: '/',
    //���ô����dist �����Ƿ���Map.js��true��ÿ��js�ļ���Ӧһ��  Map �ļ���
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    //Ĭ��Gzip�رյ�������еľ�̬����
    //����Netlify�Ѿ����gzip���о�̬�ʲ���
    //����Ϊ�������ġ�֮ǰ,ȷ��:
    //npm��װ����save-dev compression-webpack-plugin

    productionGzip: false,
    productionGzipExtensions: ['js', 'css']
  },
  dev: {
    env: require('./dev.env'),
    port: 8088,
    proxyTable: {}
  }
};
