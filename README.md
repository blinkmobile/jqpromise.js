# jqpromise.js

wrap jQuery.Deferred to make it more like native Promises

[![npm module](https://img.shields.io/npm/v/@blinkmobile/jqpromise.svg)](https://www.npmjs.com/package/@blinkmobile/jqpromise)
[![travis-ci](https://img.shields.io/travis/blinkmobile/jqpromise.js.svg)](https://travis-ci.org/blinkmobile/jqpromise.js)

## What is this?

This is handy for older projects that still have jQuery. Why load a separate
Promises poly-fill when there's a "good enough" implementation buried in jQuery?

This wrapper exports a new constructor that internally uses $.Deferred. The
difference is the argument is the same sort of callback that native Promises
uses, instead of the $.Deferred argument.

## Usage

```js
// $.Deferred
var dfrd = new $.Deferred(function (d) {
  setTimeout(function () {
    d.resolve(); // or d.reject();
  }, 0);
});

// native Promise
var promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(); // or reject();
  }, 0);
});

// JQPromise
var jqp = new JQPromise(function (resolve, reject) {
  setTimeout(function () {
    resolve(); // or reject();
  }, 0);
});

// native Promise falling back to JQPromise
var P = window.Promise || window.JQPromise;
var p = new P(function (resolve, reject) {
  setTimeout(function () {
    resolve(); // or reject();
  }, 0);
});
```
