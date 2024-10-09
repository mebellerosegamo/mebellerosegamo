const mathUtils = require('../mathUtils');

describe('Longest Common Prefix', () => {
  test('should return "fl" for ["flower", "flow", "flight"]', () => {
    expect(mathUtils(["flower", "flow", "flight"])).toBe("fl");
  });

  test('should return "" for ["dog", "racecar", "car"]', () => {
    expect(mathUtils(["dog", "racecar", "car"])).toBe("");
  });

  test('should return "" for an empty array', () => {
    expect(mathUtils([])).toBe("");
  });

});