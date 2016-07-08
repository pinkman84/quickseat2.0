config = {
  entry: {a:"./src/app_create.jsx",
          b: "./src/app_view.jsx"},
  output: {
    filename: "[name].js",
    path: "./build"
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module:{
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  devtool: 'source-map'
}

module.exports = config;