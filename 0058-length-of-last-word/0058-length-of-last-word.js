/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trim();
    s = s.split(" ");
    let len = s.length;
    let res = s[len-1].length;
    return res;
};