const assertEqual = function (actual, expected) {

  if (actual === expected) {
    console.log(`🤑 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤮 Assertion Failed: ${actual} !== ${expected}`);
  }

};

const eqArrays = function (array1, array2) {

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


const eqObjects = function (object1, object2) {

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


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);

// Object comparison
assertEqual(eqObjects({ a: { z: { z: 1 } }, b: 2 }, { a: { z: { z: 1 } }, b: 2 }), true);
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);



