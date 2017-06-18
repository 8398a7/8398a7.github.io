const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const SentryPlugin = require('webpack-sentry-plugin');
const execSync = require('child_process').execSync;
const env = require('node-env-file');

const devBuild = process.env.NODE_ENV !== 'production';
const stagingBuild = process.env.NODE_ENV === 'staging';
const nodeEnv = devBuild ? 'development' : 'production';

env(`${__dirname}/.env`);
const revision = execSync('git rev-parse HEAD').toString().trim();

module.exports = {
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    'materialize-css/dist/css/materialize.css',
    'materialize-css/dist/js/materialize.min',
    'font-awesome/css/font-awesome.css',
    './src/index.tsx',
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['react-hot-loader/webpack', 'babel-loader'],
      },
      {
        test: /\.(ts|tsx)?$/,
        exclude: /node_modules/,
        use: ['react-hot-loader/webpack', 'ts-loader'],
      },
      {
        test: /\.css?$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss?$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(otf|woff|woff2|svg|ttf|eot)?$/,
        use: ['file-loader'],
      },
      {
        test: /\.(jpg|png)$/,
        use: ['file-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
  },
  output: {
    path: `${__dirname}/dist`,
    publicPath: '/',
    filename: 'app.js',
    sourceMapFilename: 'app.js.map',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(nodeEnv),
      'process.env.GIT_SHA': JSON.stringify(revision),
    }),
  ],
};

if (devBuild) {
  module.exports.devtool = 'eval';
  module.exports.devServer = {
    contentBase: './dist',
    hot: true,
  };
  module.exports.entry.push(
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
  );
} else if (stagingBuild) {
  module.exports.devtool = 'source-map';
  module.exports.plugins.push(
    new UglifyJSPlugin({
      sourceMap: true,
    }),
  );
} else {
  module.exports.devtool = 'source-map';
  module.exports.plugins.push(
    new UglifyJSPlugin({
      sourceMap: true,
    }),
    new SentryPlugin({
      // Sentry options are required
      baseSentryURL: 'https://sentry.husq.tk/api/0/projects',
      organisation: 'sentry',
      project: 'io-production',
      apiKey: process.env.SENTRY_API_KEY,

      // Release version name/hash is required
      release: () => revision,
    }),
  );
}
