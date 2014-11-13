var Hapi = require('hapi');

var server = new Hapi.Server('localhost', 8000);

server.route({
  method: 'GET',
  path: '/',
  handler: function(req, reply) {
    reply('server is running');
  }
});

server.start();
