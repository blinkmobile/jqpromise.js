'use strict';

function JQPromise (exec) {
  var dfrd = new (global.$ || require('jquery')).Deferred();
  exec(dfrd.resolve, dfrd.reject);
  return dfrd.promise();
}

module.exports = JQPromise;
