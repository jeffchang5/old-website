const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve('./dev/index.tsx'),
  output: {
    filename: 'bundle.js',
    path: path.resolve('./dist/public'),
  },
  devtool: 'inline-source-map',
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
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(ts|tsx)$/,
        enforce: 'pre',
        use: [
          {
            loader: 'tslint-loader',
            options: { /* Loader options go here */ }
          }
        ]
      },
      {
        test: /\.(svg|png|jpg|otf|ttf|pdf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'static/',
            },
          },
        ],
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
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
