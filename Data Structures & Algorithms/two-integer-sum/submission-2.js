class Solution {
    twoSum(nums, target) {
        const complement = new Map();
        for(let i = 0; i < nums.length; i++) {
            const diff = target - nums[i];
            if(complement.has(diff)) {
                // Creating annd returning an array [a,b]
                // Maps use key to return value
                return [complement.get(diff), i];
            } else {
                complement.set(nums[i], i);
            }
        }
    }
}
