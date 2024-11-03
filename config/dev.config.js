const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./base.config.js');
const CSP_PROD = require('./CSP.js');

const CSP = {
  ...CSP_PROD,
  'script-src': "'self' 'unsafe-eval'",
};

module.exports = {
  ...baseConfig,
  mode: 'development',
  stats: 'minimal',
  plugins: [
    ...baseConfig.plugins,
    new HtmlWebpackPlugin({
      title: '(Development) React 18 Application Template',
      template: 'src/index.html',
      favicon: 'src/asset/ukraine-flag.ico',
      CSP: Object.entries(CSP).map(
        ([key, value]) => `${key} ${value}`
      ).join('; '),
    }),
  ],
  devServer: {
    static: './dist',
    port: 8000,
  },
};
