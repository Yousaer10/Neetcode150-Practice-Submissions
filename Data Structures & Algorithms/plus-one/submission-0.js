class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        // Start from the last digit (least significant)
        for (let i = digits.length - 1; i >= 0; i--) {
            if (digits[i] < 9) {
                // No carry needed, just increment and we're done
                digits[i]++;
                return digits;
            }
            // Digit was 9, so it becomes 0 and carry continues
            digits[i] = 0;
        }

        // If we reach here, all digits were 9 (e.g., [9, 9, 9])
        // The array is now [0, 0, 0], so we add 1 to the front
        digits.unshift(1);
        return digits;
    }
}
