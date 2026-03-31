class Solution {
    twoSum(nums, target) {
        const complement = new Map();
        for(let i = 0; i < nums.length; i++) {
            const diff = target - nums[i];
            if(complement.has(diff)) {
                return [complement.get(diff), i]
            }
            complement.set(nums[i], i)
        }
    }
}
