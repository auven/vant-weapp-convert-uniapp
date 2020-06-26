const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  mode: 'development',
  entry: {
    'vant-docs': './src/index.js',
    'vant-preview': './src/preview.js',
  },
  output: {
    path: path.join(__dirname, '../dist'),
    publicPath: '/',
    chunkFilename: 'async_[name].js',
  },
  stats: {
    modules: false,
    children: false,
  },
  serve: {
    open: true,
    host: '0.0.0.0',
    devMiddleware: {
      logLevel: 'warn',
    },
    hotClient: {
      logLevel: 'warn',
      allEntries: true,
    },
  },
  resolve: {
    extensions: ['.js', '.vue', '.css'],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                preserveWhitespace: false,
              },
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(css|less)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'],
      },
      {
        test: /\.md$/,
        use: ['vue-loader', '@vant/markdown-loader'],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new ProgressBarPlugin(),
    new HtmlWebpackPlugin({
      chunks: ['vant-docs'],
      template: 'src/index.tpl',
      filename: 'index.html',
      inject: true,
    }),
    new HtmlWebpackPlugin({
      chunks: ['vant-preview'],
      template: 'src/index.tpl',
      filename: 'preview.html',
      inject: true,
    }),
  ],
};
