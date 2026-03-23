/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let map = new Map();

    for(let ch of nums){
        map.set(ch, (map.get(ch) || 0)+ 1);
    }

    for(let [key,value] of map){
        if(value === 1) return key;
    }
};