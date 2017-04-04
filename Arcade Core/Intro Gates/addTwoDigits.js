/*
You are given a two-digit integer n. Return the sum of its digits.

Example

For n = 29, the output should be
addTwoDigits(n) = 11.

https://codefights.com/arcade/code-arcade/intro-gates/wAGdN6FMPkx7WBq66
*/

//Opcion 1
addTwoDigits = n => [...n+''].map(Number).reduce((p,c) => p+=c);

//Opcion 2
function addTwoDigits(n){
  result = 0;
  while(n != 0){
    result += n % 10;
    n = Math.floor(n/10);
  }
  return result;
}

n = 29
console.log(addTwoDigits(n));
