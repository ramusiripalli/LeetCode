/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let reverse = 0;
    let xCopy = x;
    x = Math.abs(x);
    while(x>0){
        let lastDigit = x % 10;
        reverse = reverse * 10 + lastDigit;
        x = Math.floor(x/10);
    }
    let limit = Math.pow(2,31);
    if(reverse > limit-1 || reverse < -limit){
        return 0;
    }

    return (xCopy > 0) ? reverse : -reverse;
};