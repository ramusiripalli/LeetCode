/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x<2) return x;
    let left = 2;
    let right = Math.floor(x/2);
    while(left<=right){
        let mid = left + Math.floor((right-left)/2);
        if(mid * mid === x){
            return mid;
        }
        else if(x < mid * mid){
            right = mid - 1;
        }
        else{
            left = mid + 1;
        }
    }
    return right;
};