'use strict';

var path = require('path');

// Development specific configuration
module.exports = {
  log: {
    path: path.join(__dirname, '../../logs')
  },

  mysql: {
    host              : '',
    port              : 3306,
    user              : '',
    password          : '',
    database          : '',
    multipleStatements: true,
    connectionLimit   : 1, // 1개
    acquireTimeout    : 3000 // 3초
  }

};