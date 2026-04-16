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
    isSubtree(root, subRoot) {
        if(!root) return false;
        if(this.isSameTree(root, subRoot)) return true;
        return this.isSubtree(root.right, subRoot) || this.isSubtree(root.left, subRoot);
    }
    
    isSameTree(p, q) {
        if(!p && !q) return true;
        if(!p || !q || p.val !== q.val) return false;
        return this.isSameTree(p.left, q.left) && this.isSameTree(p.right, q.right);
    }
}
