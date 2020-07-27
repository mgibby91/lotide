

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


const assertArraysEqual = function(array1, array2) {

  const areArraysEqual = eqArrays(array1, array2);

  if (areArraysEqual) {
    console.log(`🤑 Assertion Passed: ${array1} equals ${array2}`);
  } else {
    console.log(`🤮 Assertion Failed: ${array1} does not equal ${array2}`);
  }

};



const letterPositions = function(sentence) {

  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {

      if (!results[sentence[i]]) {
        results[sentence[i]] = [i];
      } else {
        results[sentence[i]].push(i);
      }

    }
  }

  return results;

};

console.log(letterPositions('lighthouse in the house'));

assertArraysEqual(letterPositions("hello").e, [1]);


module.exports = letterPositions;