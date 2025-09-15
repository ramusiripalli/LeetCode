/**
 * @param {string} s
 * @return {boolean}
 */
function isPallindrome(s,left,right){
    while(left<right){
        if(s[left] !== s[right]) return false;
        left++;
        right--;
    }
    return true;
}



var validPalindrome = function(s) {
       let left = 0;
       let right = s.length-1;
       while(left < right){
        if(s[left] !== s[right]){
            return isPallindrome(s,left+1,right) || isPallindrome(s,left,right-1);
        }
        left++;
        right--;
       }
       return true;
};