var path = require("path");

var DIST_DIR = path.resolve(__dirname, "public");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
    entry: SRC_DIR + "/app/app.js",
    output: {
        path: DIST_DIR,
        filename: "bundle.js"
        // publicPath: "/app/"
    },
    devtool:"cheap-module-source-map",
    module: {
        rules: [
            {
                test: /\.(scss)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {

                test: /\.js?/,
                include: SRC_DIR,
                loader: "babel-loader",
                query: {
                    presets: ["@babel/react", "@babel/env",]
                }
            }
        ],

    },
    mode: "development"
};

module.exports = config;
