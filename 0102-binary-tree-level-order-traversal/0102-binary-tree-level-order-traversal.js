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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let ans = [];
    if(!root) return ans;
    let queue = [root];
    while(queue.length > 0){
        let levelArray = [];
        let levelSize = queue.length;
        for(let i=0;i<levelSize;i++){
            let curr = queue.shift();
            levelArray.push(curr.val);
            if(curr.left) queue.push(curr.left);
            if(curr.right) queue.push(curr.right);
        }
        ans.push(levelArray);
    }
    return ans;
};