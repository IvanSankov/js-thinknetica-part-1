'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    mode: 'development', /* условно говоря, надо ли минифицировать файл выходной или нет */
    entry: './index_1.ts', /* Позволяет определить точку входа в наше приложение, именно от entry строится весь граф зависимостей приложения */
    output: {
        filename: 'index.[hash].js', /* файл, в который будет записывать собранный код */
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    module: { /* тут мы добавили лоадеры https://webpack.js.org/loaders/ */
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
};