/*
Given an array of integers, find the maximum possible sum you can get from one of its contiguous subarrays. 
The subarray from which this sum comes must contain at least 1 element.

Example

For inputArray = [-2, 2, 5, -11, 6], the output should be
arrayMaxConsecutiveSum2(inputArray) = 7.

The contiguous subarray that gives the maximum possible sum is [2, 5], with a sum of 7.

https://codefights.com/interview/7TyXopDTvYArEDA7u/description
*/

function arrayMaxConsecutiveSum2(inputArray){
    var max = -1e9;
    var sum = 0;
    for (var i = 0; i < inputArray.length; i++) {
         sum += inputArray[i]
         if (sum > max){
            max = sum;
         }
         /*Si son números negativos, sabemos
         que podemos eliminarlos y comenzar la suma*/
         if (sum < 0){
            sum = 0;
         }
    }
    return max;
}


inputArray = [-3, -2, -1, -4]
console.log(arrayMaxConsecutiveSum2(inputArray));