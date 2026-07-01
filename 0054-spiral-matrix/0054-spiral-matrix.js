/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let rows = matrix.length;
    let columns = matrix[0].length;
    let top=0;
    let bottom = rows-1;
    let left =0;
    let right = columns-1;
    let result =[];
    while(left <= right && top <= bottom){
        for(let row=left;row<=right;row++){
            result.push(matrix[top][row]);
        }
        top++;

        for(let col=top;col<=bottom;col++){
            result.push(matrix[col][right]);
        }
        right--;

        if(top <= bottom){
            for(let row=right;row>=left;row--){
                result.push(matrix[bottom][row]);
            }
            bottom--;
        }

        if(left <= right){
            for(let col=bottom;col>=top;col--){
                result.push(matrix[col][left]);
            }
            left++;
        }
    }

    return result;
};