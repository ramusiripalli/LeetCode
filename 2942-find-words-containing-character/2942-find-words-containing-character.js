/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let length = words.length;
    let res = [];
    for(let i=0;i<length;i++){
        if(words[i].includes(x)){
            res.push(i);
        }
    }
    return res;
};