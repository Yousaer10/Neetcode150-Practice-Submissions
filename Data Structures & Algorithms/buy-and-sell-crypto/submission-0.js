class Solution {
    maxProfit(prices) {
        let minPrice = Infinity;
        let maxProfit = 0;
        // Used this before but incorrectly then changed mind
        let currentProfit = 0;
        
        for(let i = 0; i < prices.length; i++) {
            if(prices[i] < minPrice) {
                minPrice = prices[i]
            } else {
                // Got mixed up currentProfit with maxProft
                currentProfit = prices[i] - minPrice;
                // Got mixed up maxProft with current price[i]
                if(currentProfit > maxProfit) {
                    // Got mixed up currentProfit with current price[i]
                    maxProfit = currentProfit
                }
            }
        }
        return maxProfit;
    }
}
