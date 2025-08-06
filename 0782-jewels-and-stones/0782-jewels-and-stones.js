/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let jewelsSet = new Set();
    for(let i=0;i<jewels.length;i++)
    {
        jewelsSet.add(jewels[i]);
    }
    let count = 0;
    for(let i=0; i< stones.length;i++)
    {
        if(jewelsSet.has(stones[i])){
            count++;
        }
    }
    return count;
};