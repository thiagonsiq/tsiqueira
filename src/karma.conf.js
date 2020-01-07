module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    files: ['https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js'],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      reports: ['html', 'lcovonly'],
      fixWebpackSourcePaths: true
    },
    angularCli: {
      environment: 'dev',
      codeCoverage: true
    },
    reporters:
      config.angularCli && config.angularCli.codeCoverage
        ? ['progress', 'coverage-istanbul']
        : ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browserDisconnectTolerance: 3,
    captureTimeout: 140000,
    browserDisconnectTimeout: 140000,
    browserNoActivityTimeout: 140000,
    browsers: ['Chrome', 'google-chrome'],
    singleRun: true,
    customLaunchers: {
      'google-chrome': {
        base: 'google-chrome',
        flags: [
          '--no-sandbox'
        ]
      }
    }
  });
};