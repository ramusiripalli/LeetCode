/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
   let count = 0;
   let max_count = 0;
   for(let i=0;i<nums.length;i++){
    if(nums[i] === 1){
        count = count + 1;
        if(count > max_count){
            max_count = count;
        }
    }   
    else{
        count = 0;
    }
   } 

   return max_count;
};