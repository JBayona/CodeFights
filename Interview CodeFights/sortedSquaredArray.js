/*
Note: Come up with a linear solution, since that is what you would be asked to do in an interview.

You have a sorted array of integers. Write a function that returns a sorted array containing the squares of those integers.

Example

For array = [-6, -4, 1, 2, 3, 5], the output should be
sortedSquaredArray(array) = [1, 4, 9, 16, 25, 36].

The array of squared integers from array is: [36, 16, 1, 4, 9, 25]. When sorted, it becomes: [1, 4, 9, 16, 25, 36].

https://codefights.com/interview/GRGRoSLJnKKijH4vA
*/

function sortedSquaredArray(array) {
   var a = 0;
   var b = array.length-1;
   var result = [];
   for(var i = array.length-1; i>= 0; i--){
      var n = array[-array[a] > array[b] ? a++ : b--];
      result[i] = n*n;
   }
   return result;
}


array = [-6, -4, 1, 2, 3, 5];
console.log(sortedSquaredArray(array));