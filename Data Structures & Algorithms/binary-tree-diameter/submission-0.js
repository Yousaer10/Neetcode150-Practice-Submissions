/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    diameterOfBinaryTree(root) {
        this.maxDiam = 0; // The "Global" record
        
        const dfs = (node) => {
            if (!node) return 0;
            
            let left = dfs(node.left);
            let right = dfs(node.right);
            
            // JOB B: Update the record (the width)
            this.maxDiam = Math.max(this.maxDiam, left + right);
            
            // JOB A: Return the height for the parent to use
            return 1 + Math.max(left, right);
        };
        
        dfs(root);
        return this.maxDiam;
    }
}

