// const assertEqual = function (actual, expected) {

//   if (actual === expected) {
//     console.log(`🤑 Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🤮 Assertion Failed: ${actual} !== ${expected}`);
//   }

// };


// const head = function (array) {

//   return array[0];

// };

const tail = function(array) {

  return array.slice(1);

};

console.log(tail([1]));

module.exports = tail;