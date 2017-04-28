/*
Define an alphabet reflection as follows: a turns into z, b turns into y, c turns into x, ..., n turns into m, m turns into n, ..., z turns into a.

Define a string reflection as the result of applying the alphabet reflection to each of its characters.

Reflect the given string.

Example

For inputString = "name", the output should be
reflectString(inputString) = "mznv".


https://codefights.com/arcade/code-arcade/lab-of-transformations/8nAgfjhDvKCpxwGWF/description
*/


function reflectString(inputString) {
  var result = '';
  for(var i = 0; i < inputString.length; i++){
    result += String.fromCharCode('z'.charCodeAt() - (inputString[i].charCodeAt() - 'a'.charCodeAt()));
  }
  return result;
}


inputString = "abyz";
console.log(reflectString(inputString));
