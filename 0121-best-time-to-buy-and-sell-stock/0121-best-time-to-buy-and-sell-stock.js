/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let n = prices.length;
    let maxProfit = 0;
    let min = prices[0];
    for(let i = 1;i<n;i++){
        if(prices[i] < min){
            min = prices[i];
        }

        if(prices[i] - min > maxProfit){
            maxProfit = prices[i] - min;
        }
    }
    return maxProfit;
};