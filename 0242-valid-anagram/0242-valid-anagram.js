/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    const freqMap = new Map();

    for(let i=0;i<s.length;i++){
        freqMap.set(s[i],(freqMap.get(s[i]) || 0)+1 );
    }

    for(let j=0;j<t.length;j++){
        if(!freqMap.has(t[j]) || freqMap.get(t[j]) <= 0){
           return false;
        }
         freqMap.set(t[j],freqMap.get(t[j])-1);
    }
    return true;

};