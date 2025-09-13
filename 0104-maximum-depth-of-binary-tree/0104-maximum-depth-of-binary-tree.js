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
 * @return {number}
 */
var maxDepth = function(root) {
    let maxDepth = 0;
    function traversal(curr,depth){
        if(!curr) return;
        if(!curr.left && !curr.right){
            maxDepth = Math.max(depth,maxDepth);
        }
        traversal(curr.left,depth+1);
        traversal(curr.right,depth+1);
    }
    traversal(root,1);
    return maxDepth;
};