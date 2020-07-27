// const assertEqual = function(actual, expected) {

//   if (actual === expected) {
//     console.log(`🤑 Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🤮 Assertion Failed: ${actual} !== ${expected}`);
//   }

// };

// const eqArrays = function(array1, array2) {

//   if (array1.length !== array2.length) {
//     return false;
//   }

//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] !== array2[i]) {
//       return false;
//     }
//   }

//   return true;

// };


const eqObjects = function(object1, object2) {

  const object1NumKeys = Object.keys(object1).length;
  const object2NumKeys = Object.keys(object2).length;

  if (object1NumKeys !== object2NumKeys) return false;

  for (let key in object1) {
    if (object1[key] instanceof Object && !(object1[key] instanceof Array)) {
      eqObjects(object1[key], object2[key]);
    } else if (Array.isArray(object1[key]) && !eqArrays(object1[key], object2[key])) {
      return false;
    } else if (!Array.isArray(object1[key]) && object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;

};




module.exports = eqObjects;

