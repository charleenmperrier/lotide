const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log (`✅✅ Assertion Passed`)
  } else { console.log(`🛑🛑 Assertion Failed`)

  }
};

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



const words = ["ground", "control", "to", "major", "tom"];



const map = function(array, callback){
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
const results1 = map(words, word => word[0]);
// console.log(results1);



assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ])

// assertArraysEqual(words, words.map)
// assertArraysEqual([ 'g', 'c', 't', 'm', 't' ], words.map)