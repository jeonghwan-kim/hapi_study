'use strict';

var path = require('path');

module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    lab: {
      files: ['app/**/*.spec.js'],
      nodeEnv: 'development',
      DEBUG: '*',
      color: true,
      verbose: true,
      timeout: 7000,
      parallel: false,
      reportFile: 'report.html',
      reporter: 'html',
      coverage: true
    },

    open: {
      report: {
        path: 'report.html',
        app: 'Google Chrome'
      }
    }

  });

  grunt.loadNpmTasks('grunt-lab');
  grunt.loadNpmTasks('grunt-open');

  grunt.registerTask('test', ['lab', 'open:report']);

};