/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minimum = prices[0];
    let maxProfit = 0;
    for(let i=1;i<prices.length;i++){
        if(prices[i] < minimum){
            minimum = prices[i];

        }

        if(prices[i] - minimum > maxProfit){
            maxProfit = prices[i]-minimum;
        }
    }
    return maxProfit;
};