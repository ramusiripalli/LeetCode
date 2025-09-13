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
    let answer = false;
    function traversal(curr,currentSum){
        if(!curr) return;
        let newSum = curr.val+ currentSum;
        if(!curr.left && !curr.right){
            if(newSum === targetSum){
                answer = true;
            }
        }
        traversal(curr.left,newSum);
        traversal(curr.right,newSum);
    }
    traversal(root,0)
    return answer;
};