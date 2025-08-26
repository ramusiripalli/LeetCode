/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    const freq = new Map();
    for(const x of nums){
        freq.set(x,(freq.get(x)||0) +1);
    }

    for(const [key,value] of freq.entries()){
        if(value === 1) return key;
    }

    return -1;
};