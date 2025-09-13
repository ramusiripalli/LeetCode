/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    let sum = 0;
    if(num === 1) return false;
    for(let i=0; i* i <= num;i++){
        if(num % i === 0){
            sum += i;

            if(num/i !== i && num/i !== num){
                sum+=(num/i);
            }
        }
    }
    return sum === num;
};