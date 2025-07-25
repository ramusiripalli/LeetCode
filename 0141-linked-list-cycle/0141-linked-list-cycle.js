/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let NodesSet = new Set();
    let curr = head;

    while(curr != null)
    {
        if(NodesSet.has(curr)){
            return true;
        }

        NodesSet.add(curr);
        curr = curr.next;
    }
    return false;
};