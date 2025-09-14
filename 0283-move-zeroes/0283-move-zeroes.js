/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let n = nums.length;
    let x = 0;
    for(let i=0;i<n;i++){
        if(nums[i] !== 0){
            nums[x] = nums[i];
            x++;
        }
    }
    for(let i = x;i<n;i++){
        nums[i] = 0;
    }
};