/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase();
    let filteredString = "";
    let reversedString = "";
    for(let i=0;i<s.length;i++){
        if(s[i].match(/[a-z0-9]/i)){
            filteredString = filteredString + s[i];
            reversedString = s[i] + reversedString;
        }
    }
    return filteredString === reversedString;
};