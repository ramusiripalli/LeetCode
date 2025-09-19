/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = {};
    for(let i=0;i<strs.length;i++){
    let freqArr = Array(26).fill(0);
    let s = strs[i];
    for(let j = 0;j<s.length;j++){
        let index = s[j].charCodeAt() - 'a'.charCodeAt();
        freqArr[index]++;
    }
    let key = "";
    for(let k=0;k<26;k++){
        key = key + String.fromCharCode(k) + freqArr[k];
    }

    if(!map[key]){
        map[key] = [s];
    }
    else{
        map[key].push(s);
    }
    }
    return [...Object.values(map)];

    
};