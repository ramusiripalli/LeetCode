/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let stack = [];
    let ans = "";
    for(let i=0;i<s.length;i++){
        if(s[i] === '('){
            stack.push(s[i]);
            let length = stack.length;
            if(length > 1){
                ans+=s[i];
            }
        }
        else{
            let len = stack.length;
            if(len > 1){
                ans+=s[i];
            }
            stack.pop();
        }
    }
    return ans;
};