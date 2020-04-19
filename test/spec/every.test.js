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

    it('0 arguments', function (done) {
      args = [];
      every([doSomething, thenThisOne, finallyThisOne], function (err, result) {
        assert.ok(!err);
        assert.equal(args.length, 3);
        args.forEach(function (params) {
          assert.deepEqual(params, []);
        });
        done();
      });
    });

    it('1 argument', function (done) {
      args = [];
      every([doSomething, thenThisOne, finallyThisOne], 1, function (err, result) {
        assert.ok(!err);
        assert.equal(args.length, 3);
        args.forEach(function (params) {
          assert.deepEqual(params, [1]);
        });
        done();
      });
    });

    it('2 arguments', function (done) {
      args = [];
      every([doSomething, thenThisOne, finallyThisOne], 1, 2, function (err, result) {
        assert.ok(!err);
        assert.equal(args.length, 3);
        args.forEach(function (params) {
          assert.deepEqual(params, [1, 2]);
        });
        done();
      });
    });

    it('3 arguments', function (done) {
      args = [];
      every([doSomething, thenThisOne, finallyThisOne], 1, 2, 3, function (err, result) {
        assert.ok(!err);
        assert.equal(args.length, 3);
        args.forEach(function (params) {
          assert.deepEqual(params, [1, 2, 3]);
        });
        done();
      });
    });

    it('4 arguments', function (done) {
      args = [];
      every([doSomething, thenThisOne, finallyThisOne], 1, 2, 3, 4, function (err, result) {
        assert.ok(!err);
        assert.equal(args.length, 3);
        args.forEach(function (params) {
          assert.deepEqual(params, [1, 2, 3, 4]);
        });
        done();
      });
    });

    it('5 arguments', function (done) {
      args = [];
      every([doSomething, thenThisOne, finallyThisOne], 1, 2, 3, 4, 5, function (err, result) {
        assert.ok(!err);
        assert.equal(args.length, 3);
        args.forEach(function (params) {
          assert.deepEqual(params, [1, 2, 3, 4, 5]);
        });
        done();
      });
    });

    it('6 arguments', function (done) {
      args = [];
      every([doSomething, thenThisOne, finallyThisOne], 1, 2, 3, 4, 5, 6, function (err, result) {
        assert.ok(!err);
        assert.equal(args.length, 3);
        args.forEach(function (params) {
          assert.deepEqual(params, [1, 2, 3, 4, 5, 6]);
        });
        done();
      });
    });

    it('7 arguments', function (done) {
      args = [];
      every([doSomething, thenThisOne, finallyThisOne], 1, 2, 3, 4, 5, 6, 7, function (err, result) {
        assert.ok(!err);
        assert.equal(args.length, 3);
        args.forEach(function (params) {
          assert.deepEqual(params, [1, 2, 3, 4, 5, 6, 7]);
        });
        done();
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

    it('0 arguments', function (done) {
      args = [];
      every([doSomething, stopAfterThisOne, neverReachHere], function (err, result) {
        assert.ok(!err);
        assert.equal(args.length, 2);
        args.forEach(function (params) {
          assert.deepEqual(params, []);
        });
        done();
      });
    });

    it('1 arguments', function (done) {
      args = [];
      every([doSomething, stopAfterThisOne, neverReachHere], 1, function (err, result) {
        assert.ok(!err);
        assert.equal(args.length, 2);
        args.forEach(function (params) {
          assert.deepEqual(params, [1]);
        });
        done();
      });
    });

    it('2 arguments', function (done) {
      args = [];
      every([doSomething, stopAfterThisOne, neverReachHere], 1, 2, function (err, result) {
        assert.ok(!err);
        assert.equal(args.length, 2);
        args.forEach(function (params) {
          assert.deepEqual(params, [1, 2]);
        });
        done();
      });
    });

    it('3 arguments', function (done) {
      args = [];
      every([doSomething, stopAfterThisOne, neverReachHere], 1, 2, 3, function (err, result) {
        assert.ok(!err);
        assert.equal(args.length, 2);
        args.forEach(function (params) {
          assert.deepEqual(params, [1, 2, 3]);
        });
        done();
      });
    });

    it('4 arguments', function (done) {
      args = [];
      every([doSomething, stopAfterThisOne, neverReachHere], 1, 2, 3, 4, function (err, result) {
        assert.ok(!err);
        assert.equal(args.length, 2);
        args.forEach(function (params) {
          assert.deepEqual(params, [1, 2, 3, 4]);
        });
        done();
      });
    });

    it('5 arguments', function (done) {
      args = [];
      every([doSomething, stopAfterThisOne, neverReachHere], 1, 2, 3, 4, 5, function (err, result) {
        assert.ok(!err);
        assert.equal(args.length, 2);
        args.forEach(function (params) {
          assert.deepEqual(params, [1, 2, 3, 4, 5]);
        });
        done();
      });
    });

    it('6 arguments', function (done) {
      args = [];
      every([doSomething, stopAfterThisOne, neverReachHere], 1, 2, 3, 4, 5, 6, function (err, result) {
        assert.ok(!err);
        assert.equal(args.length, 2);
        args.forEach(function (params) {
          assert.deepEqual(params, [1, 2, 3, 4, 5, 6]);
        });
        done();
      });
    });

    it('7 arguments', function (done) {
      args = [];
      every([doSomething, stopAfterThisOne, neverReachHere], 1, 2, 3, 4, 5, 6, 7, function (err, result) {
        assert.ok(!err);
        assert.equal(args.length, 2);
        args.forEach(function (params) {
          assert.deepEqual(params, [1, 2, 3, 4, 5, 6, 7]);
        });
        done();
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

    it('0 arguments', function (done) {
      args = [];
      every([doSomething, stopAfterThisOne, neverReachHere], function (err, result) {
        assert.ok(err);
        assert.equal(args.length, 2);
        args.forEach(function (params) {
          assert.deepEqual(params, []);
        });
        done();
      });
    });

    it('1 arguments', function (done) {
      args = [];
      every([doSomething, stopAfterThisOne, neverReachHere], 1, function (err, result) {
        assert.ok(err);
        assert.equal(args.length, 2);
        args.forEach(function (params) {
          assert.deepEqual(params, [1]);
        });
        done();
      });
    });

    it('2 arguments', function (done) {
      args = [];
      every([doSomething, stopAfterThisOne, neverReachHere], 1, 2, function (err, result) {
        assert.ok(err);
        assert.equal(args.length, 2);
        args.forEach(function (params) {
          assert.deepEqual(params, [1, 2]);
        });
        done();
      });
    });

    it('3 arguments', function (done) {
      args = [];
      every([doSomething, stopAfterThisOne, neverReachHere], 1, 2, 3, function (err, result) {
        assert.ok(err);
        assert.equal(args.length, 2);
        args.forEach(function (params) {
          assert.deepEqual(params, [1, 2, 3]);
        });
        done();
      });
    });

    it('4 arguments', function (done) {
      args = [];
      every([doSomething, stopAfterThisOne, neverReachHere], 1, 2, 3, 4, function (err, result) {
        assert.ok(err);
        assert.equal(args.length, 2);
        args.forEach(function (params) {
          assert.deepEqual(params, [1, 2, 3, 4]);
        });
        done();
      });
    });

    it('5 arguments', function (done) {
      args = [];
      every([doSomething, stopAfterThisOne, neverReachHere], 1, 2, 3, 4, 5, function (err, result) {
        assert.ok(err);
        assert.equal(args.length, 2);
        args.forEach(function (params) {
          assert.deepEqual(params, [1, 2, 3, 4, 5]);
        });
        done();
      });
    });

    it('6 arguments', function (done) {
      args = [];
      every([doSomething, stopAfterThisOne, neverReachHere], 1, 2, 3, 4, 5, 6, function (err, result) {
        assert.ok(err);
        assert.equal(args.length, 2);
        args.forEach(function (params) {
          assert.deepEqual(params, [1, 2, 3, 4, 5, 6]);
        });
        done();
      });
    });

    it('7 arguments', function (done) {
      args = [];
      every([doSomething, stopAfterThisOne, neverReachHere], 1, 2, 3, 4, 5, 6, 7, function (err, result) {
        assert.ok(err);
        assert.equal(args.length, 2);
        args.forEach(function (params) {
          assert.deepEqual(params, [1, 2, 3, 4, 5, 6, 7]);
        });
        done();
      });
    });
  });
});
