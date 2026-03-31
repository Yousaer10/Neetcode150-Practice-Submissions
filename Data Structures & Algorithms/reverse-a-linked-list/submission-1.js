/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    reverseList(head) {
        // Curr is the reference (pointer)
        let curr = head;
        // Stores previous value for reverse
        let prev = null;

        // Ensure curr is referencing a node
        while(curr !== null) {
            // Assign next based on curr's referrence (pointer)
            let next = curr.next;
            // Flip the pointer backwards for reverse traversal
            curr.next = prev;
            // Move prev to where curr is referencing (pointing) to
            prev = curr;
            // Move curr's reference (pointer) to where next is referencing (pointing)
            curr = next;
        }
        // Return prev (the new head which returns the whole linked list reversed)
        return prev;
    }
}
