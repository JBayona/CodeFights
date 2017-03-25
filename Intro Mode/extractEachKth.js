/*
Given array of integers, remove each kth element from it.

Example

For inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] and k = 3, the output should be
extractEachKth(inputArray, k) = [1, 2, 4, 5, 7, 8, 10].

https://codefights.com/arcade/intro/level-8/3AgqcKrxbwFhd3Z3R/description

*/

function extractEachKth(inputArray, k) {
    return inputArray.filter((item, index) => (index+1)%k !=0 );
}

inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
k = 3
console.log(extractEachKth(inputArray,k));