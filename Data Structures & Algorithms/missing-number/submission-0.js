class Solution {
    missingNumber(nums) {
        // 1. State: Start res at n (because the loop only goes up to n-1)
        let res = nums.length;

        // 2. Loop: XOR every index and every value
        for (let i = 0; i < nums.length; i++) {
            // res = res ^ (index ^ value)
            res ^= i ^ nums[i];
        }

        // 3. Result: The value that didn't have a pair
        return res;
    };
}
