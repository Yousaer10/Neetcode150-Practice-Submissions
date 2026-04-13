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
    isBalanced(root) {
        const dfs = (node) => {
            if(!node) return 0;
            let leftHeight = dfs(node.left);
            let rightHeight = dfs(node.right);

            if(leftHeight === -1 || rightHeight === -1) {
                return -1;
            }else if(Math.abs(leftHeight - rightHeight) > 1) {
                return -1;
            }else { 
                return Math.max(leftHeight, rightHeight) + 1 
            }
        }
        return dfs(root) !== -1;
    }
}
