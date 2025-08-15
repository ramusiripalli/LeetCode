/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    if(nums.length === 0) return [];
    let x = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i] !== val){
            nums[x] = nums[i];
            x= x+1;
        }
    }
    return x;
};