/*
Sort the letters in the string s by the order they occur in the string t.

Example

For s = "weather" and t = "therapyw", the output should be
sortByString(s, t) = "theeraw";

For s = "good" and t = "odg", the output should be
sortByString(s, t) = "oodg".

https://codefights.com/interview/myCQFF3mJ9nx7z6cJ/description
*/

function sortByString(s, t) {
  var hash = {};
  var element = '';
  var result = '';
  for(var i = 0; i < s.length; i++){
    element = s[i];
    if(element in hash){
      hash[element]++;
    }else{
      hash[element] = 1;
    }
  }

  //Format output
  for(var i = 0; i < t.length; i++){
    element = t[i];
    if(element in hash){
      result += element.repeat(hash[element]);
    }
  }
  return result;
}

//Basic idea: Map each letter to a number,
//  based on its index in t

function sortByString(s, t) {
    var map = {};
    [...t].map( (e,i) => map[e] = i );
    return [...s].sort( (a,b) => map[a]-map[b] ).join``;
}


s = "weather";
t = "therapyw";
console.log(sortByString(s,t));