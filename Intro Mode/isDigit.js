/*
Determine if the given character is a digit or not.

Example

For symbol = '9', the output should be
isDigit(symbol) = true;
For symbol = '-', the output should be
isDigit(symbol) = false.

https://codefights.com/arcade/intro/level-11/Zr2XXEpkBPtYWqPJu/description
*/

function isDigit(symbol) {
  return /\d/.test(symbol);
}

symbol = "9";
console.log(isDigit(symbol));