

//Implement a function eqArrays which takes in two arrays and returns 
// true or false, based on a perfect match.



//FIRST ATTEMPT

// const eqArrays = function(arr1, arr2) {
// let newArr1 = 0;
// let newArr2 = 0;

//   for (let i = 0; i <= arr1.length; i++) {
//     newArr1 += arr1[i];
//     console.log(newArr1)
//   }
//   for (let j = 0; j <= arr2.length; j++) {
    
//     newArr2 += arr2[j];
//     console.log(newArr2)
//   }
  
//   if (newArr1 === newArr2) {
//     return true
//   } else {
//     return false
//   }


//   return newArr1;
//   return newArr2;
// }



//ATTEMP WITH DESK MATES
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

eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3])// => false


// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else (console.log(`🛑🛑 Assertion Failed: ${actual} !== ${expected}`));
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 4]), true); // => should !PASS

