const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    './src/index.js'
  ],
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: [
              "babel-loader"
            ]
          },
          {
            test: /\.css$/,
            use: [
              "style-loader",
              "css-loader"
            ]
          },
          {
            test: /\.scss$/,
            use: [
              "style-loader",
              "css-loader",
              "sass-loader"
            ]
          },
          {
            test: /\.svg$/,
            loader: 'raw-loader'
          },
          {
            exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/],
            loader: require.resolve('file-loader'),
            options: {
              name: 'static/media/[name].[hash:8].[ext]',
            },
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      normalize: path.join(__dirname, '/node_modules/normalize.css')
    }
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    port: 3000,
    hot: true,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3010',
        secure: false
      }
    }
  }
};
