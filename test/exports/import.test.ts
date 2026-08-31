import assert from 'assert';
import every from 'every-async';

describe('exports .ts', () => {
  it('default', () => {
    assert.equal(typeof every, 'function');
  });
});
