// Invariant: Ensure that at the start of each i-th iteration
// the set has gone and stored through all numbers so far
class Solution {
    hasDuplicate(nums) {
        const seen = new Set();

        for(const num of nums) {
            if(seen.has(num)) {
                return true;
            }
            seen.add(num);
        }
        return false
    }
}
