/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;

   const map = new Map();
   for(let ch of s){
    map.set(ch,(map.get(ch) || 0) + 1);
   }

   for(let i=0;i<t.length;i++){

    if(!map.has(t[i]) || map.get(t[i]) <= 0 ){
     return false;
    }

       map.set(t[i] , map.get(t[i]) - 1);

   }

   return true;
   


};