
module.exports = {
  entry: './jsX/codeArchitecture_X.js',
  output: {
    path: __dirname,
    filename: './codeArchitecture_XBundle.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css!'}
    ]
  }
};
