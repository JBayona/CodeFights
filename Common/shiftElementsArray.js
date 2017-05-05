/*
Given k, shift k times the elements in the array
*/

function shiftElements(array, k){
  //Size of the original array
  var size = array.length;
  /*In this array we will have the shited array
  is an empty array with zeros, same size of the original*/
  var shifted = new Array(size).fill(0);
  //idx tendrá el index del primer elemento shifteado de nuestro array original
  var idx = ((size - k)%size + size)%size;
  for(var i = 0; i < array.length; i++){
    shifted[i] = array[idx];
    /*Avanzamos de uno en uno ya que el en arreglo empezamos a 
    iterar de la posición 0 y idx ya tiene el número de shift que
    queremos, entonces vamos consecutivamente*/
    idx = (idx + 1)%size;
  }
  return shifted
}

array = [1,2,3,4,5];
k = 2;
console.log(shiftElements(array, k));