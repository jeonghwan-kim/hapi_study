'use strict';

var Code = require('code');
var Lab = require('lab');
var lab = exports.lab = Lab.script();
var path = require('path');
var app = require(path.join(__dirname, '../../index.js'));

lab.experiment('/users', function () {

  var tester = {
    name: 'Unit Tester'
  };

  lab.before(function (done) {
    var opts = {
      method: 'POST',
      url: '/users',
      payload: {
        name: tester.name
      }
    };
    app.inject(opts, function (res) {
      Code.expect(res.statusCode).to.be.equal(201);
      tester.id = res.result.users.indexOf(tester.name);
      done();
    });
  });

  lab.after(function (done) {
    var opts = {
      method: 'DELETE',
      url: '/users?id=' + tester.id
    };
    app.inject(opts, function (res) {
      Code.expect(res.statusCode).to.be.equal(200);
      done();
    });
  });

  lab.test('GET', function (done) {
    var opts = {
      method: 'GET',
      url: '/users'
    };
    app.inject(opts, function (res) {
      Code.expect(res.statusCode).to.be.equal(200);
      Code.expect(res.result).contain('users');
      Code.expect(res.result.users).to.be.an.array();
      Code.expect(res.result.users[tester.id]).to.be.equal(tester.name);
      done();
    });
  });

  lab.test('GET users/{id}', function (done) {
    var opts = {
      method: 'GET',
      url   : '/users/' + tester.id
    };
    app.inject(opts, function (res) {
      Code.expect(res.statusCode).to.be.equal(200);
      Code.expect(res.result.user).to.be.equal(tester.name);
      done();
    });
  });

});

