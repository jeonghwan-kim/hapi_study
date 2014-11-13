'use strict';


var Joi = require('joi');

module.exports = function(server) {

    server.route({
        method: 'GET',
        path: '/',
        handler: function(req, reply) {
            reply('server is running');
        }
    });

    server.route({
        method: 'GET',
        path: '/hello/{name}',
        handler: function(req, reply) {
            var name = req.params.name;
            reply('Hello ' + name);
        },
        config: {
            validate: {
                params: {
                    name: Joi.string().min(3).max(10)
                }
            }
        }
    });

};
