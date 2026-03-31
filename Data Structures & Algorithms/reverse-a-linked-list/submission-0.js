class Solution {
    reverseList(head) {
        // Curr is the reference (pointer)
        let curr = head;
        // Set to end of linkedlist for reverse traversal
        let prev = null;
        
        // Ensure curr is referencing to a node
        while(curr !== null) {
            // Access and set next based on curr's reference (pointer)
            let next = curr.next;
            // Flip reference (pointer) for reverse traversal
            curr.next = prev;
            // Move prev to where curr is referencing (pointing)
            prev = curr;
            // Move curr's reference (pointer) to location of next value
            curr = next;
        }
        // Return the new head (which returns whole reversed linked list)
        return prev;
    }
}
