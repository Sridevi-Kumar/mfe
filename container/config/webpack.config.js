const {merge} = require('webpack-merge'); //merge is the function to merge together 2 different webpack config objects
//merging the Common webpack with Dev webpack
const commonConfig = require('./webpack.common.config');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const packageJson = require('../package.json')

const devConfig = {
    mode: 'development',
    output: {
        publicPath:'http://localhost:8080/',
    },
    devServer:{
        port:8080,
        historyApiFallback:{
            index: 'index.html'
        }
    },
    plugins:[
        new ModuleFederationPlugin({
            name:'container',
            remotes:{
                marketing:'marketing@http://localhost:8081/remoteEntry.js',
                auth:'auth@http://localhost:8082/remoteEntry.js'
            },
            shared: packageJson.dependencies
        }),        
    ]
};
//merging both common and dev configs
module.exports = merge(commonConfig, devConfig);
//By mentioning the devConfig as a second parameter, devConfig will override or take priority over any other similar options in commonConfig