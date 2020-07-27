
const eqArrays = function(array1, array2) {

  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;

};

const eqObjects = function(object1, object2) {

  const object1NumKeys = Object.keys(object1).length;
  const object2NumKeys = Object.keys(object2).length;

  if (object1NumKeys !== object2NumKeys) return false;

  for (let key in object1) {
    if (Array.isArray(object1[key]) && !eqArrays(object1[key], object2[key])) {
      return false;
    } else if (!Array.isArray(object1[key]) && object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;

};


const assertObjectsEqual = function(object1, object2) {

  const inspect = require('util').inspect;

  const areObjectsEqual = eqObjects(object1, object2);

  if (areObjectsEqual) {
    console.log(`🤑 Assertion Passed: ${inspect(object1)} equals ${inspect(object2)}`);
  } else {
    console.log(`🤮 Assertion Failed: ${inspect(object1)} does not equal ${inspect(object2)}`);
  }

};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

assertObjectsEqual(cd, dc);
assertObjectsEqual(cd, cd2);

module.exports = assertObjectsEqual;
