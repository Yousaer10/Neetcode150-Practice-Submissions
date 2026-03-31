class Solution {
    hasDuplicate(nums) {
        const seenMap = {};
        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
                if(seenMap[num]) {
                    return true;
            }
            seenMap[num] = true;
        }
        return false;
    }
}
