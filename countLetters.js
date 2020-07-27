const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`🤑 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤮 Assertion Failed: ${actual} !== ${expected}`);
  }

};


const countLetters = function(string) {

  let answer = {};

  for (let char of string) {
    if (char !== ' ') {
      if (answer[char]) {
        answer[char] += 1;
      } else {
        answer[char] = 1;
      }
    }
  }

  return answer;

}

console.log(countLetters('lighthouse in the house'));

module.exports = countLetters;