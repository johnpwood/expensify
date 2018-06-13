// entry-point, output file

const path = require('path');

module.exports = (env) => {
  const production = env === 'production'
  return ({
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js',
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.jsx?$/,
        exclude: /node_modules/,
      }, {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      }],
    },
    devtool: production? 'source-map' : 'cheap-module-eval-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true
    },
  })
};
