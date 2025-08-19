/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let res = [];
    for(let i=0;i<nums1.length;i++){
        let num = nums1[i];
        let index = nums2.indexOf(num);
        let nextGreaterElement = -1;
        for(let j=index+1; j<nums2.length;j++){
            if(nums2[j] > num){
                nextGreaterElement = nums2[j];
                break;
            }
        }
        res.push(nextGreaterElement);
    }
    return res;
};