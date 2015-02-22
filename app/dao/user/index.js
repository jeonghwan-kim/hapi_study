'use strict';

var fs = require('fs');
var path = require('path');
var db = require('../../components/db');

exports.find = function (callback) {
  var q = fs.readFileSync(path.join(__dirname, 'get-users.sql'), 'utf8');

  db.query({
    sql: q, values: null, callback: function (err, data) {
      if (err) {
        return callback(err, null);
      }
      callback(null, data);
    }
  });
};

exports.query = function (userId, callback) {
  var q = fs.readFileSync(path.join(__dirname, 'find-user.sql'), 'utf8');

  db.query({
    sql: q, values: userId, callback: function (err, data) {
      if (err) {
        return callback(err, null);
      }

      callback(null, data[0]);
    }
  });
};

exports.insert = function (payload, callback) {
  var q = [
    fs.readFileSync(path.join(__dirname, 'insert-user.sql'), 'utf8'),
    fs.readFileSync(path.join(__dirname, 'get-users.sql'), 'utf8')
  ].join('');

  db.query({
    sql: q, values: payload.name, callback: function (err, data) {
      if (err) {
        return callback(err, null);
      }

      callback(null, data[1]);
    }
  });
};


exports.remove = function (userId, callback) {
  var q = [
    fs.readFileSync(path.join(__dirname, 'delete-user.sql'), 'utf8'),
    fs.readFileSync(path.join(__dirname, 'get-users.sql'), 'utf8')
  ].join('');

  db.query({
    sql: q, values: userId, callback: function (err, data) {
      if (err) {
        return callback(err, null);
      }

      callback(null, data[1]);
    }
  });
};
