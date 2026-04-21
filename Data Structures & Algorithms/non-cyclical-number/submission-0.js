class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    
    isHappy(n) {
        let slow = n;
        let fast = this.getNext(n);

        // While the fast runner hasn't finished and hasn't caught the slow runner
        while (fast !== 1 && slow !== fast) {
            slow = this.getNext(slow);         // 1 step
            fast = this.getNext(this.getNext(fast)); // 2 steps
        }

        // If the fast runner stopped at 1, it's a Happy Number
        return fast === 1;
    }

    // Helper to calculate the next number in the sequence
    getNext(n) {
        let sum = 0;
        while (n > 0) {
            let digit = n % 10; // Get the last digit
            sum += digit * digit;
            n = Math.floor(n / 10); // Remove the last digit
        }
        return sum;
    }
}
