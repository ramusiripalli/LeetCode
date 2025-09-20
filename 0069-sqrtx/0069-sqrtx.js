/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let result = 1;
    if(x < 2) return x;
    for(let i=2;i*i<= x;i++){
        result = i;
    }
    return result;
};