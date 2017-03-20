/*
Given a string, find out if its characters can be rearranged to form a palindrome.

Example

For inputString = "aabb", the output should be
palindromeRearranging(inputString) = true.

We can rearrange "aabb" to make "abba", which is a palindrome.
*/

function palindromeRearranging(inputString) {
  var tam = inputString.length;
  var countObj = {};
  var elem = null;
  var oddValues = 0;
  //Count chars
  for(var i = 0; i < inputString.length; i++){
    elem = inputString[i];
    if(countObj[elem]){
      countObj[elem]++;
    }else{
      countObj[elem] = 1;
    }
  }

  //Podemos formar un palíndromo siempre y cuando no
  //tengamos más de un número impar en nuestro conteo
  for(var prop in countObj){
    if(countObj[prop] & 1){ //countObj[prop] % 2 == 0 
      oddValues++;
    }
  }
  return oddValues <= 1;
}

inputString = "aabb"
console.log(palindromeRearranging(inputString));
