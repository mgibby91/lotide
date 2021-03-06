// const assertEqual = function (actual, expected) {

//   if (actual === expected) {
//     console.log(`🤑 Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🤮 Assertion Failed: ${actual} !== ${expected}`);
//   }

// };


const eqArrays = function(array1, array2) {

  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (Array.isArray(array1[i]) && Array.isArray(array2[i]) && eqArrays(array1[i], array2[i])) {
      continue;
    } else if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;

};

module.exports = eqArrays;




