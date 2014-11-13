'use strict';

var Joi = require('joi');

var func1 = require('./api/func1.js'),
  func2 = require('./api/func2.js');

module.exports = function(server) {

    server.route({ method: 'GET', path: '/', handler: func1 });

    server.route({ method: 'GET', path: '/{name}', handler: func2, config: {
        validate: {
            params: {
                name: Joi.string().min(3).max(10)
            }
        }
    }});

};
