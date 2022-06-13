const {merge} = require('webpack-merge'); //merge is the function to merge together 2 different webpack config objects
//merging the Common webpack with Dev webpack
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common.config');
const packageJson = require('../package.json')

const devConfig = {
    mode: 'development',
    output: {
        publicPath:'http://localhost:8081/',
    },
    devServer:{
        port:8081,
        historyApiFallback:{
            index: 'index.html'
        }
    },
    plugins:[
        new ModuleFederationPlugin({
            name: 'marketing',
            filename: 'remoteEntry.js',
            exposes:{
                './MarketingApp': './src/App.js'
            },
            shared: packageJson.dependencies
        }),        
    ]
};
//merging both common and dev configs
module.exports = merge(commonConfig, devConfig);
//By mentioning the devConfig as a second parameter, devConfig will override or take priority over any other similar options in commonConfig