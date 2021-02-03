const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');



module.exports = {

    mode: 'development',
    optimization: {
        minimizer: [new OptimizeCssAssetsWebpackPlugin()]
    },

    module: {
        rules: [{
                test: /\.css$/,
                exclude: /styles\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /styles\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    minimize: false,
                    attributes: false,
                },

            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        esModule: false
                    }

                }]
            },

            /*  {
                 test: /\.css$/i,
                 loader: "css-loader",
                 options: {
                     url: (url, resourcePath) => {
                         // resourcePath - path to css file

                         // Don't handle `img.png` urls
                         if (url.includes("img.png")) {
                             return false;
                         }

                         return true;
                     }
                 }

             }, */

        ]


    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            ignoreOrder: false
        }),
        new CopyPlugin({
            patterns: [
                { from: 'src/assets', to: 'assets/' },
            ]
        }),

    ],

    /*   resolve: {
          alias: {
              '../assets/1.jpeg': path.resolve(
                  __dirname,
                  '../assets/1.jpeg/img.png'
              )
          }
      } */

}

/**     new CopyPlugin({
        patterns: [
        { from: 'src/assets', to: 'assets/' },
    ], */

/** new MiniCssExtractPlugin({
            filename: '[name].[contentHash].css',
            ignoreOrder: false
        }) */

//  npm install copy-webpack-plugin@6.0.3 --save-dev