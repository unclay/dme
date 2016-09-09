var path = require('path')
var pkg = require('../package')
var webpack = require('webpack')
var fs = require('fs')
var ConcatSource = require('webpack/lib/ConcatSource');
var CopyWebpackPlugin = require('copy-webpack-plugin');

console.log(pkg.version)
function MyPlugin(options) {
	this.regExps = options.regExps || {};
  // Configure your plugin with options...
}

MyPlugin.prototype.apply = function(compiler) {
	var _this = this;
  compiler.plugin("compile", function(params) {
    console.log("The compiler is starting to compile...");
  });

  compiler.plugin('compilation', function (compilation) {
    compilation.plugin("optimize-chunk-assets", function(chunks, callback) {
      chunks.forEach(function(chunk) {
        chunk.files.forEach(function(file) {
        	let source = compilation.assets[file].source()
        	for (let regExp of _this.regExps) {
        		source = source.replace(regExp[0], regExp[1])
        	}
        	compilation.assets[file.replace('min.', '')] = new ConcatSource(source)
        });
      });
      callback();
    });
  })
};

module.exports = {
  entry: {
  	'app': "./src/index.js",
  	'app.min': "./src/index.js"
  },
  output: {
    path: path.resolve(__dirname, '../dist', pkg.version),
    filename: "dme.min.js",
    libraryTarget: 'umd',
    library: 'dme'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
      	test: /\.css$/,
      	loader: 'style!css'
      }
    ],
    'uglify-loader': {
        mangle: false
    }
  },
  plugins: [
  	new webpack.NoErrorsPlugin(),
  	new MyPlugin({
  		regExps: [
  			[ /define.amd/gi, 1 ]
  		]
  	}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
	        warnings: false
	    }
		})
  ]
}