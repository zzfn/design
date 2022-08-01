const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const Dotenv = require('dotenv-webpack');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
  entry: path.resolve(__dirname, '../src/index.tsx'),
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename],
    },
  },
  output: {
    clean: true,
    path: path.resolve(__dirname, '../dist'),
    filename: 'static/js/[contenthash:8].chunk.js',
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|gif|jpe?g)$/,
        type: 'asset',
        generator: {
          filename: 'static/images/[name].[contenthash:8][ext]',
        },
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, //10kb
          },
        },
      },
      {
        test: /\.tsx|ts|js$/,
        exclude: /(node_modules|\.png|svg|jpe?g$)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              plugins: [isDevelopment && 'react-refresh/babel'].filter(Boolean),
            },
          },
        ],
      },
      {
        test: /\.(css)$/,
        use: [
          {
            loader: isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 3,
              modules: false,
              sourceMap: true,
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: '@zzf/markdown-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new Dotenv({
      systemvars: true,
      path: `./.env.${process.env.APP_ENV}`,
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
    }),
  ].filter(Boolean),
  resolve: {
    plugins: [new TsconfigPathsPlugin({ configFile: path.resolve(__dirname, '../tsconfig.json') })],
    extensions: ['.tsx', '.ts', '.js'],
  },
};
