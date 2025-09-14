/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let nums1Copy = nums1.slice(0,m);
    let left = 0;
    let right = 0;
    let k = 0;
    while(left < m && right < n){
        if(nums1Copy[left] < nums2[right]){
            nums1[k] = nums1Copy[left];
            left++;
        }
        else{
            nums1[k] = nums2[right];
            right++;
        }
        k++;
    }
    while(left < m){
        nums1[k] = nums1Copy[left];
        left++;
        k++;
    }
    while(right < n){
        nums1[k] = nums2[right];
        right++;
        k++;
    }

    return nums1;
};