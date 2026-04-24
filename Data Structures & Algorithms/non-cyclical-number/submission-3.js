class Solution {
    isHappy(n) {
        let slow = n;
        let fast = this.sumOfSquares(n);

        while(fast !== 1 && slow !== fast) {
            slow = this.sumOfSquares(slow);
            fast = this.sumOfSquares(this.sumOfSquares(fast));
        }
        return fast === 1;
    }

    sumOfSquares(n) {
        let sum = 0;
        while(n > 0) {
            let digit = n % 10;
            sum += digit * digit;
            n = Math.floor(n / 10);
        }
        return sum;
    }
}
