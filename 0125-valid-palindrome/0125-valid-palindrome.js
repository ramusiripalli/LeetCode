/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let left = 0;
  let right = s.length-1;
  s = s.toLowerCase()
  while(left < right){
    if(s[left].match(/[^a-z0-9]/i)){
        left++;
    }
    else if(s[right].match(/[^a-z0-9]/)){
        right--;
    }
    else if(s[left] === s[right]){
        left++;
        right--;
    }
    else{
        return false;
    }
  }  
  return true;
};