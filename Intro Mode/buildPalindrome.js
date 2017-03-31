/*
Given a string, find the shortest possible string which can be achieved by adding characters to the end of initial string to make it a palindrome.

Example

For st = "abcdc", the output should be
buildPalindrome(st) = "abcdcba".

https://codefights.com/arcade/intro/level-10/ppZ9zSufpjyzAsSEx/description
*/

function buildPalindrome(st) {
  var array = [...''+st];
  var i = 0;
  var j = array.length-1;
  while(i < j){
    if(array[i] !== array[j]){
      array.splice(j+1,0, array[i]);
      j += 1;
    }else{
      i++;
      j--;
    }
  }
  return array.join('');
}

st = "ababab"
console.log(buildPalindrome(st));