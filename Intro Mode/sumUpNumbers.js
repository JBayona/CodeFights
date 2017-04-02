/*
CodeMaster has just returned from shopping. He scanned the check of the items he bought and gave the resulting string to Ratiorg to figure out the total number of purchased items. Since Ratiorg is a bot he is definitely going to automate it, so he needs a program that sums up all the numbers which appear in the given input.

Help Ratiorg by writing a function that returns the sum of numbers that appear in the given inputString.

Example

For inputString = "2 apples, 12 oranges", the output should be
sumUpNumbers(inputString) = 14.

https://codefights.com/arcade/intro/level-12/YqZwMJguZBY7Hz84T/description
*/

function sumUpNumbers(inputString) {
  var result = 0;
  var currentNumber = 0;

  for (var i = 0; i < inputString.length; i++) {
    if ('0' <= inputString[i] && inputString[i] <= '9') {
      //Convierte el n?mero en ascii y o resta con la tabla para sacar el valor
      // 0 - 48 y 9 - 57, entonces el "1" es = 49 - 48 = 1;
      //El currentNumber * 10 es para concatenar, por ejemplo el 12, as? los sacamos
      currentNumber = currentNumber * 10 + inputString.charCodeAt(i) - '0'.charCodeAt(0);
    }
    else {
      result += currentNumber;
      currentNumber = 0;
    }
  }
  result += currentNumber;

  return result;
}

function sumUpNumbers(inputString) {
  return (inputString.match(/\d+/g)||[]).reduce((a,b)=>a+ +b,0)
}

inputString = "2 apples, 12 oranges";
console.log(sumUpNumbers(inputString));