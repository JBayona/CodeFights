// FUNCTION SIGNATURE BEGINS, THIS FUNCTION IS REQUIRED
// RETURN AN EMPTY ARRAY IF NO ANAGRAM FOUND
function getAnagramIndices(haystack, needle){
    // WRITE YOUR CODE HERE
    var end = needle.length;
    var temp = '';
    var result = [];
    if(haystack.length === 0) return [];
    if(needle.length === 0) return [];
    for(var i = 0; i < haystack.length; i++){
      tmp = haystack.slice(i, i+end);
      if(tmp.length == end){
        if(sort(needle) === sort(tmp)){
            result.push(i);
        }
      }
    }
    return result;
}
// FUNCTION SIGNATURE ENDS

var sort = word => word.split('').sort().join('');


haystack = "abcdefrjcbadfrt";
needle = "cabd";
console.log(getAnagramIndices(haystack, needle));