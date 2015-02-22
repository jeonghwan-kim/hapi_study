'use strict';

var userDao = require('../../dao/user');

exports.find = function (req, reply) {
  userDao.find(function (err, users) {
    if (err) {
      req.error(err);
      return reply(err).code(400);
    }

    reply({users: users});
  })
};

exports.query = function (req, reply) {
  userDao.query(req.params.id, function (err, user) {
    if (err) {
      req.error(err);
      return reply(err).code(400);
    }

    reply({user: user});
  })
};

exports.insert = function (req, reply) {
  userDao.insert(req.payload, function (err, users) {
    if (err) {
      req.error(err);
      return reply(err).code(400);
    }

    req.log('info', req.payload.name + ' is inserted.');
    reply({users: users}).code(201);
  });

};

exports.remove = function (req, reply) {
  userDao.remove(req.query.id, function (err, users) {
    if (err) {
      req.error(err);
      return reply(err).code(400);
    }

    reply({users: users});
  });
};