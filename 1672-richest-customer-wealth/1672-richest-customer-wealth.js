/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let sum = 0;
    let totalArray = []; 
    
    accounts.forEach((account) => {
        totalArray.push(account.reduce((p, c) => p +c , 0));
    })
    
    let result = totalArray.reduce((p, c) => (p > c) ? p : c);
    return result;
    
};