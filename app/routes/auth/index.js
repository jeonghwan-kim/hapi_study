'use strict';

var ctrl = require('./auth.ctrl.js');
var valid = require('./auth.valid.js');

module.exports = function (server) {

  // 로그인
  server.route({
    method: 'POST',
    path:'/auth',
    handler: ctrl.login,
    config: {
      auth: {
        mode: 'try',
        strategy: 'mySessionStrategy'
      },
      validate: valid.login()
    }
  });

  // 로그아웃
  server.route({
    method: 'DELETE',
    path:'/auth',
    handler: ctrl.logout,
    config: {
      auth: {
        mode: 'required',
        strategy: 'mySessionStrategy'
      }
    }
  });

  // 세션 확인 (개발용)
  server.route({
    method: 'GET',
    path:'/auth',
    handler: ctrl.find,
    config: {
      auth: {
        mode: 'required',
        strategy: 'mySessionStrategy'
      }
    }
  });

};