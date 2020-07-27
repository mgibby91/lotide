const eqObjects = require('../eqObjects');
const assert = require('chai').assert;

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

describe('#eqObjects', () => {
  it('should return true if both object are equal', () => {
    assert.deepEqual(eqObjects(ab, ba), true);
  });
  it('should return false if objects are not equal', () => {
    assert.deepEqual(eqObjects(ab, abc), false);
  });
  it('should return true if objects are equal and have nested objects', () => {
    assert.deepEqual(eqObjects({ a: { z: { z: 1 } }, b: 2 }, { a: { z: { z: 1 } }, b: 2 }), true);
  });
})





// assertEqual(eqObjects(ab, ba), true);
// assertEqual(eqObjects(ab, abc), false);

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// const cd2 = { c: "1", d: ["2", 3, 4] };

// assertEqual(eqObjects(cd, dc), true);
// assertEqual(eqObjects(cd, cd2), false);

// // Object comparison
// assertEqual(eqObjects({ a: { z: { z: 1 } }, b: 2 }, { a: { z: { z: 1 } }, b: 2 }), true);
// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);