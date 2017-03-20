/*
Caesarian shift (Caesar cipher) is a method used in cryptography where a string message is encrypted by shifting the letters n times. For more information, see this wiki page.

You are given an integer n, which can be positive, negative or zero. Positive values indicate right shifts, and negative values indicate left shifts.

Given a message and n, return message encrypted by the shift n.

Example

For message = "abc" and n = 3, the output should be
caesarian(message, n) = "def".

"a", shifted to the right 3 times, becomes "d", "b" becomes "e" and "c" becomes "f".

For message = "egg" and n = -1, the output should be
caesarian(message, n) = "dff".
*/

//JS Option 1

alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
result = "";
alphalen = 26;
function caesarian(message, n) { //a - 97, z - 122
   alphabet =  alphabet.concat(alphabet); 
    
  [...message].map(function(element){
    origin = alphabet.indexOf(element);
    total =   (origin + ((n%26)+26)%26) //Si es positivo se cancela el +26 con el último %26, si es negativo lo hace positivo, va de un lado a otro
    //((origin + n)%26+26)%26
	result += alphabet[total];
  })
  return result;
  
  /*
  Ejemplo n=28
  ((n%length)+length)%length
  ((28%25)+25)%25
  ((3)+25)%25
  28%25 = 3 queda igual, esto beneficia para los negativos, que se hacen positivos (del 28 significa que debe recorrer 3 mas del límite de 25)
  
  Ejemplo para un número negativo n= -3
  ((n%length)+length)%length
  ((-3%25)+25)%25
  ((-3)+25)%25
  22%25 = 22 //Hacemos un módulo para que sea positivo y con esto ya ponemos desplazarnos para ambos lados dentro del array, izquierda y derecha
  
  La estrategia que se sigue es usar un doble array para los elementos que no se desborden y el módulo, con esas dos funciona
  */
/JS Check module and differences

alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
result = "";
alphalen = 26;
function caesarian(message, n) { //a - 97, z - 122
   alphabet =  alphabet.concat(alphabet); 
    
  [...message].map(function(element){
    origin = alphabet.indexOf(element);
    total =   (origin + ((n%26)+26)%26)
    result += alphabet[total];
  })
  return result;
}

/*function getIndex(index,letter){
  if(index > 25){
    index = index%alphalen
  }else if (index < 0){
     index = index%alphalen;
     index += alphalen;
  }
  return index%26;
}*/