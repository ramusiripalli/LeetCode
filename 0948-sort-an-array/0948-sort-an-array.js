/**
 * @param {number[]} nums
 * @return {number[]}
 */
function merge(left,right){
let i=0;
let j=0; 
let k = 0;
let res = [];
while(i<left.length && j<right.length){
    if(left[i] < right[j]){
        res[k] = left[i];
        i++;
    }
    else{
        res[k] = right[j];
        j++;
    }
    k++;
}
while(i<left.length){
    res[k] = left[i];
    i++;
    k++;
}
while(j<right.length){
    res[k] = right[j];
    j++;
    k++;
}

return res;

}


var sortArray = function(nums) {
    if(nums.length <=1) return nums;

    let mid = Math.floor(nums.length/2);
    let left = sortArray(nums.slice(0,mid));
    let right = sortArray(nums.slice(mid));

    return merge(left,right);
};