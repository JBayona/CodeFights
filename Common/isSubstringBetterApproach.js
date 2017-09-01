/*

Implement strStr().

Returns the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

https://leetcode.com/problems/implement-strstr/description/
*/

var strStr = function(haystack, needle) {
    let result = 0;
    let firstLetter = needle[0];
    let tamStr = needle.length;
    if(haystack === "" && needle !== "") return -1;
    if(needle === "") return 0;
    for(let i = 0; i < haystack.length; i++){
      if(haystack[i] === firstLetter){
      	/*En slice incluye la primera posición pero no la
      	última y como es 0-based, está en lo correcto*/
        if(haystack.slice(i, i + tamStr) === needle){
          return i;
        }
      }
    }
    return -1;
};

haystack = "mississippi";
needle = "issip";
console.log(strStr(haystack, needle));