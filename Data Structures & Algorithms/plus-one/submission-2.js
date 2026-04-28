class Solution {
    plusOne(digits) {
        // 1. Loop backwards from the last digit
        for (let i = digits.length - 1; i >= 0; i--) {
            if (digits[i] < 9) {
                digits[i]++; // Simple addition
                return digits; // No carry, so we're finished!
            }
            // 2. If it was a 9, it becomes a 0
            digits[i] = 0;
        }

        // 3. If we get here, it was all 9s (e.g. 99 -> 00)
        // We add a '1' to the front to get 100
        digits.unshift(1);
        return digits;
    }
}
