/*
Given a string, return its encoding defined as follows:

First, the string is divided into the least possible number of disjoint substrings consisting of identical characters
for example, "aabbbc" is divided into ["aa", "bbb", "c"]
Next, each substring with length greater than one is replaced with a concatenation of its length and the repeating character
for example, substring "bbb" is replaced by "3b"
Finally, all the new strings are concatenated together in the same order and a new string is returned.
Example

For s = "aabbbc", the output should be
lineEncoding(s) = "2a3bc".

https://codefights.com/arcade/intro/level-11/o2uq6eTuvk7atGadR/description
*/

function lineEncoding(s) {
  var result = '';
  var count = 1; //We start from 1 for the first letter
  for(var i = 0; i < s.length; i++){
    if(s[i] != s[i+1]){ 
      /*if is different of the next element we can concatenate the result,if is only
      one letter, we just print the letter or the number or letter if is bigger than one*/
      if(count > 1){
        result += count + s[i];
      }else{
        result += s[i];
      }
      /*We need start the counting from one again*/
      count = 1;
    }else{
      //Add the elements
      count++;
    }
  }
  return result;
}


s = "aabbbc" //"2a3bc"
console.log(lineEncoding(s));