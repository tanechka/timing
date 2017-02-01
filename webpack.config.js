"use strict";
var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || 8888;
const ROOT_PATH = path.resolve('./src');

const DEBUG = !(process.argv.indexOf('--release') > -1);
const VERBOSE = process.argv.indexOf('--verbose') > -1;

const GLOBALS = {
    'process.env.NODE_ENV': DEBUG ? '"development"' : '"production"',
    __DEV__: DEBUG,
};

module.exports = {
    entry: [
        `webpack-dev-server/client?http://${HOST}:${PORT}`,
        'webpack/hot/only-dev-server', //without refresh
        path.resolve('./src/app/index.js') // Your appʼs entry point
    ],
    cache: DEBUG,
    debug: DEBUG,
    stats: {
        colors: true,
        reasons: DEBUG,
        hash: VERBOSE,
        version: VERBOSE,
        timings: true,
        chunks: VERBOSE,
        chunkModules: VERBOSE,
        cached: VERBOSE,
        cachedAssets: VERBOSE,
    },
    devtool: DEBUG ? 'cheap-module-eval-source-map' : false,
    output: {
        path: './build',
        filename: 'scripts/app.js'
    },
    resolve: {
        root: [
            ROOT_PATH
        ]
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
               loaders: ["style", "css", "sass"]//.map(showSourceMap)
            },
            {
               test: /\.css$/,
               loaders: ["style", "css"]//.map(showSourceMap)
            },
            {
              test: /\.(jpe?g|png|gif|svg)$/i,
              loaders: [
                'file?hash=sha512&digest=hex&name=[hash].[ext]',
                // 'image-webpack?bypassOnDebug'
              ]
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
    sassLoader: {
        outputStyle: 'expanded',
        includePaths: [
            ROOT_PATH
        ]
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin(GLOBALS),
        new HtmlWebpackPlugin({
            template: './src/app/index.html'
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


function showSourceMap(entry) {
    if (entry == 'style') {
        return entry;
    }
    return entry + (DEBUG ? '?sourceMap' : '');
}