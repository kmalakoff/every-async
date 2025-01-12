## every-async

Calls every callback and keeps calling while the return value is true.

```
var every = require('every-async');
var assert = require('assert');

function doSomething(callback) {
  callback(null, true)
}

function stopAfterThisOne(callback) {
  callback(null, true)
}

function neverReachHere(callback) {
  callback(null, true)
}

every([doSomething, stopAfterThisOne, neverReachHere], function(err, result) {
  assert.equal(result, false)
})

/* pass any number of arguments */

function doSomething2(arg1, arg2, callback) {
  callback(null, true)
}

function stopAfterThisOne2(arg1, arg2, callback) {
  callback(null, true)
}

function neverReachHere2(arg1, arg2, callback) {
  callback(null, true)
}

every([doSomething2, stopAfterThisOne2, neverReachHere2], 1, 2, function(err, result) {
  assert.equal(result, false)
})

```
