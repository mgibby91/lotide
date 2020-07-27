
const letterPositions = require('../letterPositions');
const assert = require('chai').assert;

describe('#letterPositions', () => {
  it('should return index of string when given the character', () => {
    assert.deepEqual(letterPositions('hello').e, [1]);
  });
});


// assertArraysEqual(letterPositions("hello").e, [1]);