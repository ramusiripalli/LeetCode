/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let i = j = 0;
    const map = {};
    let maxWS = 0;
    for(j=0;j<s.length;j++){
        if(map[s[j]] !== undefined && map[s[j]] >= i){
           i = map[s[j]] + 1;
        }
        map[s[j]] = j;
        currWS = j - i + 1;
        maxWS = Math.max(maxWS, currWS);

    }

    return maxWS;
};