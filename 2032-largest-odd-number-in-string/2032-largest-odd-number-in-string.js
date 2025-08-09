/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    let n = num.length;
    let str = '';
    let store = null;
    for(let i=n-1;i>=0;i--){
       if(!isNaN(num[i])){
        const num1 = parseInt(num[i]);
         if(num1 % 2 === 1){
            store = i;
            break;
         }
       }
    }
    str = (store === null) ? "": num.slice(0,store+1);
    return str;
    
};