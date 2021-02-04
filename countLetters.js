const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else (console.log(`🛑🛑 Assertion Failed: ${actual} !== ${expected}`));
};

const countLetter = function (sentence) {
  //take in sentance and return object that has a count for each letter
  //does not need to count spaces
  //can use for...of loops with strings
   const countObj = {};
   const trimmedSentence = sentence.replace(/\s/g, '');

   for( let index = 0; index <trimmedSentence.length; index++) {
   
    //  console.log(newString[i])
    const letter = trimmedSentence[index];

     if(countObj[letter]) {
      //  console.log(countObj)
      countObj[letter] += 1
     } else {
      //  console.log(trimmedSentence[i]);
       countObj[letter] = 1
     }
   }
   console.log(countObj)
  
};
const result1 = countLetters("lighthouse in the house");
assertEqual(result1["l"], 1);
assertEqual(result1["n"], 1);
// console.log(countLetters('This is a sentence'));
// assertEqual(countLetter('This is a sentence'));

//refactor