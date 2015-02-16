'use strict';

var path = require('path');

var opts = {
  opsInterval: 1000,
  reporters  : [{
    reporter: require('good-console'),
    args    : [{
      request: '*',
      response: '*',
      log: '*',
      error: '*'
    }]
  }, {
    reporter: require('good-file'),
    args    : [{
      path     : path.join(__dirname, '../../../logs'),
      format   : 'YYYYMMDD-hhmmss',
      prefix   : 'hapi',
      extension: 'log',
      rotate   : 'daily'
    }, {
      request: '*',
      response: '*',
      log: '*',
      error: '*'
    }]
  }]
};

module.exports = function (server) {
  server.register({
    register: require('good'),
    options : opts
  }, function (err) {
    if (err) {
      throw err;
    }
  });
};
