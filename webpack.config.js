const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


// Webpack Configuration
const config = {
  
  // Entry
  entry: './src/index.js',
  // Output
  output: {
    filename: 'bundle.js',
  },
  // Loaders
  module: {
    rules : [
      // JavaScript/JSX Files
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
		{
            test: /\.scss$/,
            use: [
                "style-loader", // creates style nodes from JS strings
                "css-loader", // translates CSS into CommonJS
                "sass-loader" // compiles Sass to CSS, using Node Sass by default
            ]
        },
        
      {
      	test: /\.html$/,
      	exclude: /node_modules/,
      	use: ['html-loader']
      },
      {
	        test: /\.(png|jpe?g|gif)$/,
	        use: ['file-loader']
      }
    ]
  },
  // Plugins
  plugins: [
  	new HtmlWebpackPlugin({	
  		template:'./src/index.html',
  		filename: 'index.html',
  		hash:true
  	})
  ],

  watch:false,
  devtool: 'source-map',
};
// Exports
module.exports = config;