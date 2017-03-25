/*
Given a string, find the number of different characters in it.

Example

For s = "cabca", the output should be
differentSymbolsNaive(s) = 3.

There are 3 different characters a, b and c.
*/

differentSymbolsNaive = s => 
     [...''+s].filter((item,index,array) => array.indexOf(item) === index).length;


//Opcion 2
function differentSymbolsNaive(s) {
  return new Set(s).size
}

s = "cabca"
console.log(differentSymbolsNaive(s));