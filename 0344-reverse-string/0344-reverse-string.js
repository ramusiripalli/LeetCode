/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let n = s.length;
    let mid = Math.floor(n/2);
    for(let i=0;i<mid;i++){
        let temp = s[n-i-1];
        s[n-i-1] = s[i];
        s[i] = temp;
    }
    return s;
};