/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    const object = {};
    const result = [];
    
    nums.forEach((num, i) => {
        const another = target - num
        if(another in object) {
            result.push(object[another]);
            result.push(i);            
            
        } else {
            object[nums[i]] = i
        }
    } )
    
    return result;

}
