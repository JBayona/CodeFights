/*
Given a collections of numbers, find the matching pair equal to the given sum. I.E

nums = [1,2,3,9] sum = 8
result = false

nums = [1,2,4,4] sum = 8
result = [4,4]

Suponemos que el arreglo de la lista está ordenada
*/

//en esta opción colocamos los valores en el primer elemento del array y en el ultimo, hacemos la suma de los elementos, si es menor
//significa que debemos recorrer el elemento de la izquierda, si es mayor, debemos regresar el elemento de la derecha, si es igual, hemos
//llegado al resultado.
function findPairSum(nums, sum) {
    var low = 0;
    var high = nums.length - 1;
    var result = 0;

    while(low < high){ //Mientras que el low sea menor que el high, esto resuelve que el array no esté vacío y así jamás entrara al loop
        result = nums[low]+nums[high];
        if(result == sum){
            return [nums[low],nums[high]];
        }else{
            if(result < sum )low++;
            else high--
        }
    }
    return false;
}

nums = [1,2,4,4];
sum = 8;
console.log(findPairSum(nums,sum))

//Si el arreglo no esta ordenado

//En esta opción recorremos todo el array, en el elemento actual vamos a verificar si hemos visto en nuestro arreglo de complemento el complemento
//para obtener la suma, si sí lo hemos visto hemos terminado, si no, almacenamos en nuestro array el complemento para analizarlo en los números
//posteriores.
function findPairSum(nums, sum) {
    var complement = [];
    for(var  i = 0; i < nums.length; i++){
        if(complement.includes(sum - nums[i])){
            //return true;
            return [sum - nums[i], nums[i]]
        }else{
            complement.push(nums[i]);
        }
    }
    return false;
}

nums = [6,4,2,5];
sum = 7;
console.log(findPairSum(nums,sum))
