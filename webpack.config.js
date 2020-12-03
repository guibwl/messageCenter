var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
        {
          test: /\.css$/i,
          use: [
            "style-loader",
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: "[path][name]__[local]--[hash:base64:5]",
                },
              }
            },
          ]
        },
        {
            test: /\.js$/i,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                    plugins: [
                        [
                            '@babel/plugin-transform-react-jsx'
                        ]
                    ]
                }
            }
        }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html')
    }
  )]
};

