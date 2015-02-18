'use strict';

var Joi = require('joi');

exports.login = function () {
  return {
    payload: {
      username: Joi.string().required(),
      password: Joi.string().required()
    }
  };
};

