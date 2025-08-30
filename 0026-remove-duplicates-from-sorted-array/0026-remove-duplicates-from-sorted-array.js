/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const set = new Set(nums);

    let uniqueArray = [...set];

    for(let i=0;i<uniqueArray.length;i++){
        nums[i] = uniqueArray[i];
    }

    return uniqueArray.length;

};