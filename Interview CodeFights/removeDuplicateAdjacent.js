/*
Given a string s, recursively remove any adjacent duplicate characters that it contains.

Example

For s = "cooodefightssforrrcodee", the output should be
removeDuplicateAdjacent(s) = "cdefightfocod";
For s = "acaaabbbacdddd", the output should be
removeDuplicateAdjacent(s) = "acac".

https://codefights.com/interview/DT3wiw6t5mdjc2d2w
*/

function removeDuplicateAdjacent(s) {
  var result = '';
  var index = 0;
  var current = '';
  var count = 0;

  while(hasRepetitive(s)){
    s = removeRepetitiveChar(s,result,index, current, count);
    index = 0;
    current = '';
    result = '';
    count = 0;
  }
  return s;
}

function removeRepetitiveChar(s, result, index, current, count){
  current = s[index];
  if(current !== s[index+1]){
    if(count === 0){
      result += current;
    }else{
      count = 0;
    }
  }else{
    count++;
  }
  if(index === s.length){
    return result;
  }else{
    return removeRepetitiveChar(s, result, ++index, current, count)
  }
}

function hasRepetitive(s){
  for(var i = 0; i < s.length; i++){
    if(s[i] === s[i+1]){
      return true;
    }
  }
  return false;
}

s = "mississipie";
console.log(removeDuplicateAdjacent(s));



//Jraghon

//Basic idea:
// - The regex /(.)\1+/g matches all sets of repeated characters.
// - We can compare s to itself with all repeated characters removed;
//   - If they are the same, we are done and can return the string.
//   - If they are different, we should recurse and remove some more.

var removeDuplicateAdjacent = s =>
    s == (s = s.replace(/(.)\1+/g, "")) ? s : removeDuplicateAdjacent(s);
