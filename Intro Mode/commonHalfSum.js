/*
Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

Given a ticket number n, determine if it's lucky or not.

Example

For n = 1230, the output should be
isLucky(n) = true;
For n = 239017, the output should be
isLucky(n) = false.
*/

function isLucky(n) {
  var first = 0;
  var second = 0;
  str = ''+n;
  for(var i = 0; i < str.length; i++){
  	//El arreglo siempre es par y en nuestro array empezamos a contar desde
  	//el cero, entonces el index a la mitad siempre es el floor de el tam-1/2
    if(i <= Math.floor((str.length-1)/2)){
      first += str[i]*1;
    }else{
      second += str[i]*1;
    }
  }
  return first == second;
}


n = 1230;
console.log(isLucky(n));