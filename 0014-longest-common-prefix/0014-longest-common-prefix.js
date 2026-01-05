/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let length = strs.length;
    if(length === 0) return "";
    strs.sort();
    let first = strs[0];
    let last = strs[length-1];

    let commonPrefix = "";
    for(let i=0;i<Math.min(first.length, last.length);i++){
        if(first[i] !== last[i]){
            return commonPrefix;
        }
        commonPrefix += first[i];
    }

    return commonPrefix;
};