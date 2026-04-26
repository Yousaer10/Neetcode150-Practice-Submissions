class Solution {
    singleNumber(nums) {
        let res = 0; // Starting at 0 because 0 ^ X = X
        for(const num of nums) {
            res = res ^ num;
        }
        return res; // Flip the bitwise switches
    }
}
