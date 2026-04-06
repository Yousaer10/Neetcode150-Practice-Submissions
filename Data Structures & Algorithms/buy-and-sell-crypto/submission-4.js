class Solution {
    maxProfit(prices) {
        let minPrice = Infinity;
        let currentProfit = 0;
        let maxProfit = 0;

        for(let i = 0; i < prices.length; i++) {
            if(prices[i] < minPrice) {
                minPrice = prices[i];
            } else {
                currentProfit = prices[i] - minPrice;
                if(currentProfit > maxProfit) {
                    maxProfit = currentProfit;
                }
            }
        }
        return maxProfit;
    }
}
