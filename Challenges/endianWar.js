/*
Example

For expression = 73+42=16, the output should be
endianWar(expression) = true.

In the little-endian decimal format, the expression becomes 37 + 24 = 61, which is correct.

For expression = "5+8=13", the output should be
endianWar(expression) = false.

In the little-endian decimal format, the result of the expression should be 31.

https://codefights.com/challenge/ChcFLSa3rfJsKNgkC

*/

function endianWar(expression) {
  //a+b=c
  var a = expression.slice(0, expression.indexOf('+'));
  var b = expression.slice(expression.indexOf('+')+1, expression.indexOf('='));
  var c = expression.slice(expression.indexOf('=')+1);
  console.log(a,b,c)
  return parseInt(reverseInteger(a)) + parseInt(reverseInteger(b)) === parseInt(reverseInteger(c));
}

function reverseInteger(n){
  return [...n].reverse().join('');
}

expression = '73+42=16'
console.log(endianWar(expression));
