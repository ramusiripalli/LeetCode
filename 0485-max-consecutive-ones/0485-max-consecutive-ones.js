/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let maxCount = 0;
    let count = 0;
    for(let num of nums){
       if(num===1){
        count = count+1;
       }else{
        count=0;
       }
        maxCount = Math.max(maxCount,count);
    }
    return maxCount;
};