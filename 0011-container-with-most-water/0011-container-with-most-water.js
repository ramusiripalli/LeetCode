/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxArea = 0;
    let left = 0;
    let right = height.length-1;
    while(left < right){
        let heig = Math.min(height[left],height[right]);
        let width = right-left;
        let area = heig * width;

        maxArea = Math.max(maxArea,area);

        if(height[left] < height[right]){
            left++;
        }else{
            right--;
        }
    }
    return maxArea;
};