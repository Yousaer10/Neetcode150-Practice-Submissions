class Solution {
    /*Before each iteration i, the map contains exactly the elements 
    seen so far (nums[0..i-1]), and 
    if a solution exists using those elements, the algorithm would 
    have already returned it */
    twoSum(nums, target) {
        // complement(int is key, index is val)
        const complement = new Map();

        for(let i = 0; i < nums.length; i++) {
            // Find the diff between target and current integer
            const diff = target - nums[i];
            // If complement contains the diff
            if(complement.has(diff)) {
                // Return index stored in complement map & curr index
                return [complement.get(diff), i];
            } else {
                // Store integer key & index as val for future complement checks
                complement.set(nums[i], i);
            }
        }
    }
}
