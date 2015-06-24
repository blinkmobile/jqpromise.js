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

test('new JQPromise(); #resolve()', function (t) {
  var jqp;

  t.test('create a new JQPromise', function (tt) {
    jqp = new JQPromise(function (resolve) {
      setTimeout(function () {
        resolve();
        tt.end();
      }, 0);
    });
  });

  t.test('#then(...)', function (tt) {
    jqp.then(function () {
      tt.lengthOf(arguments, 0);
      tt.end();
    }, function (err) {
      tt.error(err);
      tt.end();
    });
  });

  t.end();
});

test('new JQPromise(); #resolve("abc")', function (t) {
  var jqp;

  t.test('create a new JQPromise', function (tt) {
    jqp = new JQPromise(function (resolve) {
      setTimeout(function () {
        resolve('abc');
        tt.end();
      }, 0);
    });
  });

  t.test('#then(...)', function (tt) {
    jqp.then(function (result) {
      tt.equal(result, 'abc');
      tt.end();
    }, function (err) {
      tt.error(err);
      tt.end();
    });
  });

  t.end();
});

test('new JQPromise(); #reject(new Error("abc"))', function (t) {
  var jqp;

  t.test('create a new JQPromise', function (tt) {
    jqp = new JQPromise(function (resolve, reject) {
      setTimeout(function () {
        reject(new Error('abc'));
        tt.end();
      }, 0);
    });
  });

  t.test('#then(...)', function (tt) {
    jqp.then(function () {
      tt.ok(false, 'resolve handler should not execute');
      tt.end();
    }, function (err) {
      tt.ok(err);
      tt.end();
    });
  });

  t.end();
});
