var assert = require('assert');

var every = require('../..');

describe('every', function () {
  describe('process all', function () {
    var args = [];

    function doSomething() {
      args.push(Array.prototype.slice.call(arguments, 0));
      args[args.length - 1].pop()(null, true);
    }

    function thenThisOne() {
      args.push(Array.prototype.slice.call(arguments, 0));
      args[args.length - 1].pop()(null, true);
    }

    function finallyThisOne() {
      args.push(Array.prototype.slice.call(arguments, 0));
      args[args.length - 1].pop()(null, true);
    }

    it('0 arguments', function () {
      args = [];
      every([doSomething, thenThisOne, finallyThisOne], function (err, result) {
        assert.ok(!err);
        assert.equal(args.length, 3);
        args.forEach(function (params) {
          assert.deepEqual(params, []);
        });
      });
    });

    it('1 argument', function () {
      args = [];
      every([doSomething, thenThisOne, finallyThisOne], 1, function (err, result) {
        assert.ok(!err);
        assert.equal(args.length, 3);
        args.forEach(function (params) {
          assert.deepEqual(params, [1]);
        });
      });
    });

    it('2 arguments', function () {
      args = [];
      every([doSomething, thenThisOne, finallyThisOne], 1, 2, function (err, result) {
        assert.ok(!err);
        assert.equal(args.length, 3);
        args.forEach(function (params) {
          assert.deepEqual(params, [1, 2]);
        });
      });
    });

    it('3 arguments', function () {
      args = [];
      every([doSomething, thenThisOne, finallyThisOne], 1, 2, 3, function (err, result) {
        assert.ok(!err);
        assert.equal(args.length, 3);
        args.forEach(function (params) {
          assert.deepEqual(params, [1, 2, 3]);
        });
      });
    });

    it('4 arguments', function () {
      args = [];
      every([doSomething, thenThisOne, finallyThisOne], 1, 2, 3, 4, function (err, result) {
        assert.ok(!err);
        assert.equal(args.length, 3);
        args.forEach(function (params) {
          assert.deepEqual(params, [1, 2, 3, 4]);
        });
      });
    });

    it('5 arguments', function () {
      args = [];
      every([doSomething, thenThisOne, finallyThisOne], 1, 2, 3, 4, 5, function (err, result) {
        assert.ok(!err);
        assert.equal(args.length, 3);
        args.forEach(function (params) {
          assert.deepEqual(params, [1, 2, 3, 4, 5]);
        });
      });
    });
  });

  describe('stop after false', function () {
    var args = [];

    function doSomething() {
      args.push(Array.prototype.slice.call(arguments, 0));
      args[args.length - 1].pop()(null, true);
    }

    function stopAfterThisOne() {
      args.push(Array.prototype.slice.call(arguments, 0));
      args[args.length - 1].pop()(null, false);
    }

    function neverReachHere(callback) {
      args.push(Array.prototype.slice.call(arguments, 0));
      args[args.length - 1].pop()(null, true);
    }

    it('0 arguments', function () {
      args = [];
      every([doSomething, stopAfterThisOne, neverReachHere], function (err, result) {
        assert.ok(!err);
        assert.equal(args.length, 2);
        args.forEach(function (params) {
          assert.deepEqual(params, []);
        });
      });
    });

    it('1 arguments', function () {
      args = [];
      every([doSomething, stopAfterThisOne, neverReachHere], 1, function (err, result) {
        assert.ok(!err);
        assert.equal(args.length, 2);
        args.forEach(function (params) {
          assert.deepEqual(params, [1]);
        });
      });
    });

    it('2 arguments', function () {
      args = [];
      every([doSomething, stopAfterThisOne, neverReachHere], 1, 2, function (err, result) {
        assert.ok(!err);
        assert.equal(args.length, 2);
        args.forEach(function (params) {
          assert.deepEqual(params, [1, 2]);
        });
      });
    });

    it('3 arguments', function () {
      args = [];
      every([doSomething, stopAfterThisOne, neverReachHere], 1, 2, 3, function (err, result) {
        assert.ok(!err);
        assert.equal(args.length, 2);
        args.forEach(function (params) {
          assert.deepEqual(params, [1, 2, 3]);
        });
      });
    });

    it('4 arguments', function () {
      args = [];
      every([doSomething, stopAfterThisOne, neverReachHere], 1, 2, 3, 4, function (err, result) {
        assert.ok(!err);
        assert.equal(args.length, 2);
        args.forEach(function (params) {
          assert.deepEqual(params, [1, 2, 3, 4]);
        });
      });
    });

    it('5 arguments', function () {
      args = [];
      every([doSomething, stopAfterThisOne, neverReachHere], 1, 2, 3, 4, 5, function (err, result) {
        assert.ok(!err);
        assert.equal(args.length, 2);
        args.forEach(function (params) {
          assert.deepEqual(params, [1, 2, 3, 4, 5]);
        });
      });
    });
  });

  describe('stop after error', function () {
    var args = [];

    function doSomething() {
      args.push(Array.prototype.slice.call(arguments, 0));
      args[args.length - 1].pop()(null, true);
    }

    function stopAfterThisOne() {
      args.push(Array.prototype.slice.call(arguments, 0));
      args[args.length - 1].pop()(new Error('Failed'), true);
    }

    function neverReachHere(callback) {
      args.push(Array.prototype.slice.call(arguments, 0));
      args[args.length - 1].pop()(null, true);
    }

    it('0 arguments', function () {
      args = [];
      every([doSomething, stopAfterThisOne, neverReachHere], function (err, result) {
        assert.ok(err);
        assert.equal(args.length, 2);
        args.forEach(function (params) {
          assert.deepEqual(params, []);
        });
      });
    });

    it('1 arguments', function () {
      args = [];
      every([doSomething, stopAfterThisOne, neverReachHere], 1, function (err, result) {
        assert.ok(err);
        assert.equal(args.length, 2);
        args.forEach(function (params) {
          assert.deepEqual(params, [1]);
        });
      });
    });

    it('2 arguments', function () {
      args = [];
      every([doSomething, stopAfterThisOne, neverReachHere], 1, 2, function (err, result) {
        assert.ok(err);
        assert.equal(args.length, 2);
        args.forEach(function (params) {
          assert.deepEqual(params, [1, 2]);
        });
      });
    });

    it('3 arguments', function () {
      args = [];
      every([doSomething, stopAfterThisOne, neverReachHere], 1, 2, 3, function (err, result) {
        assert.ok(err);
        assert.equal(args.length, 2);
        args.forEach(function (params) {
          assert.deepEqual(params, [1, 2, 3]);
        });
      });
    });

    it('4 arguments', function () {
      args = [];
      every([doSomething, stopAfterThisOne, neverReachHere], 1, 2, 3, 4, function (err, result) {
        assert.ok(err);
        assert.equal(args.length, 2);
        args.forEach(function (params) {
          assert.deepEqual(params, [1, 2, 3, 4]);
        });
      });
    });

    it('5 arguments', function () {
      args = [];
      every([doSomething, stopAfterThisOne, neverReachHere], 1, 2, 3, 4, 5, function (err, result) {
        assert.ok(err);
        assert.equal(args.length, 2);
        args.forEach(function (params) {
          assert.deepEqual(params, [1, 2, 3, 4, 5]);
        });
      });
    });
  });
});
