/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let map = new Map();
    for(let ch of s){
        map.set(ch,(map.get(ch)||0) + 1);
    }

    let vowels = new Set(['a','e','i','o','u']);
    let maxVowelFreq = 0;
    let maxConsonantFreq = 0;

    for(let [ch,freq] of map){
        if(vowels.has(ch)){
            if(freq > maxVowelFreq){
                maxVowelFreq = freq;
            }
        }
        else{
            if(freq > maxConsonantFreq){
                maxConsonantFreq = freq;
            }
        }
    }

    return maxVowelFreq + maxConsonantFreq;
};