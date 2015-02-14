'use strict';

var routeHelper = require('../components/routeHelper');

module.exports = function (server) {

  routeHelper.route(server, __dirname);

  server.route({
    method: 'GET',
    path:'/',
    handler: function (req, reply) {
      reply('server is running');
    }
  });

};