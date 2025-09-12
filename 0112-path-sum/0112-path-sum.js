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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    let ans = false;
    function traverse(curr,currentSum){
        if(!curr) return;
        let newSum =  curr.val + currentSum;
        if(!curr.left && !curr.right){
            if(newSum === targetSum){
                ans = ans || true;
            }
        } 
        traverse(curr.left,newSum);
        traverse(curr.right,newSum);
    }
    traverse(root,0);
    return ans;
};