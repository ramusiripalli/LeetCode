/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    matrix = transpose(matrix);
    for(let i=0;i<matrix.length;i++){
        reverseArray(matrix[i]);
    }

    return matrix;
};

function transpose(matrix){
    for(let i=0;i<matrix.length;i++){

        for(let j=i+1;j<matrix[i].length;j++){

            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }

    return matrix;
}

function reverseArray(arr){
let start = 0;
let end = arr.length-1;

while(start < end){
    [arr[start],arr[end]] = [arr[end],arr[start]];
    start++;
    end--;
}
return arr;
}