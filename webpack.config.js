var path = require('path');
var config = {
  entry: path.resolve(__dirname, 'app/main.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/, // A regexp to test the require path. accepts either js or jsx
      exclude: /node_modules/,
      loader: 'babel', // The module to load. "babel" is short for "babel-loader"
      query: {
        presets: ['es2015', 'react']
      },
    }
    ,{
        test: /\.css$/, // Only .css files
        loader: 'style!css' // Run both loaders
    }]
  }
};

module.exports = config;
