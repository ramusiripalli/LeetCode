/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
    const map = new Map();
    let left = 0;
    let maxLength = 0;
    let currentWindowLength = 0;

    for(let right=0;right<s.length;right++){
        if(map.has(s[right]) && map.get(s[right]) >= left){
            left = map.get(s[right]) + 1;
        }

        map.set(s[right],right);
        currentWindowLength = right-left+1;
        maxLength = Math.max(maxLength,currentWindowLength);
    }

    return maxLength;

};