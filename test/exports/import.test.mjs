import assert from 'assert';
import every from 'every-async';

describe('exports .mjs', () => {
  it('default', () => {
    assert.equal(typeof every, 'function');
  });
});
