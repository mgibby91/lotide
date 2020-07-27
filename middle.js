
// const eqArrays = function (array1, array2) {

//   if (array1.length !== array2.length) {
//     return false;
//   }

//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] !== array2[i]) {
//       return false;
//     }
//   }

//   return true;

// }

// const assertArraysEqual = function (array1, array2) {

//   const areArraysEqual = eqArrays(array1, array2);

//   if (areArraysEqual) {
//     console.log(`🤑 Assertion Passed: ${array1} equals ${array2}`);
//   } else {
//     console.log(`🤮 Assertion Failed: ${array1} does not equal ${array2}`);
//   }

// }

const middle = function(array) {

  if (array.length <= 2) return [];

  if (array.length % 2 !== 0) return [array[array.length / 2 - 0.5]];

  if (array.length % 2 === 0) return [array[array.length / 2 - 1], array[array.length / 2]];

}

module.exports = middle;

