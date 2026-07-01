/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length;
    let ActualTotal = Math.floor(n * (n+1)/2);
    let total = 0;
    for(let i=0;i<nums.length;i++){
        total += nums[i];
    }

    return  ActualTotal - total;
};