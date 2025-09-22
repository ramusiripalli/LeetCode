/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x < 2) return x;
    let result = 1;
    for(let i=0;i*i<=x;i++){
        result = i;
    }
    return result;
};