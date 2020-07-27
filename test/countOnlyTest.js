const countOnly = require('../countOnly');
const assert = require('chai').assert;

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

describe('#countOnly', () => {
  it('should return 1 when given ["Jason"]', () => {
    assert.equal(result1["Jason"], 1);
  })
  it('should return undefined when given ["Karima"]', () => {
    assert.equal(result1["Karima"], undefined);
  })
  it('should return 2 when given ["Fang"]', () => {
    assert.equal(result1["Fang"], 2);
  })
})




// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);