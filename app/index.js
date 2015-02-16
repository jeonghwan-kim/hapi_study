var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: 8000
});


require('./components/logHelper')(server);

require('./routes')(server);

server.start(function() {
  console.log('Server is running at ' + server.info.uri);
});
