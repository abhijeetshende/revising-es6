const path = require('path');

module.exports = {
  entry: './webpack_demo/index.js',
  output: {
    path: path.resolve(__dirname+'/webpack_demo', 'dist'),
    filename: 'my-first-webpack.bundle.js',
  },
  mode:'development',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};