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
  if (eqArrays(arr1, arr2)) {
    console.log (`✅✅ Assertion Passed`)
  } else { console.log(`🛑🛑 Assertion Failed`)

  }
}


const middle = function(midArr) {
  let midNewArr = [];
  if (midArr.length <= 2) {
   
    return midNewArr;

  } else if (midArr.length % 2 === 0) {
    
    midNewArr.push(midArr[midArr.length / 2 - 1 ]); 
    midNewArr.push(midArr[midArr.length / 2 ]); // does it need | 0 ?
  } else if (midArr.length % 2 !== 0) {
    midNewArr.push(midArr[midArr.length / 2 | 0]);// Math.floor(midArr.length / 2);
    
  };
  // console.log(midNewArr)
  return midNewArr
  
};

//The middle function should return an array with only the middle element(s) 
//of the provided array. This means that the length of the returned 
//elements could vary.

//IF statments
//array with 2 >= elements - return empty
//array with add elements - 1 element returns
//arry with even elements - 2 elements return







//TESTS middle  and assertion
assertArraysEqual(middle([1]), [] );// => []
assertArraysEqual(middle([1, 2]), []); // => []
assertArraysEqual(middle([1, 2]), [2]); // => [2]
// middle([1, 2, 3, 4, 5]) // => [3]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);// => [2, 3]
// middle([1, 2, 3, 4, 5, 6]) // => [3, 4]







//TEST for assertion
// assertArraysEqual(["1", '2' "3"], ["1", "2", "3"]); // => should !PASS


//TESTS for eqArrays
// eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
// eqArrays(["1", "2", "3"], ["1", "2", 3])// => false

