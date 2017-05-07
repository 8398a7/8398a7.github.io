import webpack from 'webpack';
import UglifyJSPlugin from 'uglifyjs-webpack-plugin';

const devBuild = process.env.NODE_ENV !== 'production';
const nodeEnv = devBuild ? 'development' : 'production';

module.exports = {
  entry: [
    'babel-polyfill',
    'materialize-css/dist/css/materialize.css',
    'materialize-css/dist/js/materialize.min',
    'font-awesome/css/font-awesome.css',
    './src/index.jsx',
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
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
        test: /\.(otf|woff|svg|ttf|eot)([\?]?.*)$/,
        use: ['base64-font-loader'],
      },
      {
        test: /\.(jpg|png)$/,
        use: ['url-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: `${__dirname}/dist`,
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(nodeEnv),
    }),
  ],
};

if (devBuild) {
  module.exports.devtool = 'eval-source-map';
  module.exports.devServer = {
    contentBase: './dist',
    hot: true,
  };
  module.exports.entry.push(
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
  );
} else {
  module.exports.plugins.push(
    new UglifyJSPlugin(),
  );
}
