// Karma configuration
// Generated on Thu Aug 18 2016 14:36:57 GMT+0200 (CEST)
var path = require('path');

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'node_modules/medium-editor/dist/js/medium-editor.js',
      'tests.webpack.js'
    ],


    // list of files to exclude
    exclude: [
      '**/*.swp'
    ],

    // webpack configuration
		webpack: {
			cache: true,
			devtool: 'inline-source-map',
			module: {
				preLoaders: [
					{
						test: /-test\.js$/,
						include: /test/,
						exclude: /(node_modules)/,
						loader: 'babel',
						query: {
								cacheDirectory: true,
						},
					},
				],
				loaders: [
					{
						test: /\.js$/,
						include: /src/,
						exclude: /(node_modules)/,
						loader: 'babel',
						query: {
								cacheDirectory: true,
						},
					},
				],
			},
		},

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'tests.webpack.js': ['webpack', 'sourcemap']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

		// custom launcher for travis
		customLaunchers: {
			Chrome_travis_ci: {
				base: 'Chrome',
				flags: ['--no-sandbox']
			}
		},


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  });

  if (process.env.TRAVIS) {
    config.browsers = ['Chrome_travis_ci'];
  }
}
