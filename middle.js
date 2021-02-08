const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const middle = function(midArr) {
  let midNewArr = [];
  if (midArr.length <= 2) {
   
    return midNewArr;

  } else if (midArr.length % 2 === 0) {
    
    midNewArr.push(midArr[midArr.length / 2 - 1 ]); 
    midNewArr.push(midArr[midArr.length / 2 ]); 
  } else if (midArr.length % 2 !== 0) {
    midNewArr.push(midArr[midArr.length / 2 | 0]);
  };
  return midNewArr
};


module.exports = middle;