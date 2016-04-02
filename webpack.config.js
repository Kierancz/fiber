// make sure we have the path and webpack modules
var path = require('path');
var webpack = require('webpack');

// lists all webpack modules used and makes them available globally
module.exports = {
  // developer tool to enhance debugging. Eval indicates modules are executed with eval
  devtool: 'eval',
  // tells webpack where app modules go
  entry: {
    app : [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      './lib/index.js'],
  },
  // options for compilation output to disk
  output: {
    // default directory location
    path: path.join(__dirname, './public/js/'),
    // name of main app container
    filename: `app.js`,
    // public URL address of the output files
    publicPath: '/js/'
  },
  // plugins that are added to app
  plugins: [
    // add the hot module replacement plugin which "Generates Hot Update Chunks of each chunk in the records. It also enables the API and makes __webpack_hash__ available in the bundle."
    new webpack.HotModuleReplacementPlugin()
  ],
  // node settings
  node: {
    // sets default node filesystem to empty
    fs: "empty"
  },
  // options for resolving module paths
  resolve: {
    // modules are compared to alias replaced when theres a match
    alias: {
      'react': path.join(__dirname, 'node_modules', 'react')
    },
    // indicates extention of files to pack up
    extensions: ['', '.js']
  },
  // resolves path of libaray loaders
  resolveLoader: {
    'fallback': path.join(__dirname, 'node_modules')
  },
  // options for normal modules
  module: {  
    // array to hold loader options as strings  
    loaders: [
    {
      // regex for matching file extensions
      test: /\.js$/,
      // modules to use for loading
      loaders: ['react-hot', 'babel'],
      // exludes exceptions
      exclude: /node_modules/,
      // main directory we want to include
      include: [path.join(__dirname,'./lib')]
    },
    {
      test: /\.xml$/, // regex for xml extensions
      loader: "raw" // use raw loading
    },
    {
      test: /\.json$/,  // regex for json
      loaders: ['json-loader']  // use json loader
    },
    {
      test: /\.css?$/,  // regex for css extension
      loaders: ['style', 'raw'],  // use style and raw loaders
      include: __dirname  // load from default directory
    }]
  }
};
