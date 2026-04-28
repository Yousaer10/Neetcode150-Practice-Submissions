class Solution {
    hammingWeight(n) {
        let count = 0;
        while(n > 0) {
            if((n & 1) === 1) { // If the last bit is a 1, add to count
                count++;
            }
            n >>>= 1;  // Shift right by 1 to see the next bit 
            // >>>= is same as n = n >>> 1 which stores the chopped off bit
        }
        return count;
    }
}
