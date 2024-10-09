// romanToInt.js
const romanMap = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  };
  
  function romanToInt(s) {
    let result = 0;
    for (let i = 0; i < s.length; i++) {
      const currentSymbol = s[i];
      const nextSymbol = s[i + 1];
      if (romanMap[currentSymbol] < romanMap[nextSymbol]) {
        result += romanMap[nextSymbol] - romanMap[currentSymbol];
        i++; // Skip the next symbol
      } else {
        result += romanMap[currentSymbol];
      }
    }
    return result;
  }
  
  module.exports = romanToInt;