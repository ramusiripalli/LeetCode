/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let n = height.length;
    if(n===0) return 0;
    const leftMax = new Array(n).fill(0);
    const rightMax = new Array(n).fill(0);
    leftMax[0] = height[0];
    for(let i=1;i<n;i++){
        leftMax[i] = Math.max(leftMax[i-1],height[i]);
    }

    rightMax[n-1] = height[n-1];
    for(let j=n-2;j>=0;j--){
        rightMax[j] = Math.max(rightMax[j+1],height[j]);
    }

    let total = 0;
    for(let i=0;i<n;i++){
        total+=Math.min(leftMax[i],rightMax[i])-height[i];
    }

    return total;
    
};