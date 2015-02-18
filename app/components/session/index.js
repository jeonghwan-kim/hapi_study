'use strict';

// Hapi 서버 객체를 이용해 인증 설정을 한다.
exports = module.exports = function (server) {

  // 인증 모듈을 등록한다.
  server.register(require('hapi-auth-cookie'), function (err) {
    if (err) {
      throw err;
    }

    // 인증 strategy 를 생성한다.
    server.auth.strategy('mySessionStrategy', 'cookie', {
      password: 'secret',
      cookie: 'sid-example',
      redirectTo: false,
      isSecure: false
    });
  });

};

exports.startup = function (auth, data) {

  // 사전 인증정보가 없을 경우 세션에 인증정보 저장
  if (!auth.isAuthenticated) {
    auth.session.set(data);
  }

};

exports.teardown = function (auth) {

  // 세션정보 삭제
  auth.session.clear();
};