const assertEqual = function (actual, expected) {

  if (actual === expected) {
    console.log(`🤑 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤮 Assertion Failed: ${actual} !== ${expected}`);
  }

};


const head = function (array) {

  return array[0];

};

const tail = function (array) {

  return array.slice(1);

};

const words = ['yo yo', 'lighthouse', 'labs'];
console.log(tail(words));
assertEqual(words.length, 3);