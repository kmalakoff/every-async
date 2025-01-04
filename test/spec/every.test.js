const assert = require('assert');

const every = require('every-async');

describe('every', () => {
  describe('process all', () => {
    let args = [];

    function doSomething() {
      // biome-ignore lint/style/noArguments: <explanation>
      args.push(Array.prototype.slice.call(arguments, 0));
      args[args.length - 1].pop()(null, true);
    }

    function thenThisOne() {
      // biome-ignore lint/style/noArguments: <explanation>
      args.push(Array.prototype.slice.call(arguments, 0));
      args[args.length - 1].pop()(null, true);
    }

    function finallyThisOne() {
      // biome-ignore lint/style/noArguments: <explanation>
      args.push(Array.prototype.slice.call(arguments, 0));
      args[args.length - 1].pop()(null, true);
    }

    it('0 arguments', (done) => {
      args = [];
      every([doSomething, thenThisOne, finallyThisOne], (err, _result) => {
        assert.ok(!err, err ? err.message : '');
        assert.equal(args.length, 3);
        args.forEach((params) => {
          assert.deepEqual(params, []);
        });
        done();
      });
    });

    it('1 argument', (done) => {
      args = [];
      every([doSomething, thenThisOne, finallyThisOne], 1, (err, _result) => {
        assert.ok(!err, err ? err.message : '');
        assert.equal(args.length, 3);

        args.forEach((params) => {
          assert.deepEqual(params, [1]);
        });
        done();
      });
    });

    it('2 arguments', (done) => {
      args = [];
      every([doSomething, thenThisOne, finallyThisOne], 1, 2, (err, _result) => {
        assert.ok(!err, err ? err.message : '');
        assert.equal(args.length, 3);

        args.forEach((params) => {
          assert.deepEqual(params, [1, 2]);
        });
        done();
      });
    });

    it('3 arguments', (done) => {
      args = [];
      every([doSomething, thenThisOne, finallyThisOne], 1, 2, 3, (err, _result) => {
        assert.ok(!err, err ? err.message : '');
        assert.equal(args.length, 3);

        args.forEach((params) => {
          assert.deepEqual(params, [1, 2, 3]);
        });
        done();
      });
    });

    it('4 arguments', (done) => {
      args = [];
      every([doSomething, thenThisOne, finallyThisOne], 1, 2, 3, 4, (err, _result) => {
        assert.ok(!err, err ? err.message : '');
        assert.equal(args.length, 3);

        args.forEach((params) => {
          assert.deepEqual(params, [1, 2, 3, 4]);
        });
        done();
      });
    });

    it('5 arguments', (done) => {
      args = [];
      every([doSomething, thenThisOne, finallyThisOne], 1, 2, 3, 4, 5, (err, _result) => {
        assert.ok(!err, err ? err.message : '');
        assert.equal(args.length, 3);

        args.forEach((params) => {
          assert.deepEqual(params, [1, 2, 3, 4, 5]);
        });
        done();
      });
    });

    it('6 arguments', (done) => {
      args = [];
      every([doSomething, thenThisOne, finallyThisOne], 1, 2, 3, 4, 5, 6, (err, _result) => {
        assert.ok(!err, err ? err.message : '');
        assert.equal(args.length, 3);

        args.forEach((params) => {
          assert.deepEqual(params, [1, 2, 3, 4, 5, 6]);
        });
        done();
      });
    });

    it('7 arguments', (done) => {
      args = [];
      every([doSomething, thenThisOne, finallyThisOne], 1, 2, 3, 4, 5, 6, 7, (err, _result) => {
        assert.ok(!err, err ? err.message : '');
        assert.equal(args.length, 3);

        args.forEach((params) => {
          assert.deepEqual(params, [1, 2, 3, 4, 5, 6, 7]);
        });
        done();
      });
    });
  });

  describe('stop after false', () => {
    let args = [];

    function doSomething() {
      // biome-ignore lint/style/noArguments: <explanation>
      args.push(Array.prototype.slice.call(arguments, 0));
      args[args.length - 1].pop()(null, true);
    }

    function stopAfterThisOne() {
      // biome-ignore lint/style/noArguments: <explanation>
      args.push(Array.prototype.slice.call(arguments, 0));
      args[args.length - 1].pop()(null, false);
    }

    function neverReachHere(_callback) {
      // biome-ignore lint/style/noArguments: <explanation>
      args.push(Array.prototype.slice.call(arguments, 0));
      args[args.length - 1].pop()(null, true);
    }

    it('0 arguments', (done) => {
      args = [];
      every([doSomething, stopAfterThisOne, neverReachHere], (err, _result) => {
        assert.ok(!err, err ? err.message : '');
        assert.equal(args.length, 2);

        args.forEach((params) => {
          assert.deepEqual(params, []);
        });
        done();
      });
    });

    it('1 arguments', (done) => {
      args = [];
      every([doSomething, stopAfterThisOne, neverReachHere], 1, (err, _result) => {
        assert.ok(!err, err ? err.message : '');
        assert.equal(args.length, 2);

        args.forEach((params) => {
          assert.deepEqual(params, [1]);
        });
        done();
      });
    });

    it('2 arguments', (done) => {
      args = [];
      every([doSomething, stopAfterThisOne, neverReachHere], 1, 2, (err, _result) => {
        assert.ok(!err, err ? err.message : '');
        assert.equal(args.length, 2);

        args.forEach((params) => {
          assert.deepEqual(params, [1, 2]);
        });
        done();
      });
    });

    it('3 arguments', (done) => {
      args = [];
      every([doSomething, stopAfterThisOne, neverReachHere], 1, 2, 3, (err, _result) => {
        assert.ok(!err, err ? err.message : '');
        assert.equal(args.length, 2);

        args.forEach((params) => {
          assert.deepEqual(params, [1, 2, 3]);
        });
        done();
      });
    });

    it('4 arguments', (done) => {
      args = [];
      every([doSomething, stopAfterThisOne, neverReachHere], 1, 2, 3, 4, (err, _result) => {
        assert.ok(!err, err ? err.message : '');
        assert.equal(args.length, 2);

        args.forEach((params) => {
          assert.deepEqual(params, [1, 2, 3, 4]);
        });
        done();
      });
    });

    it('5 arguments', (done) => {
      args = [];
      every([doSomething, stopAfterThisOne, neverReachHere], 1, 2, 3, 4, 5, (err, _result) => {
        assert.ok(!err, err ? err.message : '');
        assert.equal(args.length, 2);

        args.forEach((params) => {
          assert.deepEqual(params, [1, 2, 3, 4, 5]);
        });
        done();
      });
    });

    it('6 arguments', (done) => {
      args = [];
      every([doSomething, stopAfterThisOne, neverReachHere], 1, 2, 3, 4, 5, 6, (err, _result) => {
        assert.ok(!err, err ? err.message : '');
        assert.equal(args.length, 2);

        args.forEach((params) => {
          assert.deepEqual(params, [1, 2, 3, 4, 5, 6]);
        });
        done();
      });
    });

    it('7 arguments', (done) => {
      args = [];
      every([doSomething, stopAfterThisOne, neverReachHere], 1, 2, 3, 4, 5, 6, 7, (err, _result) => {
        assert.ok(!err, err ? err.message : '');
        assert.equal(args.length, 2);

        args.forEach((params) => {
          assert.deepEqual(params, [1, 2, 3, 4, 5, 6, 7]);
        });
        done();
      });
    });
  });

  describe('stop after error', () => {
    let args = [];

    function doSomething() {
      // biome-ignore lint/style/noArguments: <explanation>
      args.push(Array.prototype.slice.call(arguments, 0));
      args[args.length - 1].pop()(null, true);
    }

    function stopAfterThisOne() {
      // biome-ignore lint/style/noArguments: <explanation>
      args.push(Array.prototype.slice.call(arguments, 0));
      args[args.length - 1].pop()(new Error('Failed'), true);
    }

    function neverReachHere(_callback) {
      // biome-ignore lint/style/noArguments: <explanation>
      args.push(Array.prototype.slice.call(arguments, 0));
      args[args.length - 1].pop()(null, true);
    }

    it('0 arguments', (done) => {
      args = [];
      every([doSomething, stopAfterThisOne, neverReachHere], (err, _result) => {
        assert.ok(err);
        assert.equal(args.length, 2);

        args.forEach((params) => {
          assert.deepEqual(params, []);
        });
        done();
      });
    });

    it('1 arguments', (done) => {
      args = [];
      every([doSomething, stopAfterThisOne, neverReachHere], 1, (err, _result) => {
        assert.ok(err);
        assert.equal(args.length, 2);

        args.forEach((params) => {
          assert.deepEqual(params, [1]);
        });
        done();
      });
    });

    it('2 arguments', (done) => {
      args = [];
      every([doSomething, stopAfterThisOne, neverReachHere], 1, 2, (err, _result) => {
        assert.ok(err);
        assert.equal(args.length, 2);

        args.forEach((params) => {
          assert.deepEqual(params, [1, 2]);
        });
        done();
      });
    });

    it('3 arguments', (done) => {
      args = [];
      every([doSomething, stopAfterThisOne, neverReachHere], 1, 2, 3, (err, _result) => {
        assert.ok(err);
        assert.equal(args.length, 2);

        args.forEach((params) => {
          assert.deepEqual(params, [1, 2, 3]);
        });
        done();
      });
    });

    it('4 arguments', (done) => {
      args = [];
      every([doSomething, stopAfterThisOne, neverReachHere], 1, 2, 3, 4, (err, _result) => {
        assert.ok(err);
        assert.equal(args.length, 2);

        args.forEach((params) => {
          assert.deepEqual(params, [1, 2, 3, 4]);
        });
        done();
      });
    });

    it('5 arguments', (done) => {
      args = [];
      every([doSomething, stopAfterThisOne, neverReachHere], 1, 2, 3, 4, 5, (err, _result) => {
        assert.ok(err);
        assert.equal(args.length, 2);

        args.forEach((params) => {
          assert.deepEqual(params, [1, 2, 3, 4, 5]);
        });
        done();
      });
    });

    it('6 arguments', (done) => {
      args = [];
      every([doSomething, stopAfterThisOne, neverReachHere], 1, 2, 3, 4, 5, 6, (err, _result) => {
        assert.ok(err);
        assert.equal(args.length, 2);

        args.forEach((params) => {
          assert.deepEqual(params, [1, 2, 3, 4, 5, 6]);
        });
        done();
      });
    });

    it('7 arguments', (done) => {
      args = [];
      every([doSomething, stopAfterThisOne, neverReachHere], 1, 2, 3, 4, 5, 6, 7, (err, _result) => {
        assert.ok(err);
        assert.equal(args.length, 2);

        args.forEach((params) => {
          assert.deepEqual(params, [1, 2, 3, 4, 5, 6, 7]);
        });
        done();
      });
    });
  });
});
