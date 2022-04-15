/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const glob = require('glob');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PurgecssPlugin = require('purgecss-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const rimraf = require('rimraf');

const devMode = !process.env.NODE_ENV || process.env.NODE_ENV !== 'production';

const PATHS = {
  src: path.join(__dirname, 'src')
};

let response = {
  context: path.resolve(__dirname, './src'),
  entry: {
    index: './index.js'
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              configFile: './babel.config.js',
              cacheDirectory: true
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: devMode ? 'style-loader' : MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'resolve-url-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpg)$/,
        loader: devMode
          ? 'url-loader'
          : 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      }
    ]
  },
  plugins: [
    {
      apply: compiler => !devMode && rimraf.sync(compiler.options.output.path)
    },
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      inject: 'body'
    }),
    new ESLintPlugin({}),
    new webpack.HotModuleReplacementPlugin()
  ],
  mode: devMode ? 'development' : 'production',
  devServer: {
    hot: true,
    port: 3000
  },
  devtool: 'source-map'
};

if (!devMode) {
  response = {
    ...response,
    optimization: {
      minimize: true,
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.css$/,
            chunks: 'all',
            enforce: true
          }
        }
      }
    },
    plugins: [
      ...response.plugins,
      new MiniCssExtractPlugin({
        filename: '[name].css'
      }),
      new PurgecssPlugin({
        paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true })
      }),
      new HtmlWebpackPlugin({
        template: './index.html',
        filename: 'index.html',
        inject: 'body'
      }),
      new ESLintPlugin()
    ]
  };
}

module.exports = response;
