// const { override, fixBabelImports } = require('customize-cra');
const { override, fixBabelImports, addLessLoader } = require('customize-cra');
require('customize-cra');
const path = require('path');


module.exports = override(
    fixBabelImports('import', { 
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    //别名的配置
    // addWebpackAlias({
    //     '@':path.resolve(__dirname,'./src')
    // }),
    //less的配置
    addLessLoader({
          javascriptEnabled: true,
          modifyVars: { '@primary-color': '#1DA57A' },
        }),
);