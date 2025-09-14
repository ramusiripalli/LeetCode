/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

function reverse(nums,left,right){
    while(left<right){
        let temp = nums[left];
        nums[left] = nums[right];
        nums[right] = temp;
        left++;
        right--;
    }
}

var rotate = function(nums, k) {
    if(!Array.isArray(nums) || nums.length <=1) return;
    let n = nums.length;
    k = k %n;
    if(k===0) return;
    reverse(nums,0,n-1);
    reverse(nums,0,k-1);
    reverse(nums,k,n-1);

};