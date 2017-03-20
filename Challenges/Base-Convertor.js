/*
You've heard of bit.ly, ow.ly, and maybe even adf.ly? Well, today I am introducing CodeFightly!

Like those other companies, CodeFightly uses HTTP redirects to shorten URLs. Also like those other companies, they do so by assigning a "code" (e.g. 2bJzULM) to your long URL that can be used to look that long URL up when a visitor types the code in at the end of the short URL (e.g. http://bit.ly/2bJzULM).

The codes at CodeFightly are actually just incrementing numbers but they have been shortened by converting them into strings of letters. The CodeFightly engineers could have just made "a" = 0, "b" = 1, "ba" = 26 or something similarly simple. But, they wanted the codes to seem a little more random. So, they created a system where the letters (and other symbols) in the code are in a custom-ordered alphabet.

Your mission is the use this alphabet and a code to figure out what the next numerical code will be.

Example

For alphabet = "abcdefg" and code = "bbbb",
the output should be
CodeFightly(alphabet, code) = "bbbc".

For alphabet = "a1b2c3" and code = "b333",
the output should be
CodeFightly(alphabet, code) = "2aaa".

For alphabet = ".Calvin" and code = "nnnnn",
the output should be
CodeFightly(alphabet, code) = "C.....".

Note that the alphabets can have characters beyond just letters and that the next code might actually be longer than the previous one.
*/

//JS

function CodeFightly(alphabet, code) {
  result = [];
  var base = alphabet.length;
  
  //Obtenemos un array de los índices correspondientes ubicando la posición de los elementos en el array de alphabet
  var array = [...code].map(function(elem, index, array){
      return alphabet.indexOf(elem);
  });

  //Se convierte el arreglo de los índices que obtuvimos a la base que corresponda, en este caso es el tamaño de length, comenzando desde 0
  var transform = array.reduce(function(prev,current){
    return prev*base+current;
  });

  //Se suma 1 por el patrón del algoritmo del problema
  transform +=1;

  /*Se convierte de nuevo a como lo teníamos antes ya sumado, para esto es una función recursiva en donde los modulos del elemento
  |sumado va a toma la primera posición del array y así sucesivamente, el cociente se vuelve a usar para la función recursiva
  */
  var convert = accumulate(base,transform);
  /*Convert tiene nuestro array ya con los elementos correctos ahora con el map solo imprimimos en base al índice del array original y 
	así es como termina el patrón del algoritmo
  */

  var expect = convert.map(function(element,index){
      return [...alphabet][element];
  });

  return (expect.join('').replace(',',''));


}

//input = convert base
function accumulate(base,input){
  if(input == 0 ) return result;
  result.unshift(input%base); //El modulo se inserta en la primera posición y se vuelve a tomar el cociente hasta que sea cero
  return accumulate(base,Math.floor(input/base)) //base, cociente
}


//JS Reduce

CodeFightly = (a, c) => {
  r = []
  b = a.length
  t = [...c].map(z => a.indexOf(z)).reduce((p,x) => p*b+x)+1
  d = v(b,t)
  return (d.map((z,index) => [...a][z]).join('').replace(',',''))
}

v =(b,s) => {
  if(s == 0 ) return r
  r.unshift(s%b)
  return v(b,Math.floor(s/b))
}

//Haskell

import Data.Maybe
import Data.List

digits alpha code = map (\x -> fromJust $ elemIndex x alpha) code
tobase base arr = foldl (\a b -> a * base + b) 0 arr 
frombase base 0 = []
frombase base n = frombase base (quot n base) ++ [rem n base]

codeFightly alphabet code = 
  map (\x -> alphabet !! x) $ frombase base $ 1 + (tobase base (digits alphabet code))
  where base = length alphabet


//Haskell reduce

r z 0 = []
r z n = r z (quot n z) ++ [rem n z]
codeFightly a c = 
 (\b->[a !! x | x <- r b $ 1 + (foldl1 (\p c->p*b+c) [fromJust $ elemIndex x a|x <-c])]) $
 length a