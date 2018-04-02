var webpack = require('webpack');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        index2: './src/index2.js'
    },
    output: {
        filename: '[name].[hash].bundle.js',
        publicPath: '/dist/'
    },
    externals: {
        react: 'react'
    },
    // plugins: [
    //     new MiniCssExtractPlugin({
    //         filename: '[name].[contenthash].css',
    //         chunkFilename: '[id].[contenthash].css'
    //     })
    // ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /\.css/,
                    name: 'commons',
                    chunks: 'initial',
                    minChunks: 2,
                    minSize: 1
                }
            }
        },
    },
    module: {
        rules: [
            {
                test: /\.css/,
                use: [
                    // MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.js/,
                loader: 'babel-loader',
                options: {
                    presets: ['stage-0', 'env'],
                    plugins: ['transform-react-jsx']
                }
            }
        ]
    }
};