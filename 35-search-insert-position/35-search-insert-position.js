/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function(nums, target) {
  if (nums.includes(target)) {
    return nums.indexOf(target);
  } else {
    nums.push(target);
    nums.sort((a, b) => {
      return a - b;
    });
    return (nums.indexOf(target));
    }

  }