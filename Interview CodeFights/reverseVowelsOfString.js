/*
Write a function that takes a string as input and returns the string with only the vowels reversed.
Note: The letters "a", "e", "i", "o", and "u" are vowels. The letter "y" is not a vowel.

Example

For s = "hello, world", the output should be
reverseVowelsOfString(s) = "hollo, werld";
For s = "codefights", the output should be
reverseVowelsOfString(s) = "cidefoghts";
For s = "eIaOyU", the output should be
reverseVowelsOfString(s) = "UOaIye".
https://codefights.com/interview/9JbYrEhK9tz6ANKLC/description

*/

function reverseVowelsOfString(s) {
  var vowels = [];
  var result = '';
  for(var i = 0; i < s.length; i++){
    if(isVowel(s[i])){
      vowels.push(s[i]);
    }
  }
  vowels.reverse();
  for(var i = 0; i < s.length; i++){
    if(isVowel(s[i])){
      result += vowels.shift();
    }else{
      result += s[i];
    }
  }
  return result;
}


function isVowel(s){
  s = s.toLowerCase();
  if(s === 'a' || s === 'e' || s === 'i' || s === 'o' || s === 'u'){
    return true;
  }else{
    return false;
  }

}

s = "hello, world";
console.log(reverseVowelsOfString(s));