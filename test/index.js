'use strict';

// foreign modules

var test = require('tape');

// local modules

var JQPromise = require('..');

// this module

require('tape-chai');

test('JQPromise', function (t) {

  t.test('is a function', function (tt) {
    tt.isFunction(JQPromise);
    tt.end();
  });

  t.end();
});
