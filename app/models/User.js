'use strict';

var Joi = require('joi');

exports.getSchema = function() {
  return {
    id: Joi.number().integer().min(0),
    name: Joi.string().min(2).max(20)
  };
};


