/*
You created an awesome array a, but some hooligan removed one element from it, shuffled it and returned it to you as array b.
Given arrays a and b, your task is to figure out what element was removed from a
*/

//Opcion 1 - Ordenar ambos arreglos y retornar el elemento en "a" cuando sea diferente
function findOnlyDiffChar(a, b) {
  a = customSort(a);
  b = customSort(b);
  for(var i = 0; i < a.length; i++){
    if(a[i] != b[i]) return a[i];
  }
}

customSort = array => array.sort((a,b) => a -b);

//Opcion  2 - sumar los elementos de ambos arreglos y retornar el resultado de la resta de a - b

function findOnlyDiffChar(a, b) {
  return sum(a) - sum(b);
}

sum = array => array.reduce((p,c) => p += c)

a =[1, 2, 3, 4];
b = [3, 1, 2];
console.log(findOnlyDiffChar(a,b));