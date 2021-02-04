const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else (console.log(`🛑🛑 Assertion Failed: ${actual} !== ${expected}`));
};

//Implement the function findKeyByValue which takes in an object and a value. 
// It should scan the object and return the first key which contains the given value. 
// If no key with that given value is found, then it should return undefined.

const findKeyByValue = function (passedObj, value) {
  // let matchedKey = ''
  const searchedKeys = Object.keys(passedObj)

  // console.log(searchedKeys)

  for (let key of searchedKeys) {
    // matchedKey = key
    // console.log(key)
    // console.log(value)

    // console.log(bestTVShowsByGenre[key]);

    if (passedObj[key] === value) {
      // console.log('hello')
      // console.log(key);
      return key
      
    };
  }
  return undefined;
  // return matchedKey
};


//Assertion TESTS
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
// console.log(bestTVShowsByGenre.sci_fi)
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);