const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PATH_SRC = path.resolve("src");
const PATH_DIST = path.resolve("dist");

module.exports = {
    entry: PATH_SRC,
    output: {
        path: PATH_DIST,
        publicPath: "/",
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ],
                        // plugins: ['@babel/plugin-proposal-object-rest-spread']
                    }
                }
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(PATH_SRC, "index.html"),
            filename: "index.html"
        })
    ]
};