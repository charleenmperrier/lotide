const eqArrays = function(array1, array2) {
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i ++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
};


const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log (`✅✅ Assertion Passed`)
  } else { console.log(`🛑🛑 Assertion Failed`)

  }
}
//test
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => should !PASS


//tests
// eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
// eqArrays(["1", "2", "3"], ["1", "2", 3])// => false






// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else (console.log(`🛑🛑 Assertion Failed: ${actual} !== ${expected}`));
// };
//test
// assertEqual(eqArrays([1, 2, 3], [1, 2, 4]), true); // => should !PASS


