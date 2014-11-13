var opts = {
  opsInterval: 1000,
  reporters: [{
    reporter: require('good-console'),
    args:[{ request: '*', log: '*', error: '*', ops: '*'}]
  }, {
    reporter: require('good-file'),
    args: ['./log/access-log', { request: '*', log: '*'}]
  }, {
    reporter: require('good-file'),
    args: ['./log/error-log', { error: '*' }]
  }
  ]
}

module.exports = function(server) {
  server.pack.register({
    plugin: require('good'),
    options: opts
  }, function (err) {
    if (err) {
      throw err;
    }
  });
};
