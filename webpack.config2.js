
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require("webpack");


const config1 = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/build',
        publicPath: '/',
        sourcePrefix: '',
        filename: '[name].[hash].js'
    },
    devServer: {
        port: process.env.PORT || 3000,
        contentBase: './public',
        stats: {colors: true},

    },

    module: {
        rules: [
            {
                test: /\.js?/,
                // include : "./",
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [require.resolve('babel-preset-react-app')],
                        plugins: [require.resolve('babel-plugin-syntax-dynamic-import')],
                        cacheDirectory: true
                    }

                }

            },
            /*{
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            query: {
                                modules: true,
                                sourceMap: true,
                                importLoaders: 1,
                                localIdentName: '[local]'
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: [
                                    //      require('postcss-import')({addDependencyTo: webpack}),
                                    //  require('postcss-url')(),
                                    // require('postcss-cssnext')(),
                                    //   require('postcss-reporter')(),
                                    //    require('postcss-browser-reporter')({disabled: false}),
                                ],
                                sourceMap: true
                            }
                        }
                    ]
                })
            }*/
        ],
    },
    plugins: [
      /*  new HtmlWebpackPlugin({
            // hash: true,
            css: ["style.css"],
            filename: 'index.html',
            favicon: './public/favicon.ico',
            //  chunks: ['common', 'index'],
            template: './public/index.html'
        }),*/
        //new ExtractTextPlugin('styles.css'),
       // new webpack.EnvironmentPlugin('NODE_ENV')
    ],

    devtool: "cheap-module-source-map"

};
if (process.env.NODE_ENV === 'development') {
    module.exports = Object.assign({}, config1, /*{
        devServer: {
            port: process.env.PORT || 3000,
            contentBase: './public',
            stats: {colors: true},

        },
    }*/)
}
else {
    module.exports = config1;
}

