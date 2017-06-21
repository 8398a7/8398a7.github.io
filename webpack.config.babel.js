const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const SentryPlugin = require('webpack-sentry-plugin');
const execSync = require('child_process').execSync;
const env = require('node-env-file');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const devBuild = process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'staging';
const stagingBuild = process.env.NODE_ENV === 'staging';
const nodeEnv = devBuild ? 'development' : 'production';

env(`${__dirname}/.env`);
const revision = execSync('git rev-parse HEAD').toString().trim();

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'materialize-css/dist/js/materialize.min',
    './src/index.tsx',
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        exclude: /node_modules/,
        use: ['react-hot-loader/webpack', 'ts-loader'],
      },
      {
        test: /\.css?$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        })
      },
      {
        test: /\.scss?$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(otf|woff|woff2|svg|ttf|eot)?$/,
        use: [`file-loader${devBuild ? '' : '?publicPath=../dist/&outputPath=fonts/'}`],
      },
      {
        test: /\.(jpg|png)$/,
        use: [`file-loader${devBuild ? '' : '?publicPath=dist/&outputPath=images/'}`],
      },
    ],
  },
  resolve: {
    extensions: ['.css', '.js', '.ts', '.tsx'],
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
    new ExtractTextPlugin('style.css'),
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
  module.exports.plugins.push(
    new webpack.NamedModulesPlugin(),
  );
} else if (stagingBuild) {
  module.exports.devtool = 'source-map';
  module.exports.plugins.push(
    new webpack.optimize.ModuleConcatenationPlugin(),
    new UglifyJSPlugin({
      sourceMap: true,
      comments: false,
    }),
    new OptimizeCssAssetsPlugin({
      cssProcessorOptions: { discardComments: { removeAll: true } },
    }),
  );
} else {
  module.exports.devtool = 'source-map';
  module.exports.plugins.push(
    new webpack.optimize.ModuleConcatenationPlugin(),
    new UglifyJSPlugin({
      sourceMap: true,
      comments: false,
    }),
    new OptimizeCssAssetsPlugin({
      cssProcessorOptions: { discardComments: { removeAll: true } },
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
