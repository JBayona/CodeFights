/*
Given the string s = "ab", we find the alphabetically-ordered set of
substrings of s to be {"a","ab","b"}- The alphabetically last substring
is "b"
*/
function substringLength(str){
  var completeStr = [];
  //Substring
  completeStr = getSubStr(str);
  completeStr.sort((a,b)=> b.localeCompare(a));
  //console.log(completeStr);
  return completeStr[0];
}

function getSubStr(str){
  var substr = [];
  for (var i = 0; i < str.length; i++) {
    //Es hasta <= str.length porque el substring incluye el primer parámetro
    //pero no el segundo, así que con uno más, llegaremos al último valor
    //ejemplo "abc" = a, ab, abc, b, bc, c
    for (var j = i+1; j <= str.length; j++) {
      substr.push(str.substring(i,j));
    }
  }
  return substr;
}


s = "afzaaaa";
console.log(substringLength(s));