/*
Consider the following ciphering algorithm:

For each character replace it with its code.
Concatenate all of the obtained numbers.
Given a ciphered string, return the initial one if it is known that it consists only of lowercase letters.

Note: here the character's code means its decimal ASCII code, the numerical representation of a character used by most modern programming languages.

Example

For cipher = "10197115121", the output should be
decipher(cipher) = "easy".

Explanation: charCode('e') = 101, charCode('a') = 97, charCode('s') = 115 and charCode('y') = 121.


https://codefights.com/arcade/code-arcade/lab-of-transformations/dB9drnfWzpiWznESA/description
*/

function decipher(cipher) {
  var result = "";
  var num = '';
  var tmp = "";
  for(var i = 0; i < cipher.length; i++){
    tmp += cipher[i];
    num = parseInt(tmp);
    if(num >= 'a'.charCodeAt() && num <= 'z'.charCodeAt()){
      result += String.fromCharCode(num);
      tmp = '';
    }
  }
  return result;
}

cipher = "10197115121"
console.log(decipher(cipher));
