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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    
    function traversal(curr){
        if(!curr) return null;

        let temp = curr.left;
        curr.left = curr.right;
        curr.right = temp;

        traversal(curr.left);
        traversal(curr.right);
        return curr;
    }
    return traversal(root);
};