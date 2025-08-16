/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
 let stack = [];
 for(let i=0;i<tokens.length;i++){

    if(["+","-","*","/"].includes(tokens[i])){
        let right = stack.pop();
        let left = stack.pop();
        let ans = eval(`${left} ${tokens[i]} ${right}`);
        stack.push(Math.trunc(ans));
    }
    else{
        stack.push(tokens[i]);
    }

 }
 return Number(stack.pop())
};