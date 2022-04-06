const round = function(number) {
  return Math.round(number * 100) / 100;
};

const findMedianSortedArrays = function(nums1, nums2) {
  let mergedArray = nums1.concat(nums2);
  


  const median = function(arr) {
    /* IMPLEMENT ME */
    arr.sort((a, b) => a - b);
    let median = 0;
    let arrLength = arr.length;
    let midLength = 0;
    midLength = arrLength / 2;
    if (arrLength % 2 !== 0) {
      rounded = Math.round(midLength);
      median = arr[rounded - 1];
      return median;
    } else if (arrLength % 2 === 0) {
      median = (arr[midLength - 1] + arr[midLength]) / 2;
      return round(median);
    }
  };

  const medValue = median(mergedArray);
  
  return medValue;
    
    
};