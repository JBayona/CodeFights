/*
Find the leftmost digit that occurs in a given string.

Example

For inputString = "var_1__Int", the output should be
firstDigit(inputString) = '1';
For inputString = "q2q-q", the output should be
firstDigit(inputString) = '2';
For inputString = "0ss", the output should be
firstDigit(inputString) = '0'.

https://codefights.com/arcade/intro/level-8/rRGGbTtwZe2mA8Wov/description

*/

function firstDigit(inputString) {
  var array = inputString.split('');
  var index = 0;
  var element = 0;
  while(index < array.length){
    element = array[index];
    if(/\d/.test(element)){
      return element.toString();
    }
    index++;
  }
}

inputString = "var_1__Int";
console.log(firstDigit(inputString));