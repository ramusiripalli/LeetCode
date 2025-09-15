/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let balance = 0;
    let count = 0;
    for(let ch of s){
        if(ch === 'R'){
            ++balance;
        }
        else{
            --balance;
        }
        if(balance === 0){
            ++count;
        }
    }
    return count;
};