# every-async

Calls every callback and keeps calling while the return value is true.

```bash
npm install every-async
```js

```
var every = require('every-async');
var assert = require('assert');

function doSomething(callback) {
  callback(null, true)
}

function stopAfterThisOne(callback) {
  callback(null, false)
}

function neverReachHere(callback) {
  callback(null, true)
}

every([doSomething, stopAfterThisOne, neverReachHere], function(err, result) {
  assert.equal(result, false)
})
```

Arguments between the callback array and final callback are passed to every
function. The sequence stops on the first error or falsy result.
