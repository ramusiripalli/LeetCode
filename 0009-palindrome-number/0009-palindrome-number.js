/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let dup = x;
    let rev = 0;
    while(x>0){
        let lastDigit = x %10;
        rev = rev*10 + lastDigit;
        x = Math.floor(x/10);
    }
    return rev === dup;
};