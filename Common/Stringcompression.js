/*
Given a string, return its encoding defined as follows:

First, the string is divided into the least possible number of disjoint substrings consisting of identical characters
for example, "aabbbc" is divided into ["aa", "bbb", "c"]
Next, each substring with length greater than one is replaced with a concatenation of its length and the repeating character
for example, substring "bbb" is replaced by "3b"
Finally, all the new strings are concatenated together in the same order and a new string is returned.
Example

For s = "aabbbc", the output should be
lineEncoding(s) = "a2b3c".

https://codefights.com/arcade/intro/level-11/o2uq6eTuvk7atGadR
*/

function compression(str){
  var result = '';
  var count = 1;
  for(var i = 0; i < str.length; i++){
    if(str[i] != str[i+1]){
      if(count > 1){
        result += str[i] + count;
      }else{
        result += str[i];
      }
      count = 1;
    }else{
      count++;
    }
  }
  return result;
}


str = "aaabbccdaa";
console.log(compression(str));