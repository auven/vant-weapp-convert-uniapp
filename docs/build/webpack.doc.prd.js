const path = require('path');
const config = require('./webpack.doc.dev.js');

delete config.serve;

module.exports = Object.assign(config, {
  mode: 'production',
  output: {
    path: path.join(__dirname, '../dist'),
    publicPath: './',
    filename: '[name].[hash:8].js',
    chunkFilename: 'async_[name].[chunkhash:8].js',
  },
});
