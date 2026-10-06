/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrices = Infinity;
    let maxProfit = 0;
    for(let i=0;i<prices.length;i++){
        minPrices = Math.min(prices[i],minPrices);
        let profit = prices[i] - minPrices;
        maxProfit = Math.max(maxProfit,profit);
    }
    return maxProfit;
};