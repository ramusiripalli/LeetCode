/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let n = height.length;
    
    let maxLeft = [];
    maxLeft[0] = height[0];
    for(let i=1;i<n;i++){
        maxLeft[i] = Math.max(maxLeft[i-1], height[i]);
    }
    console.log(maxLeft);

    let maxRight = [];
    maxRight[n-1] = height[n-1];
    for(let i =n-2; i>=0;i--){
        maxRight[i] = Math.max(maxRight[i+1], height[i]);
    }
    console.log(maxRight);

let sum = 0;
    for(let i=0;i<n;i++){
        let waterTrapped = (Math.min(maxLeft[i],maxRight[i]) - height[i]);
        sum = sum + ((waterTrapped < 0) ? 0 : waterTrapped);
    }

    return sum;
};