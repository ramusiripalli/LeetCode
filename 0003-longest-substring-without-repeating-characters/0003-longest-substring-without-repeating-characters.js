/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
        const map = new Map();
        let currWindow = 0;
        let maxWindow=0;
        let left = 0;
        for(let right=0;right<s.length;right++){
            if(map.has(s[right]) && map.get(s[right]) >= left){
                left = map.get(s[right]) + 1;
            }

            map.set(s[right],right);
            currWindow = right-left+1;
            maxWindow = Math.max(currWindow,maxWindow);
        }
        return maxWindow;
    };
