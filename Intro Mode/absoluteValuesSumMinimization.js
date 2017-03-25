/*
Given a sorted array of integers a, find such an integer x that the value of

abs(a[0] - x) + abs(a[1] - x) + ... + abs(a[a.length - 1] - x)
is the smallest possible (here abs denotes the absolute value).
If there are several possible answers, output the smallest one.

Example

For a = [2, 4, 7], the output should be
absoluteValuesSumMinimization(a) = 4.

https://codefights.com/arcade/intro/level-7/ZFnQkq9RmMiyE6qtq/solutions


*/

function absoluteValuesSumMinimization(A) {
  var minimum = Infinity;
  var element;
  for (var i = 0; i < A.length; i++) {
    var sum = 0;
    for (var j = 0; j < A.length; j++) {
      sum += Math.abs(A[i] - A[j]);
    }
    if (sum < minimum) {
      minimum = sum;
      element = A[i];
    }
  }
  return element;
}

/*
function absoluteValuesSumMinimization(A) {
    return A[Math.ceil(A.length/2)-1];
}
*/

a = [2, 4, 7];
console.log(absoluteValuesSumMinimization(a))) //4

