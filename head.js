let head = function (arr, testValue) {
  let firstArr = arr[0]
  return firstArr
}


// console.log(head(["Hello", "Lighthouse", "Labs"]), "Hello")


// // FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅Assertion Passed: ${actual} === ${expected}`);
  } else (console.log(`🛑🛑Assertion Failed: ${actual} !== ${expected}`));
};

// TEST CODE
assertEqual(head([5]), 5);
assertEqual(head([]), "Hello");