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
  assert.ok(!err);
  assert.equal(result, false)
})

```
