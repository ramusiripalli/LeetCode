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
var zigzagLevelOrder = function(root) {
    let ans = [];
    if(!root) return ans;
    let queue = [root];
    let level = 0;
    while(queue.length > 0){
        let levelArray = [];
        let levelSize = queue.length;
        for(let i=0;i<levelSize;i++){
            let curr = queue.shift();
            if(level % 2 === 0){
                levelArray.push(curr.val);
            }
            else{
                levelArray.unshift(curr.val);
            }

            if(curr.left) queue.push(curr.left);
            if(curr.right) queue.push(curr.right);
        }
        ans.push(levelArray);
        ++level;
    }
    return ans;
};