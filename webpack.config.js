const path = require('path');
const webpack = require('webpack');
const nodeEnv = process.env.NODE_ENV || 'development';
const isProd = (nodeEnv === 'production');
const sourceMapType = isProd ? false : 'eval-cheap-module-source-map';
const debugMode = !isProd;
const npmModulesPath = path.resolve(__dirname, 'node_modules');
const buildPath = path.resolve(__dirname, './.tmp/dist');

const webpackConfig = {
  context: __dirname,
  debug: debugMode,
  devtool: sourceMapType,
  entry: {
    frontend: './source/javascripts',
    'bootstrap-loader': 'bootstrap-loader'
  },
  output: {
    path: buildPath,
    filename: '[name].js',
  },
  resolve: {
    root: __dirname + '/source/javascripts',
    // extensions we don't want to specify when doing module includes
    // (eg. import Foo from 'Foo'; instead of import Foo from 'Foo.jsx';)
    extensions: ['', '.js', '.jsx', '.json'],
    modulesDirectories: ['node_modules'],
  },
  module: {
    loaders: [
      {test: /SubmissionsForm\.jsx$/, loader: 'expose?SubmissionsForm'},
      {test: /\.jsx?$/, loader: 'babel', exclude: [npmModulesPath]},
      {test: /\.s?[ca]ss?$/, loader: 'sass'},
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url?limit=10000"
      },
      {
        test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
        loader: 'file'
      },
      // add external libraries to global object (eg. window.React)
      {test: require.resolve('react'), loader: 'expose?React'},
      {test: require.resolve('react-dom'), loader: 'expose?ReactDOM'},
    ],
  },
  plugins: [
    // set NODE_ENV here so we get the correct build version of React (no warnings in prod)
    new webpack.DefinePlugin({
      'process.env': {NODE_ENV: JSON.stringify(nodeEnv)}
    }),
  ],
};

if (nodeEnv === 'production') {
  // minimize javascript
  webpackConfig.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {warnings: false},
    sourceMap: false
  }));
  // dedupes equal or similar files
  webpackConfig.plugins.push(new webpack.optimize.DedupePlugin());
  // uses smallest id lengths for most frequently called modules/chunks
  webpackConfig.plugins.push(new webpack.optimize.OccurrenceOrderPlugin());
  // prevents assets from being emitted if webpack throws error during compilation
  webpackConfig.plugins.push(new webpack.NoErrorsPlugin());
  // removes dynamically required moment localization files to reduce bundle size
  webpackConfig.plugins.push(new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /\*/));
}

module.exports = webpackConfig;
