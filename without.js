

//function to remove items from arrays to make them equal
//loop through source
  //compare sorce elements against itemsToRemove elements
//if they equal, then remove from array


const without = function(source, itemsToRemove) {
let newArr = []
for (let i = 0; i < source.length; i++) {
  let shouldRemove = false;
  for (let j = 0; j < itemsToRemove.length; j++) {
    if (source[i] === itemsToRemove[j]) {
     shouldRemove = true;
    }
  }
  if (shouldRemove === false) {
    newArr.push(source[i]) 
  }
} 
console.log(newArr)
return newArr
};
//TESTS for without
// without([1, 2, 3], [1]) // => [2, 3]
// without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]




// //Assertion Check
// const assertArraysEqual = function(arr1, arr2) {
//   if (without(arr1, arr2)) {
//     console.log (`✅✅ Assertion Passed`)
//   } else { console.log(`🛑🛑 Assertion Failed`)

//   }
// }

//TEST assertion
// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);





// //function to see if 2 arrays are equal
// const eqArrays = function(array1, array2) {
//   if (array1.length === array2.length) {
//     for (let i = 0; i < array1.length; i ++) {
//       if (array1[i] !== array2[i]) {
//         return false;
//       }
//     }
//   } else {
//     return false;
//   }
//   return true;
// };





