const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./base.config.js');
const CSP = require('./CSP.js');

module.exports = {
  ...baseConfig,
  mode: 'production',
  plugins: [
    ...baseConfig.plugins,
    new HtmlWebpackPlugin({
      title: 'React 18 Application Template',
      template: 'src/index.html',
      favicon: 'src/asset/ukraine-flag.ico',
      CSP: Object.entries(CSP).map(
        ([key, value]) => `${key} ${value}`
      ).join('; '),
    }),
  ],
};
