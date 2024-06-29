const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackAlias({
    ['@']: path.resolve(__dirname, 'src'),
  }),
  (config) => {
    if (process.env.NODE_ENV === 'production') {
      config.output.publicPath = '/logy/';
    }
    return config;
  }
);
