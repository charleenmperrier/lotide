// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅Assertion Passed: " + actual + " === " + expected);
  } else (console.log("🛑🛑Assertion Failed: " + actual + " !== " + expected));
};

// TEST CODE
assertEqual(5, 6);
assertEqual("1", "1");