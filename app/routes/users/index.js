'use strict';

var ctrl = require('./users.ctrl.js');
var valid = require('./users.valid.js');

module.exports = function (server) {

  server.route({
    method: 'GET',
    path:'/users',
    handler: ctrl.find
  });

  server.route({
    method: 'GET',
    path:'/users/{id}',
    handler: ctrl.query,
    config: { validate: valid.query() }
  });

  server.route({
    method: 'POST',
    path:'/users',
    handler: ctrl.insert,
    config: { validate: valid.insert() }
  });

  server.route({
    method: 'DELETE',
    path:'/users',
    handler: ctrl.remove,
    config: { validate: valid.remove() }
  });

};