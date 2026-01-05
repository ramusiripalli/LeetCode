/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let leng = strs.length;
    if(leng === 0) return "";
    strs.sort();
    let first = strs[0];
    let last = strs[leng-1];

    let commonPrefix = "";
    for(let i=0;i<Math.min(first.length, last.length);i++){
        if(first[i] !== last[i]){
            return commonPrefix;
        }
        commonPrefix += first[i];
    }

    return commonPrefix;
};