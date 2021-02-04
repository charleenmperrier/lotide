
const assertArraysEqual = function(arr1, arr2) {
  if (letterPositions(arr1, arr2)) {
    console.log (`✅✅ Assertion Passed`)
  } else { console.log(`🛑🛑 Assertion Failed`)

  }
}


const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  let counter = 0;

 

 for(let letter of sentence) {

  
if (letter !== ' ') {
  let index = [];
  if (results[letter]) {
    results[letter].push(counter);
    counter ++
  } else {
    index.push(counter);
    results[letter] = index;
    counter ++
  }
}

 }
 return results;
}


assertArraysEqual(letterPositions("hello").e, [1]);



// console.log(letterPositions('lighthouse in the house'))




