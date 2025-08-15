/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let uniqueSet = new Set(nums);
    let uniqueArray = [...uniqueSet];
    for(let i=0;i<uniqueArray.length;i++){
        nums[i]=uniqueArray[i];
    }
    return uniqueArray.length;
};