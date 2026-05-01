class Solution {
    reverseBits(n) {
        let res = 0;
        for (let i = 0; i < 32; i++) {
            // Move the current result left to make a 0 at the end
            // Then 'OR' it with the last bit of n
            res = (res << 1) | (n & 1);
            
            // Discard the last bit of n
            n >>>= 1;
        }
        // >>> 0 ensures the result is treated as an unsigned 32-bit integer
        return res >>> 0; 
    }
}
