var Hapi = require('hapi'),
  Good = require('good'),
  Joi = require('joi'),
  server = new Hapi.Server('localhost', 8000);

server.route({
  method: 'GET',
  path: '/',
  handler: function (req, reply) {
    reply('Hapi server is running');
  }
});

server.route({
  method: 'GET',
  path: '/{name}',
  handler: function (request, reply) {
    reply({
      statusCode: 200,
      Hello: encodeURIComponent(request.params.name)
    });
  },
  config: {
    validate: {
      params: {
        name: Joi.string().min(3).max(10)
      }
    }
  }
});

server.route({
  method: 'GET',
  path: '/list',
  handler: function (request, reply) {
    reply(request.query.limit);
  },
  config: {
    validate: {
      query: {
        limit: Joi.number().integer().min(1).max(100).default(10)
      }
    }
  }
});

server.route({
  method: 'GET',
  path: '/test',
  handler: function (request, reply) {
    reply({ name: 'test', code: 200 });
  },
  config: {
    response: {
      schema: Joi.object({
        name: Joi.string(),
        code: Joi.number().integer()
      })
    }
  }
});

server.pack.register(Good, function (err) {
  if (err) {
    throw err;
  }

  server.start(function () {
    server.log('info', 'Server running at: ' + server.info.uri);
  });

});

