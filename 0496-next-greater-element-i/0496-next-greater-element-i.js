/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, arr) {
    let nextGreaterMap = {};
    let stack = [];
    let n = arr.length;
    stack.push(arr[n-1]);
    nextGreaterMap[arr[n-1]] = -1;

    for(let i=n-2;i>=0;i--){
        let top = stack[stack.length-1];
        if(arr[i] < top){
            nextGreaterMap[arr[i]] = top;
        }
        else{
            while(stack.length){
                if(stack[stack.length-1] < arr[i])
                {
                    stack.pop()
                }
                else{
                    nextGreaterMap[arr[i]] = stack[stack.length-1];
                    break;
                }
            }
            if(stack.length === 0){
                nextGreaterMap[arr[i]] = -1;
            }
        }
        stack.push(arr[i]);
    }

    let ans = [];
    for(let i=0;i<nums1.length;i++){
        ans.push(nextGreaterMap[nums1[i]]);
    }
    
    return ans;


};