// Karma configuration
// Generated on Sun Feb 21 2016 08:01:58 GMT+0530 (India Standard Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai', 'browserify'],


    // list of files / patterns to load in the browser
    files: [
      'src/**/*.js',
      'test/**/*Spec.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor

    // https://onsen.io/blog/mocha-chaijs-unit-test-coverage-es6/
    preprocessors: {
        'src/**/*.js': ['browserify'],
        'test/**/*.js': ['browserify']
    },

    browserify: {
      debug: true,
      transform: [
        ['babelify',{'presets':"es2015"}]
        , ['browserify-istanbul',{instrumenterConfig: {embedSource: true }}]
      ]
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha', 'coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,

    coverageReporter: {
        instrumenters: { isparta : require('isparta') },
            instrumenter: {
                'lib/**/!(*spec).js': 'isparta'
            },
      type : 'html',
      file : 'coverage.txt',
      includeAllSources: true
    },


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
