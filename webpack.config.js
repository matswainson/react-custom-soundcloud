const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('style.css');

const config = {
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.css']
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      use: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.(ts|tsx)$/,
      use: 'awesome-typescript-loader',
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      use: extractCSS.extract([
        'css-loader',
        'postcss-loader'
      ])
    }],
  },
  externals: {
    'classnames': 'classnames',
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    }
  },
  plugins: [
    extractCSS
  ]
};

module.exports = config;