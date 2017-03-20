/*
Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.

Example

For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190].
*/

function sortByHeight(a) {
  //Obtengo un array sin -1 y ordenados, es decir [150,160,170,180,190]
  var clean = a.filter(item => item != -1).sort((a,b) => a-b);
  //Una vez ordenado regreso mi respuesta creando un array nuevo en donde
  //cada vez que encuentre que un elemento es distinto de -1, signfica que
  //debo poner uno de mis elementos ordenados, así se forma el arreglo ordenado
  return a.map((item,index) => item != -1 ? clean.shift() : -1);
}

a = [-1, 150, 190, 170, -1, -1, 160, 180];
console.log(sortByHeight(a));