'use strict';

module.exports = function (request, reply) {
  reply({
    statusCode: 200,
    Hello: encodeURIComponent(request.params.name)
  });
};