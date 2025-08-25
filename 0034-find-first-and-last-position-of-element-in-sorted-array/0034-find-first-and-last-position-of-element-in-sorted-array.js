/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let res = [-1,-1];
    if(nums.length === 0) {
        return res;
    }
    for(let i=0;i<nums.length;i++){
        if(nums[i] === target){
            res[0] = i;
            break;
        }
    }
    for(let j=nums.length-1;j>=0;j--){
        if(nums[j] === target){
           res[1] = j;
            break;
        }
    }

    return res;
};