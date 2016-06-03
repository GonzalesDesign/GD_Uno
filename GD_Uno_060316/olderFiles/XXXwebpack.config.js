/**
 * Created by Odee on 4/17/16.
 */
module.exports = {
  entry : [
    './src/main.js'
  ],
  output: {
    path    : __dirname,
    filename: './dist/app.js'
  },
  module: {
    loaders: [{
      test  : /\.jsx?$/,
      loader: 'babel'
    }]
  }
};
