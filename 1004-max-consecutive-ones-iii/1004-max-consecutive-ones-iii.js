/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let left = 0;
    let maxOnes = 0;
    let zeros = 0;
    let right = 0;
    while(right<nums.length){
        if(nums[right] === 0) zeros++;
        if(zeros > k){
            if(nums[left]=== 0) zeros--;
            left++;
        }
        if(zeros <= k){
            let length = right - left + 1;
            maxOnes = Math.max(maxOnes,length);
        }


        right++;
    }

    return maxOnes;
};