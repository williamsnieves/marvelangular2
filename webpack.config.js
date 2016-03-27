var CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
  entry: "./src/main.js",
  output: {
    path: __dirname,
    filename: "dist/bundle.js"
  },

  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },
  plugins: [
        new CopyWebpackPlugin([

            // {output}/to/file.txt
            { from: './index.html', to: 'dist/index.html' }


        ])
  ],
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      }
    ]
  }
}
