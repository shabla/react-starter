const merge = require('webpack-merge');
const common = require('./webpack.common.config.js');
const webpack = require('webpack');
const path = require('path');

const PATH_SRC = path.resolve("src");
const PATH_DIST = path.resolve("dist");

module.exports = merge(common, {
    module: {
        rules: [

        ]
    }
});