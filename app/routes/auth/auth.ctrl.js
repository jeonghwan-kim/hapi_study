'use strict';

var session = require('../../components/session');

exports.login = function (req, reply) {
  var user = {
    username: 'Chris',
    password: 'chrisPass'
  };

  if (user.username !== req.payload.username || user.password !== req.payload.password) {
    return reply(403);
  }

  // 세션 시작
  session.startup(req.auth, user);

  // 응답
  reply(user).code(201);
};

exports.logout = function (req, reply) {

  // 세선 종료
  session.teardown(req.auth);

  // 응답
  reply();
};

exports.find = function (req, reply) {
  reply(req.auth);
};
