/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
  let reverse = String(x).split("").reverse().join("");
  console.log(reverse);
  let number =Number(reverse)

  return number === x;
  
};