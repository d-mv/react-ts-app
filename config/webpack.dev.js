const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ResourceHintWebpackPlugin = require('resource-hints-webpack-plugin'); // Adds automatically resource hints to your html-files

const parentDir = path.resolve(__dirname, '..');

const config = {
  devServer: {
    hot: true,
    https: true,
    // noInfo: true,
    onListening: function(server) {
      const port = server.listeningApp.address().port;
      console.log('Listening on port:', port);
    },
    open: true,
    overlay: true,
    contentBase: [path.join(parentDir, 'public')],
    compress: true,
    clientLogLevel: 'silent',
    serveIndex: true,
    port: 7777,
    watchContentBase: true,
    // publicPath: 'public',
    // color: true,
    // contentBase: path.join(__dirname, 'public'),
    // transportMode: 'ws',
  },
  entry: path.resolve(parentDir, 'src/index.tsx'),
  output: {
    path: path.resolve(parentDir, 'dist'),
    filename: '[name].[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.ts(x)?$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/,
        use: 'file-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: require('html-webpack-template'),
      inject: false,
      appMountId: 'app',
      title: 'Ki App',
      // prefetch: ['**/*.*'],
      // preload: ['**/*.*'],
    }),
    new ResourceHintWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
};

module.exports = config;
