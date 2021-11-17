const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      title: 'JS CI Example',
      template: 'index.html',
    }),
  ],
};
