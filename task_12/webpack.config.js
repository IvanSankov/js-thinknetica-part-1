'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    mode: 'development', /* условно говоря, надо ли минифицировать файл выходной или нет */
    entry: './index.js', /* Позволяет определить точку входа в наше приложение, именно от entry строится весь граф зависимостей приложения */
    output: {
        filename: 'index.[hash].js', /* файл, в который будет записывать собранный код */
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [ /* добавляем разного рода плагины https://webpack.js.org/plugins/ для удобства, тут массив инстансев */
        new HtmlWebpackPlugin({
            template: 'index.html',
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'styles.[hash].css',
        })
    ],
    module: { /* тут мы добавили лоадеры https://webpack.js.org/loaders/ */
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
        ],
    },
};