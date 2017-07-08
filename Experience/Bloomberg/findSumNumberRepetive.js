/*
numbers = [5, 3, 6, 7, 3, 5, 5, 2], target = 8
-> solution = (5,3), (6,2), (3,5)
 
numbers = [1, 1, 1, 2, 2], target = 3 
 (1,2), (1,2)
*/

function findSumRepetiveNumbers(array, target){
    let hash = {};
    let result = [];
    let completement = 0;
    let element = 0;
    for(let i = 0; i < array.length; i++){
        element = array[i];
        complement = target - element;
        //Podemos usar un número y no volverlo a usar, para esto creamos 
        //un hash con un arreglo de todos los índices en donde aparece el
        //elemento
        if(complement in hash && (hash[complement].length > 0)){
          //Si encontramos el elemento lo sacamos de nuestro hash para 
          //asegurarnos que no se puede volver a usar, como tiene el index
          //sacamos el número de nuestro arreglo original
            result.push('(' + element +',' + array[hash[complement].pop()]+')');
        }else{
            //Si el element ya está en el hash, actualizamos el nuevo index
            //en dónde se encontró el número
            if(hash[element]){
                hash[element].push(i);
            }else{ //Si no está en el hash lo agregamos
             hash[element] = [i];   
            }
        }
    }
    return result.join();
}

 
 
numbers = [5, 3, 6, 7, 3, 5, 5, 2];
target = 8;
console.log(findSumRepetiveNumbers(numbers, target))