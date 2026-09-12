const assert = require('assert');
const every = require('every-async');

describe('exports .cjs', () => {
  it('default', () => {
    assert.equal(typeof every, 'function');
  });
});
