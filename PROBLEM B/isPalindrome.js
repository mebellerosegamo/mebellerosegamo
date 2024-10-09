// palindromeNumber.js
function isPalindrome(x) {
    if (x < 0) {
      return false;
    }
    let originalX = x;
    let reversedX = 0;
    while (x > 0) {
      let digit = x % 10;
      reversedX = reversedX * 10 + digit;
      x = Math.floor(x / 10);
    }
    return originalX === reversedX;
  }
  
  module.exports = isPalindrome;