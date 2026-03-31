/* Invariant: 
   Ensure at the start of each i-th iteration set 'seen' contains all
   unique numbers (items) encountered so far
*/
class Solution {
    hasDuplicate(nums) {
        const seen = new Set();
        for(const num of nums) {
            if(!seen.has(num)) {
                seen.add(num);
            } else {
                return true;
            }
        }
        return false;
    }
}
