let webpack = require('webpack');
let path = require('path');
let HtmlWebpackConfig = require('html-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',
    devServer: {
        inline: true,
        hot: true
    },
    entry: {
        index: './src/app.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'boundle.js'
    },
    module: {
        rules: [
            {
                test: /(\.css|\.less)$/,
                use: [ 'style-loader', 'css-loader','less-loader'],
                include: path.resolve(__dirname, 'src')
            },
            {
                test: /(\.jsx|\.js)/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: /node_modules/
            },
            // {
            //     test: /(\.jsx|\.js)/,
            //     use: {
            //         loader: 'babel-loader',
            //         options: {
            //             presets: ['react', 'env']
            //         }
            //     },
            //     exclude: /node_modules/
            // },
            //
            // {
            //     test: /.\(jsx)/,
            //     use: {
            //         loader: 'jsx-loader'
            //     }
            // }
        ]
    },
    plugins: [
        new HtmlWebpackConfig(
            {
                template: __dirname + "/src/index.tmpl.html" //new 一个这个插件的实例，并传入相关的参数
            }
        ),
        new webpack.HotModuleReplacementPlugin()
    ]
}