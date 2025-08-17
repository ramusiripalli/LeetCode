/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minValue = prices[0];
    let maxValue = 0;
    for(let i=1;i<prices.length;i++){
        if(prices[i] < minValue){
            minValue = prices[i];
        }
        if((prices[i] - minValue) > maxValue)
        {
            maxValue = Math.max(maxValue,prices[i]-minValue);
        }
       
    }
     return maxValue;
};