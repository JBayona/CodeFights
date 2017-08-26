//Encontrar todos los pares que te den el numero dado

function findAllPairSum(array, num) {
  var hash = {}; //En esta variable iremos metiendo los elementos analizados
  var results = {}; //Aqui se alamacenaran los pares de resultados como clave y valor
  var complement = 0;
  var element = 0;
  for(let i = 0; i < array.length; i++){
    element = array[i];
    if(element <= num){
      complement = num - element;
      if(complement in hash) results[element] = complement //Se meten los dos resultados
      else hash[element] = i; //Almacenamos el elemento con su index
    }
  }

  //Format result
  for(var prop in results){
    console.log(prop + ' + ' + results[prop] + ' = ' + (parseInt(prop)+parseInt(results[prop])));
  }
  return results;
}


num = [4,5,7,4,1,6,8,0,7,10,2,5,3,56,23,54];
target =  8;
console.log(findAllPairSum(num, target));