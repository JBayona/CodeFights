/*
Reversing an array can be a tough task, especially for a novice programmer. Mary just started coding, so she would like to start with something basic at first. Instead of reversing the array entirely, she wants to swap just its first and last elements.

Given an array arr, swap its first and last elements and return the resulting array.

Example

For arr = [1, 2, 3, 4, 5], the output should be
firstReverseTry(arr) = [5, 2, 3, 4, 1].

https://codefights.com/arcade/code-arcade/list-forest-edge/ND8nghbndTNKPP4Tb
*/

//Opción 1 ES6
function firstReverseTry(array1) {
    [array1[0],array1[array1.length-1]] = [array1[array1.length-1],array1[0]]
     return array1;
}

//Opción 2
function firstReverseTry(arr) {
    if(arr.length == 0) return [];
    temp = arr[0];
    arr[0] = arr[arr.length-1];
    arr[arr.length-1] = temp;
     return arr;
}