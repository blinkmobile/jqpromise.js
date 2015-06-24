'use strict';

// foreign modules

var $ = require('jquery') || global.$;

// this module

function JQPromise (exec) {
  var dfrd = new $.Deferred();
  exec(dfrd.resolve, dfrd.reject);
  return dfrd.promise();
}

module.exports = JQPromise;
