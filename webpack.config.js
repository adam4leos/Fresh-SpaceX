const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const buildEntryPoint = function buildEntryPoint(entryPoint) {
  return [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    entryPoint,
  ];
};
const isProd = process.env.NODE_ENV === 'production';
const cssDev = ['style-loader', 'css-loader', 'sass-loader'];
const cssProd = ExtractTextPlugin.extract({
  fallback: 'style-loader',
  use: ['css-loader', 'sass-loader'],
});
const imgOptionsProd = {
  name: '[name]-[hash:12].[ext]',
  outputPath: '/img/',
  publicPath: path.resolve(__dirname, 'dist/'),
};
const imgOptionsDev = {
  name: '[name]-[hash:8].[ext]',
  outputPath: 'img/',
};
const imgOptions = isProd ? imgOptionsProd : imgOptionsDev;
const cssConfig = isProd ? cssProd : cssDev;

module.exports = {
  entry: {
    app: isProd ? './src/App.jsx' : buildEntryPoint('./src/App.jsx'),
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'js/[name].bundle.js',
    hotUpdateChunkFilename: 'hot/hot-update.js',
    hotUpdateMainFilename: 'hot/hot-update.json',
    publicPath: '/dist/',
  },
  devServer: {
    historyApiFallback: true,
    open: true,
    openPage: '',
    stats: 'errors-only',
    hot: true,
    inline: true,
    port: 8080,
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              'es2015',
              'stage-0',
              'react',
            ],
            plugins: [
              'transform-runtime',
            ],
          },
        },
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: 'eslint-loader',
      },
      {
        test: /\.(scss|css)$/,
        use: cssConfig,
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: imgOptions,
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                quality: 65,
              },
              pngquant: {
                quality: '10-20',
                speed: 4,
              },
              svgo: {
                plugins: [
                  {
                    removeViewBox: false,
                  },
                  {
                    removeEmptyAttrs: false,
                  },
                ],
              },
              gifsicle: {
                optimizationLevel: 7,
                interlaced: false,
              },
              optipng: {
                optimizationLevel: 7,
                interlaced: false,
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: getPath => getPath('css/[name].bundle.css'),
      disable: !isProd,
      allChunks: true,
      fallback: 'style-loader',
    }),
    new webpack.ProvidePlugin({
      Promise: 'imports-loader?this=>global!exports-loader?global.Promise!es6-promise',
      fetch: 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
