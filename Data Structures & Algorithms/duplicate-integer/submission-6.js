class Solution {
    hasDuplicate(nums) {
        const seen = new Set();

        for(const num of nums) {
            if(seen.has(num)) { return true };
            // Incorrect syntax seen.set(num) = true
            // .set() is a prop of Hash Maps
            // Set doesn't have key & value like Map; can't store true
            seen.add(num);
        }
        return false;
    }
}
