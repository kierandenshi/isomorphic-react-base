import { resolve } from 'path';
import webpack from 'webpack';
import nodeExternals from 'webpack-node-externals';

const clientConfig = {
  entry: './src/client/index.js',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'client.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isClient__: "true"
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
};

const serverConfig = {
  entry: './src/server/index.js',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'server.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isClient__: "false"
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
};

module.exports = { clientConfig, serverConfig };
