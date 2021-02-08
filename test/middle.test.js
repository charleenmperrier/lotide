const assertArraysEqual = require('../assertArraysEqual')
const middle = require('../middle');


assertArraysEqual(middle([1]), [] ); // PASS
assertArraysEqual(middle([1, 2]), []); // PASS
assertArraysEqual(middle([1, 2]), [2]); // !PASS
assertArraysEqual(middle([1, 2, 3, 4, 5]), [2, 3]); // !PASS
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // PASS
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4, 5]); // !PASS
