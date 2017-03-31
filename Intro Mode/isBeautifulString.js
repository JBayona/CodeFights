/*
A string is said to be beautiful if b occurs in it no more times than a; c occurs in it no more times than b; etc.

Given a string, check whether it is beautiful.

Example

For inputString = "bbbaacdafe", the output should be
isBeautifulString(inputString) = true;
For inputString = "aabbb", the output should be
isBeautifulString(inputString) = false;
For inputString = "bbc", the output should be
isBeautifulString(inputString) = false.

https://codefights.com/arcade/intro/level-10/PHSQhLEw3K2CmhhXE/description
*/

function isBeautifulString(inputString) {
  var array = new Array(26).fill(0);
  //a - 97 ASCII code, z - 122 
  /*Sacamos el valor del asci y le restamos 97 para ponerlo en su posicón.
  por ejemplo si viene a, a = 97 entonces 97-07 = 0, "a" está en la casilla cero,
  "b" en la 1, "c" en la dos y así sucesivamente*/
  for(var i = 0; i < inputString.length; i++){
    array[inputString[i].charCodeAt() - 97]++;
  }
  /*Para determinar si está mal empezamos desde 1 porque no tiene caso
  que empecemos desde cero y comparamos que no sea mayor al anterior*/
  for(var i = 1; i < array.length; i++){
    if(array[i] > array[i-1]){
      return false;
    }
  }
  return true;
}

inputString = "bbbaa"
console.log(isBeautifulString(inputString));