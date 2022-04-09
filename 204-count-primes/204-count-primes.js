/**
 * @param {number} n
 * @return {number}
 */



const countPrimes = function(n) {
  let unMarkedArray = Array(n).fill(0)
    let count = 0
    for (let i = 2; i <= n; i++){
      if (unMarkedArray[i] == 0) {
        count ++
        for(let j = i * i; j <= n + 1; j += i){
          unMarkedArray[j] = 1
            }
        }
    }
  return count
};

