
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'boundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                enforce: 'pre',
                use: ['source-map-loader'],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'babylonjs-template',
            template: path.resolve(__dirname, './public/index.html'),
            inject: true
        })
    ],
    mode: 'development',
    devServer: {
        port: 3000,
        contentBase: path.resolve(__dirname, 'public'),
        hot: true,
        publicPath: '/'
    }
}