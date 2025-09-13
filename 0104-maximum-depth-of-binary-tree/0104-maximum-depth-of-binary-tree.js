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
    function traversal(curr){
        if(!curr) return 0;
        let leftMax = traversal(curr.left);
        let rightMax = traversal(curr.right);

       return Math.max(leftMax, rightMax) + 1;
    }
       return  traversal(root);
  
};
