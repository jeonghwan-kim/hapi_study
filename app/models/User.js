'use strict';

var Joi = require('joi');

exports.getSchema = function() {
  return {
    id: Joi.number().integer().min(0).max(4),
    name: Joi.string().min(2).max(20)
  };
};


