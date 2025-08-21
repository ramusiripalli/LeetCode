/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minValue = prices[0];
    let maxprofit = 0;
    for(let i=0;i<prices.length;i++){
        if(prices[i] < minValue){
            minValue = prices[i];
        }
        if(prices[i] - minValue > maxprofit){
            maxprofit = Math.max(prices[i]-minValue, maxprofit);
        }
    }
    return maxprofit;
    
};