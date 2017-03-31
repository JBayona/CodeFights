/*
Given a string, find the shortest possible string which can be achieved by adding characters to the end of initial string to make it a palindrome.

Example

For st = "abcdc", the output should be
buildPalindrome(st) = "abcdcba".

https://codefights.com/arcade/intro/level-10/ppZ9zSufpjyzAsSEx/description
*/

function buildPalindrome(st) {
  var array = [...''+st];
  var i = 0;
  var j = array.length-1;
  /*En el momento en que se crucen las variables ya terminamos
  de analizar y podemos regresar el resultado*/
  while(i < j){
  	/*Si no son iguales insertamos en la posción j+1 el elemento
  	de la izquierda que no es igual, debemos actualizar j sumándole
  	uno para que a la siguiente vuelta nos verifique que ahora son
  	iguales*/
    if(array[i] !== array[j]){
      array.splice(j+1,0, array[i]);
      j += 1;
    }else{
   	/*Si son iguales solo debemos recorrer las variables que recorren
   	de izquierda a derecha y derecha a izquierda*/
      i++;
      j--;
    }
  }
  return array.join('');
}

st = "ababab"
console.log(buildPalindrome(st));