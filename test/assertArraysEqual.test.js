const assertArraysEqual = require('../assertArraysEqual');

//test
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => should PASS
assertArraysEqual(["1", "2", "3"], ["1", "2", 5 ]); // => should !PASS
