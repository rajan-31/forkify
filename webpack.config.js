const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //entry point for bundling
    entry: ['babel-polyfill','./src/js/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    //webpack server
    devServer: {
        //which code webpack should serve us
        contentBase: './dist'
        //plugins allow us to do complex processing of our input files
    },
    //array of all require plugins
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ],
    module: {
        //array of loaders
        rules: [
            {
                //to look for javaScript files
                test: /\.js$/,
                //to exclude lots of unnecessary node file
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};