var assert = require('assert');

var every = require('../..');

describe('every', function () {
  it('process all', function () {
    var counter = 0;

    function doSomething(callback) {
      counter++;
      callback(null, true);
    }

    function thenThisOne(callback) {
      counter++;
      callback(null, true);
    }

    function finallyThisOne(callback) {
      counter++;
      callback(null, true);
    }

    every(doSomething, thenThisOne, finallyThisOne, function (err, result) {
      assert.ok(!err);
      assert.equal(result, true);
      assert.equal(counter, 3);
    });
  });

  it('stop after false', function () {
    var counter = 0;

    function doSomething(callback) {
      counter++;
      callback(null, true);
    }

    function stopAfterThisOne(callback) {
      counter++;
      callback(null, false);
    }

    function neverReachHere(callback) {
      counter++;
      callback(null, true);
    }

    every(doSomething, stopAfterThisOne, neverReachHere, function (err, result) {
      assert.ok(!err);
      assert.equal(result, false);
      assert.equal(counter, 2);
    });
  });
});
