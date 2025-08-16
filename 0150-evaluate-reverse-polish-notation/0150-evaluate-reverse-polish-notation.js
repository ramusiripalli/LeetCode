/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
    for(let i=0;i<tokens.length;i++){
        if(!isNaN(tokens[i])){
            stack.push(Number(tokens[i]));
        }
        else{
            let right = Number(stack.pop());
            let left = Number(stack.pop());
            let val;
            if(tokens[i] === "+") val = (left + right);
            else if(tokens[i] === "-") val = (left - right);
            else if(tokens[i] === "*") val = (left * right);
            else if(tokens[i] ==='/') val = Math.trunc(left / right);
            
            stack.push(val);
        }
    }
    return stack.pop();
};