
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

const obj1 = {
  a: 1,
  b: 2
};
const obj2 = {
  a: 1,
  b: 2,
  c: 3
};
const obj3 = {
  a: 1,
  b: 2
}

// eqObjects(obj1, obj2);


// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require('util').inspect;
  
  if(eqObjects(actual, expected)) {
    console.log(`✅✅ Assertion Passed: ${inspect(actual)} ${inspect(expected)}`);
  } else { console.log(`🛑🛑 Assertion Failed:  ${inspect(actual)} ${inspect(expected)}`)

  }
};
assertObjectsEqual(obj1, obj2);

