class Solution {
    maxProfit(prices) {
        let minPrice = Infinity;
        let maxProfit = 0;
        let currentProfit = 0;

        for(let i = 0; i < prices.length; i++) {
            let currentPrice = prices[i];
            if(currentPrice < minPrice) {
                minPrice = currentPrice;
            } else {
                currentProfit = currentPrice - minPrice;
                if(currentProfit > maxProfit) {
                    maxProfit = currentProfit;
                }
            }
        }
        return maxProfit;
    }
}
