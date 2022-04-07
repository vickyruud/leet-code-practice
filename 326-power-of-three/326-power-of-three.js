/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfThree = function (n) {

  if (n === 0) {
    return false;
  }
  while (n !== 1) {
    let value = n / 3
      if (value % 3 !== 0 && value !== 1) {
    return false;  
    } 
    n = value;
  }
  return true;

};