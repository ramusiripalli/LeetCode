/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let hLength = haystack.length;
    let nLength = needle.length;

    for(let i=0;i<= hLength-nLength;i++){
        let j =0;
        for(j=0;j<nLength;j++){
            if(haystack[i+j] !== needle[j]){
                break;
            }
        }

            if( j === nLength){
                return i;
            }
        
    }
    return -1;
};