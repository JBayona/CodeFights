/*
Given a string, replace each its character by the next one in the English alphabet (z would be replaced by a).

Example

For inputString = "crazy", the output should be
alphabeticShift(inputString) = "dsbaz".
*/

function alphabeticShift(inputString) {
  // a - 97
  // z - 122
  var str = '';
  for(var i = 0; i < inputString.length; i++){
    ascii = inputString[i].charCodeAt(0) + 1; //Te problem description need the next letter
    ascii = ascii > 122 ? ascii - 26 : ascii //if the next is bigger than 122, means that we have
    //exceed, so we need to rest 26 (number of letters in the alphabet)
    str += String.fromCharCode(ascii); //Get the letter based on the ASCII code
  }
  return str;
}


inputString  = "crazy";
console.log(alphabeticShift(inputString));