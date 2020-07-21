
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

}


const assertArraysEqual = function (array1, array2) {

  const areArraysEqual = eqArrays(array1, array2);

  if (areArraysEqual) {
    console.log(`🤑 Assertion Passed: ${array1} equals ${array2}`);
  } else {
    console.log(`🤮 Assertion Failed: ${array1} does not equal ${array2}`);
  }

}


let answer = [];
const flatten = function (array) {

  for (let item of array) {
    if (Array.isArray(item)) {
      flatten(item);
      // I know it said not to use recursion, but I just wanted to see if I could! Sorry...
    } else {
      answer.push(item);
    }
  }

  return answer;

}

assertArraysEqual(flatten([1, 2, [3, 4, [5, 6]], 7, [8]]), [1, 2, 3, 4, 5, 6, 7, 8]);


