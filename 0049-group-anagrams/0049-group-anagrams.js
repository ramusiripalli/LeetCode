/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = new Map();
  
    for(let word of strs){
       let count = Array(26).fill(0);
        for(let ch of word){
            let index = ch.charCodeAt(0) - 97;
            count[index]++
        }
        
        let key = count.join("#");

        if(!map.has(key)){
            map.set(key,[]);
        }
        map.get(key).push(word);
    }

    return Array.from(map.values());
};