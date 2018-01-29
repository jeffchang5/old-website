const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve('./dev/index.jsx'),
  output: {
    filename: 'bundle.js',
    path: path.resolve('./dist/public'),
  },
  devtool: 'source-map',
  target: 'web',
  devServer: {
    inline: true,
    contentBase: path.resolve('./dist'),
    port: 5000,
  },
  resolve: {
    modules: [
      path.resolve('./dev'),
      path.resolve('./node_modules'),
    ],
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      { test: /\.jsx$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        options: { emitWarning: true } },
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.(svg|png|jpg|otf|ttf|js)$/,
        use: [{ loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets/',
          },
        }],
      },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('./dev/template.html'),
      title: 'Jeffrey Chang',
      inject: 'body',
    }),
  ],
};
