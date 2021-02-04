const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅ assertEqual Assertion Passed: ${actual} === ${expected}`);
  } else (console.log(`🛑🛑 assertEqual Assertion Failed: ${actual} !== ${expected}`));
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

const eqObjects = function(object1, object2) {
  const objKeys1 = Object.keys(object1);
  const objKeys2 = Object.keys(object2);

  
  if (objKeys1.length !== objKeys2.length) {
    return false;
  }
  for (let key1 of objKeys1) {
    
    if (Array.isArray(object1[key1]) && Array.isArray(object2[key1])) {
      if (!eqArrays(object1[key1], object2[key1])) {
        // console.log('console')
        return false;
      }
    } else {
      if (object1[key1] !== object2[key1]) {
        // console.log(object1[key1], object2[key1])
        
        return false;
      }
    }
  }
  return true;
};
  
const cd = {
  c: "1",
  d: ["2", 3]
};
const dc = {
  d: ["2", 3],
  c: "1"
};
const cd2 = {
  c: "1",
  d: ["2", 3, 4]
};
assertEqual(eqObjects(cd, dc), true); // => true
assertEqual(eqObjects(cd, cd2), false); // => false



// const ab = {
//   b: "2",
//   a: "1" };
// const ba = {
//   b: "2",
//   a: "1" };
// const abc = {
//   a: "1",
//   b: "2",
//   c: "3" };
// assertEqual(eqObjects(ab, ba), true); // => true
// assertEqual(eqObjects(ab, abc), false); // => false

