const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else (console.log(`🛑🛑 Assertion Failed: ${actual} !== ${expected}`));
};




// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {

let newObj = {};

for (let name of allItems) {
 
  // console.log(name ,itemsToCount[name])

  if (itemsToCount[name]) {
// is this true
  if (newObj[name]) {
    // if true, and already in the obj-- add one more num to name
    newObj[name] += 1;
    // console.log(newObj)

  } else {
    //if true, but not in the newObj yet -- add name to object
    newObj[name] = 1;
  }

  }
  
}
// console.log(newObj)
return newObj;


}




const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);



// //EXAMPLE
// var planetMoons = {
//   mercury: 0,
//   venus: 0,
//   earth: 1,
//   mars: 2,
//   jupiter: 67,
//   saturn: 62,
//   uranus: 27,
//   neptune: 14
// };

// for (var planet in planetMoons) {
//   var numberOfMoons = planetMoons[planet];
//   console.log("Planet: " + planet + ", # of Moons: "+ numberOfMoons);
// }