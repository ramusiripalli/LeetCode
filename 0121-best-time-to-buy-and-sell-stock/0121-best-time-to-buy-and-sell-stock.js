/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minimum = Infinity;
    let maxProfit = 0;
    for(let i=0;i<prices.length;i++){
        if(prices[i] < minimum){
            minimum = prices[i];
        }

        if(prices[i] - minimum > maxProfit ){
            maxProfit = Math.max(prices[i] - minimum, maxProfit);
        }
    }

    return maxProfit;
};