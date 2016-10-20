"use strict";
var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || 8888;

module.exports = {
    entry: [
        `webpack-dev-server/client?http://${HOST}:${PORT}`,
        `webpack/hot/only-dev-server`, //without refresh
        `./src/index.js` // Your appʼs entry point
     ],
    output: {
        path: './build',
        filename: 'scripts/app.js'
    },
    resolve: {
        extensions: ['', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components|public)/,
                loaders: [ "babel-loader", "eslint-loader" ]
            },
            {
               test: /\.scss$/,
               loaders: ["style", "css", "sass"]
            }
        ]
    },
    devServer: {
        contentBase: "./build",
        // do not print bundle build stats
        noInfo: true,
        // enable HMR
        hot: true,
        // embed the webpack-dev-server runtime into the bundle
        inline: true,
        // serve index.html in place of 404 responses to allow HTML5 history
        historyApiFallback: true,
        port: PORT - 1,
        host: HOST
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new BrowserSyncPlugin({
          host: 'localhost',
          port: PORT,
          proxy: {
            target: 'http://localhost:' + (PORT - 1) + '/',
            ws: true
          }
        },
        // plugin options
        {
          // prevent BrowserSync from reloading the page
          // and let Webpack Dev Server take care of this
          reload: false
        }
      )
    ]
};
