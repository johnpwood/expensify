
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env) => {
  const production = env === 'production'
  //const CSSExtract = new ExtractTextPlugin('styles.css')
  return ({
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public', 'dist'),
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
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      ]},
    plugins: [ new MiniCssExtractPlugin({
      test: /\.css$/
    }) ],
    devtool: production? 'source-map' : 'cheap-module-eval-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      publicPath: '/dist/'
    },
  })
};
