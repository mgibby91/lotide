
// const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe('#eqArrays', () => {
  it('should return true if arrays are equal and not nested', () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it('should return flase if arrays are not equal and not nested', () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2]), false);
  });
  it('should return true if arrays are equal and nested', () => {
    assert.deepEqual(eqArrays([1, 2, [3]], [1, 2, [3]]), true);
  });
})



// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
// assertEqual(eqArrays(['1', '2', '3'], ['1', '2', '3']), true);
// assertEqual(eqArrays(['1', '2', '3'], ['1', '2', 3]), false);

// assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true); // => true
// assertEqual(eqArrays([[2, 3[4, 4]], [5, 4]], [[2, 3[4, 4]], [5, 5]]), false); // => false
// assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true); // => false