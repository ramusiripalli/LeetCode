/**
 * @param {number[]} nums
 * @return {number}
 */

function gcdOfTwoNumbers(num1,num2){
    while(num1 > 0 && num2 > 0){
        if(num1>num2){
            num1 = num1%num2;
        }
        else{
            num2 = num2 % num1;
        }
    }
    if(num1 === 0) return num2;
    else return num1;
}
var findGCD = function(nums) {
let minNumber = Math.min(...nums);
let maxNumber = Math.max(...nums);

return gcdOfTwoNumbers(minNumber,maxNumber);
    
};