var Hapi = require('hapi'),
  Good = require('good'),
  routes = require('./routes'),
  server = new Hapi.Server('localhost', 8000);

routes(server);

server.pack.register(Good, function (err) {
  if (err) {
    throw err;
  }

  server.start(function () {
    server.log('info', 'Server running at: ' + server.info.uri);
  });

});