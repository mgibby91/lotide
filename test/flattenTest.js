
const flatten = require('../flatten');
const assert = require('chai').assert;


describe('#flatten', () => {
  it('should return a flat array when given an array of nested arrays', () => {
    assert.deepEqual(flatten([1, 2, [3, 4, [5, 6]], 7, [8]]), [1, 2, 3, 4, 5, 6, 7, 8]);
  })
})


// assertArraysEqual(flatten([1, 2, [3, 4, [5, 6]], 7, [8]]), [1, 2, 3, 4, 5, 6, 7, 8]);