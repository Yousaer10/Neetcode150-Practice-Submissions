class Solution {
    maxProfit(prices) {
        let minPrice = Infinity;
        let maxProfit = 0;
        let currentProfit = 0;

        for(let i = 0; i < prices.length; i++) {
            if(prices[i] < minPrice) {
                minPrice = prices[i]
            } else {
                currentProfit = prices[i] - minPrice;
                if(maxProfit < currentProfit) {
                    maxProfit = currentProfit
                }
            }
        }
        // Careful! You were returning this inside the loop (sloppy)
        return maxProfit;
    }
}
