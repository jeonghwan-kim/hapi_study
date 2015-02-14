'use strict';

var fs = require('fs');
var path = require('path');


exports.route = function(server, _path) {

  if (!server || !_path) {
    throw Error();
  }

  fs.readdirSync(_path).forEach(function (dir) {

    // Ignore files. Only folders
    if (/.js/.test(dir)) return;

    require(path.resolve(_path,  dir))(server);
  });

};
