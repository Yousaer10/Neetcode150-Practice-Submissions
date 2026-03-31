class Solution {
    hasDuplicate(nums) {
        const seen = new Set();
        // Semantic 'of'
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
