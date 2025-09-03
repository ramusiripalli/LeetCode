/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let i=0;
    let j = 0;
    const map = new Map();
    let maxWS = 0;
    for(j=0;j<s.length; j++){
        
        if(map.has(s[j]) && map.get(s[j]) >= i){

            i = map.get(s[j]) + 1;
        }
        map.set(s[j],j);

        let currWS = j - i + 1;
        maxWS = Math.max(currWS, maxWS);
       
    }
     return maxWS;
};