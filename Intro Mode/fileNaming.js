/*
You are given an array of desired filenames in the order of their creation. Since two files cannot have equal names, the one which comes later will have an addition to its name in a form of (k), where k is the smallest positive integer such that the obtained name is not used yet.

Return an array of names that will be given to the files.

Example

For names = ["doc", "doc", "image", "doc(1)", "doc"], the output should be
fileNaming(names) = ["doc", "doc(1)", "image", "doc(1)(1)", "doc(2)"].

https://codefights.com/arcade/intro/level-12/sqZ9qDTFHXBNrQeLC
*/

function fileNaming(names) {
  var result = [];
  var count = 0;
  var temp = '';
  //Set contiene valores únicos
  var set = new Set();
  names.forEach(function(item, index){
    /*Si no está en el set, lo agregamos y lo metemos
    a nuestro array del resultado*/
    if(!set.has(item)){
      set.add(item);
      result.push(item)
    }else{
      //Si está vamos a verificar los nombres del archivo
      count = 0;
      ++count;
      /*Siempre empezamos agregándole el (1) al nombre, si ya está,
      vamos a ir incrementando a (2), (3)... hasta que encontremos
      un espacio para meterlo a nuestro hash y al arreglo, cada nuevo
      resultado lo meteremos al hash y al array para que no se repita el
      nombre*/
      temp = item+'('+(count)+')';
      while(set.has(temp)){
        temp = item+'('+(count)+')';
        count++; 
      }
      set.add(temp);
      result.push(temp);
    }
  });
  return result;
}

names = ["a(1)", "a(6)", "a", "a", "a", "a", "a", "a", "a", "a", "a ", "a"];
//names = ["doc", "doc", "image", "doc(1)", "doc", "doc(1)"]
console.log(fileNaming(names));