'use strict';

var UserSchema = require('../../models/User').getSchema();

exports.query = function () {
  return {
    params: {
      id: UserSchema.id.required()
    }
  };
};

exports.insert = function () {
  return {
    payload: {
      name: UserSchema.name.required()
    }
  };
};

exports.remove = function () {
  return {
    query: {
      id: UserSchema.id.required()
    }
  };
};