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
        let curr = head;
        let prev = null; // Stores previous node to point backwards

        while(curr !== null) {
            let nextNode = curr.next; // 1. Save next node to avoid losing it
            curr.next = prev;         // 2. Reverse the pointer
            prev = curr;              // 3. Move prev forward
            curr = nextNode;          // 4. Move curr forward
        }
        return prev; // New head
    }
}

