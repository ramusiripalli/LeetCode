/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    let totalSum = nums.reduce((acc,curr)=> acc+ curr,0);
    const output = [];
    let leftSum = 0;
    for(let i=0;i<nums.length;i++){
        let rightSum = totalSum - leftSum - nums[i];
        output.push(Math.abs(rightSum-leftSum));
        leftSum+=nums[i];
    }

    return output;
    
};