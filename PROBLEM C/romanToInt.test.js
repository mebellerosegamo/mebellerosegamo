const romanToInt = require('./romanToInt');

describe('romanToInt', () => {
  it('should return 3 for "III"', () => {
    expect(romanToInt('III')).toBe(3);
  });

  it('should return 58 for "LVIII"', () => {
    expect(romanToInt('LVIII')).toBe(58);
  });

  it('should return 1994 for "MCMXCIV"', () => {
    expect(romanToInt('MCMXCIV')).toBe(1994);
  });

  it('should return "Contains invalid character." for "ZIV"', () => {
    expect(romanToInt('ZIV')).toBe('Contains invalid character.');

 });

});