/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    let length = num.length;
    for(let i=length-1;i>=0;i--){
        if(Number(num[i])% 2 === 1 ){
            return num.substring(0,i+1);
        }
    }
    return "";
};