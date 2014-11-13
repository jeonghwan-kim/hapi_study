var Hapi = require('hapi');

var server = new Hapi.Server('localhost', 8000);

require('./routes')(server);

require('./logger')(server);


server.start(function() {
  server.log('info', 'Server is running at #' + server.info.uri);
});
