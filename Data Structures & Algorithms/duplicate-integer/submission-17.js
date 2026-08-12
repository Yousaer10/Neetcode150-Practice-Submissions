class Solution {
    hasDuplicate(nums) {
        const seen = new Set();
        for(const num of nums) {
            if(seen.has(num)) { // Check if num already exists
                return true;
            } else {
                seen.add(num);
            }
        }
        return false; // No duplicates found
    }
}
