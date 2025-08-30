/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let temp = [];
    for(let num of nums){
        if(num !== val){
            temp.push(num);
        }
    }
    for(let i=0;i<temp.length;i++){
        nums[i] = temp[i];
    }

    return temp.length;
};