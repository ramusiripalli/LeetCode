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
    function traversal(curr,level){
        if(curr === null) return;

        if(!curr.left && !curr.right){
            maxDepth = Math.max(maxDepth,level);
        }

        traversal(curr.left,level+1);
        traversal(curr.right,level+1);
    }
    traversal(root,1);
    return maxDepth;
};