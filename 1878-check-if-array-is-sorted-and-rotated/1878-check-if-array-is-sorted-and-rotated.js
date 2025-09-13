/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    let greater = 0;
    let n = nums.length;
    for(let i=0;i<n;i++){
        if(nums[i] > nums[(i+1) % n]){
            ++greater;
            if(greater > 1) return false;
        }
    }
    return true;
};