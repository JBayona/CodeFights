/*
Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

Example

For inputArray = [3, 6, -2, -5, 7, 3], the output should be
adjacentElementsProduct(inputArray) = 21.

7 and 3 produce the largest product.
*/

function adjacentElementsProduct(inputArray) {
    var mayor = inputArray[0] * inputArray[1];
    var element = 0;
    if(inputArray.length < 2){
      return inputArray[0];
    }
    for(var i = 0; i < inputArray.length-1; i++){
        element = inputArray[i] * inputArray[i+1];
        mayor = element > mayor ? element : mayor
    }
    return mayor;
}

arr = [1, -1, -1];

console.log(adjacentElementsProduct(arr));