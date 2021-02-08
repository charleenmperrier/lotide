const assert = require('chai').assert;
// const assertArraysEqual = require('../assertArraysEqual')
const middle = require('../middle');




describe("#head", () => {
  it('should return [] from [1]', () => {
    assert.deepEqual(middle([1]), [])
  });

  it('should return [] from [1, 2]', () => {
    assert.deepEqual(middle([1, 2]), [])
  });

  it('should return [7] from [5, 6, 7, 8, 9]', () => {
    assert.deepEqual(middle([5, 6, 7, 8, 9]), [7])
  });

  it('should return [7, 8] from [5, 6, 7, 8, 9, 10]', () => {
    assert.deepEqual(middle([5, 6, 7, 8, 9, 10]), [7, 8])
  });

});






// assertArraysEqual(middle([1]), [] ); // PASS
// assertArraysEqual(middle([1, 2]), []); // PASS
// assertArraysEqual(middle([1, 2]), [2]); // !PASS
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [2, 3]); // !PASS
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // PASS
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4, 5]); // !PASS
