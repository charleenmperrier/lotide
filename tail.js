






const tail = function(arr) {
  let newArr = arr.slice(1);
  return newArr;
};
console.log(tail([1, 2, 3, 4]));



// // FUNCTION IMPLEMENTATION
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅Assertion Passed: ${actual} === ${expected}`);
//   } else (console.log(`🛑🛑Assertion Failed: ${actual} !== ${expected}`));
// };

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); 









// // TEST CODE
// assertEqual(5, 6);
// assertEqual("1", "1");