/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let maxOnes = 0;
    let count = 0;
    for(let i =0;i<nums.length;i++){
        if(nums[i] == 1){
            count++;
        }
        else{
            count = 0;
        }
        maxOnes = Math.max(count,maxOnes);
    }
    return maxOnes;
};