var webpack = require('webpack');
var path = require('path'); //引入node的path库
var babel = require('babel-core'); //引入node的path库

var config = {
  entry: ['./js/index.js'], //入口文件
  output: {
    path: path.resolve(__dirname, 'public'), // 指定编译后的代码位置为 dist/bundle.js
    filename: 'bundle.js'
  },
  module: {

    loaders: [
      // 为webpack指定loaders
      {
        test: /\.js$/,
        loader: ['babel-loader'],
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]

  }
}

module.exports = config;