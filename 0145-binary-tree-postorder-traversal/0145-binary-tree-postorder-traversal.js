/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    let ans = [];
    if(!root) return ans;
    let stack = [];
    let curr = root;
    let lastVisited = null;
    while(curr || stack.length > 0){

        while(curr){
            stack.push(curr);
            curr = curr.left;
        }
        let peekNode = stack[stack.length-1];
        if(peekNode.right && peekNode.right !== lastVisited){
            curr = peekNode.right;
        }
        else{
            ans.push(peekNode.val);
            lastVisited = stack.pop();
        }
    }
    return ans;
};