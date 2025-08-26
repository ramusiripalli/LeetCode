/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let freq = {};
    for(let num of nums){
        freq[num] = (freq[num] || 0) + 1;
    }
    for(let key in freq){
        if(freq[key] === 1){
            return Number(key);
        }
    }
    return -1;
};