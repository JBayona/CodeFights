/*
Dado un array, obtener todos los números impar que sean menor o iguales
y los impares que sean divisores exactos se deben de sumar
*/

countSum = numbers => {
  let result = 0;
  for(let i = 0; i < numbers.length; i++){
    result += getFactors(numbers[i]);
    //console.log(getFactors(numbers[i]))
  }
  return result;
}

/*Obtenemos los factores y solo nos interesan
los que sean numeros impares*/
/*Otra forma es hacer un for de 1 hasta Math.sqrt(n) e
ir de uno en uno*/
getFactors = n => {
  //let factors = [];
  let sum = 0;
  for (let i=1; i <= Math.sqrt(n); i++){
    if(n%i === 0){
      //Odd
      if(i & 1){
        //factors.push(i);
        sum += i;
      }
      if(i !== Math.sqrt(n) && ((n/i)&1)){
        //factors.push(n/i);
        sum += n/i;
      }
    }
  }
  return sum;
  //return factors;
}

//arr = [1,3,20];
arr = [21,11,7];
console.log(countSum(arr));