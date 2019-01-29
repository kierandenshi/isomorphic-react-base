import merge from 'webpack-merge';
import common from './webpack.common.babel';

module.exports = [
  merge(common.clientConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
  }),
  merge(common.serverConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
  }),
];
