const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else (console.log(`🛑🛑 Assertion Failed: ${actual} !== ${expected}`));
};

const eqObjects = function(object1, object2) {
  const objKeys1 = Object.keys(object1);
  const objKeys2 = Object.keys(object2);

  // console.log(objKeys1, objKeys2)

  if (objKeys1.length === objKeys2.length) {
      // console.log('same length');
    for (let key1 of objKeys1) {

      //tried usig 2 for loops, but this was unessary in the end
      // for (let i = 0; i < objKeys1.length; i++) {
        // console.log(key1, key2)
        // if ((key1 === key2)) {
        //   console.log('matched keys')
          if (object1[key1] !== object2[key1]) {
            console.log('matched values')
            return false
          } 
    }
  
      return true
    // } 
    return false
  }
}
 

const ab = { 
  b: "2", 
  a: "1" };
const ba = { 
  b: "2", 
  a: "1" };
const abc = { 
  a: "1", 
  b: "2", 
  c: "3" };
assertEqual(eqObjects(ab, ba), true); // => true
assertEqual(eqObjects(ab, abc), false); // => false