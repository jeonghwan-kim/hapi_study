'use strict';

/**
 * mysql 쿼리 수행 모듈
 */

var mysql = require('mysql');
var debug = require('debug')('mysql');
var env = require('../../config');

module.exports = (function () {

  var internals = {};
  var externals = {};

  internals.pool = mysql.createPool(env.mysql);

  // Logs
  internals.pool.on('connection', function (connection) {
    debug('connection is created');
  });
  internals.pool.on('enqueue', function () {
    debug('Waiting for available connection slot');
  });

  internals.connect = function (connectHandler) {
    internals.pool.getConnection(function (err, connection) {
      if (err) {
        throw err;
      }

      return connectHandler(null, connection);
    });
  };

  internals.query = function (sql, values, callback) {
    internals.connect(function (err, conn) {
      if (err) {
        return callback(err);
      }

      conn.query(sql, values, function (err, rows) {
        if (err) {
          console.error(err);
          conn.release();
          return callback(err);
        }

        conn.release();
        callback(null, rows);
      });
    });
  };

  externals.query = function (params) {
    var sql = params.sql;
    var values = params.values;
    var callback = params.callback;

    internals.query(sql, values, callback);
  };

  return externals;

}());