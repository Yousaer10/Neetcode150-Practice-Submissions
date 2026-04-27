class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        // Initialize an array of size n + 1 with 0s
        const ans = new Array(n + 1).fill(0);
        
        // DP: The number of bits in i is the bits in i/2 plus the last bit of i
        for (let i = 1; i <= n; i++) {
            // i >> 1 is equivalent to Math.floor(i / 2)
            // i & 1 is 1 if i is odd, 0 if even
            ans[i] = ans[i >> 1] + (i & 1);
        }
        
        return ans;
    }
}
