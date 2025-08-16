/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];

    let map = {
        '+' : (left,right) => (left+right),
        '-' : (left,right) => (left-right),
        '*' : (left,right) => (left * right),
        '/' : (left,right) => Math.trunc(left / right)
    }

    for(let i=0;i<tokens.length;i++){
        if(map[tokens[i]]){
            let right = stack.pop();
            let left = stack.pop();
            let ans = map[tokens[i]](Number(left),Number(right));
            stack.push(ans);
        }
        else{
            stack.push(tokens[i]);
        }
    }
    return Number(stack.pop())
};