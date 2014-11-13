var Hapi = require('hapi');

var server = new Hapi.Server('localhost', 8000);

var routes = require('./routes');

routes(server);

server.start();
