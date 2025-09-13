/**
 * @param {number[]} nums
 * @return {number}
 */
function gcdOfTwoNumbers(a, b) {
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
}

var findGCD = function(nums) {
    let minNum = Math.min(...nums);
    let maxNum = Math.max(...nums);
    return gcdOfTwoNumbers(minNum, maxNum);
};