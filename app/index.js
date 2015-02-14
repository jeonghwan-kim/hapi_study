var Hapi = require('hapi');

var server = new Hapi.Server('localhost', 8000);

require('./routes')(server);

server.start(function() {
  console.log('Server is running at ' + server.info.uri);
});
