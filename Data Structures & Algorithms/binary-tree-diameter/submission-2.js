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
        this.maxDiam = 0;

        const dfs = (node) => {
            if(!node) return 0;
            let leftHeight = dfs(node.left);
            let rightHeight = dfs(node.right);

            this.maxDiam = Math.max(this.maxDiam, leftHeight + rightHeight);
            return Math.max(leftHeight, rightHeight) + 1;
        }
        dfs(root);
        return this.maxDiam;
    }
}
