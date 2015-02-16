'use strict';

var users = ['Chris', 'Mod', 'Daniel', 'JT', 'Justin'];

exports.find = function (req, reply) {
  reply({users: users});
};

exports.query = function (req, reply) {
  reply({user: users[req.params.id]});
};

exports.insert = function (req, reply) {
  users.push(req.payload.name);
  req.log('info', req.payload.name + ' is inserted.');
  reply({users: users});
};

exports.remove = function (req, reply) {
  users.splice(req.query.id, 1);
  reply({users: users});
};