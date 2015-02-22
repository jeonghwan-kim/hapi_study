'use strict';

// Production specific configuration
module.exports = {
  log: {
    path: '/var/log/nodejs'
  },

  mysql: {
    host              : '',
    port              : 3306,
    user              : '',
    password          : '',
    database          : '',
    multipleStatements: true,
    connectionLimit   : 10, // 10개
    acquireTimeout    : 5000 // 5초
  }

};