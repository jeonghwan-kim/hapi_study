'use strict';


module.exports = function (server) {

  var users = ['Chris', 'Mod', 'Daniel', 'JT', 'Justin'];

  server.route({
    method: 'GET',
    path:'/users',
    handler: function (req, reply) {
      reply({users: users});
    }
  });

  server.route({
    method: 'GET',
    path:'/users/{id}',
    handler: function (req, reply) {
      if (req.params.id < users.length) {
        reply({user: users[req.params.id]});
      } else {
        reply('No user').code(404);
      }
    }
  });

};