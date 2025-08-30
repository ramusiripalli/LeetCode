/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const freqMap = {};

    for(let num of nums){
        freqMap[num] = (freqMap[num] || 0) + 1;
    }

    for(let i=0;i<nums.length; i++){
        if(freqMap[nums[i]] === 1){
            return nums[i];
        }
    }
};