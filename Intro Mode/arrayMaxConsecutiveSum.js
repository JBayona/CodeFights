/*
Given array of integers, find the maximal possible sum of some of its k consecutive elements.

Example

For inputArray = [2, 3, 5, 1, 6] and k = 2, the output should be
arrayMaxConsecutiveSum(inputArray, k) = 8.
All possible sums of 2 consecutive elements are:

2 + 3 = 5;
3 + 5 = 8;
5 + 1 = 6;
1 + 6 = 7.
Thus, the answer is 8.

https://codefights.com/arcade/intro/level-8/Rqvw3daffNE7sT7d5
*/

//Opcion 1
function arrayMaxConsecutiveSum(inputArray, k) {
    var sum = 0;
    var max = 0;
    for (var i = 0; i < inputArray.length; i++) {
        if (i >= k){ /*Cuando i sea igual o mayor a k significa que ya formamos
          k elementos consecutivos en nuestra suma, entonces hacemos la resta para recorrer
          el elemento y eso se hace con la resta de input[i-k] que tomará el siguiente
          elemento y lo sumara con el consecutivo, por eso hacemos la resta, para no
          recorrerlo y no contemplar el siguiente elementos*/
          sum -= inputArray[i - k]; //Recorre el elemento
        }
        sum += inputArray[i];
        if (sum > max){
          max = sum;
        }
    }
    return max;
}

inputArray = [2, 3, 5, 1, 6];
k = 2;
console.log(arrayMaxConsecutiveSum(inputArray,k));

//Opcion 2

/*function arrayMaxConsecutiveSum(inputArray, k) {
  var sum = 0;
  var max = 0;
    for(var i = 0; i < inputArray.length; i++){
      if(i+k > inputArray.length){
        return max; //No necesitamos analizar todos si hemos pasado la longitud 
        //del array
      }
      sum = getSum(inputArray.slice(i,i + k));
      max = sum > max ? sum : max;
    }
    return max; //In case we only need one element
}

getSum = array => array.reduce((prev,curr) => prev += curr);*/
