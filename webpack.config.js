const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: [
    'script-loader!jquery/dist/jquery.min.js',
    'script-loader!foundation-sites/dist/js/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      Main: path.resolve(__dirname, './app/components/Main.jsx'),
      Nav: path.resolve(__dirname, './app/components/Nav.jsx'),
      Weather: path.resolve(__dirname, './app/components/Weather.jsx'),
      WeatherForm: path.resolve(__dirname, './app/components/WeatherForm.jsx'),
      WeatherMessage: path.resolve(__dirname, './app/components/WeatherMessage.jsx'),
      About: path.resolve(__dirname, './app/components/About.jsx'),
      Example: path.resolve(__dirname, './app/components/Example.jsx'),
      openWeatherMap: path.resolve(__dirname, './app/api/openweatherMap.jsx'),
      ErrorModal: path.resolve(__dirname, './app/components/ErrorModal.jsx')
    }
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
}
