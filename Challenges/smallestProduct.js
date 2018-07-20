/*
Hi all, I have a tiny challenge for all of you today.
I was given some arrays of integers and my mission is to find the smallest product of 3 elements in an array.
I will need your help on this problem.

Please note that our integers can be negative and positive.

Examples

For arr = [1, 2, 3], the output should be smallestProduct(arr) = 6

The only option is 1 * 2 * 3 = 6.

For arr = [-1, 0, -2, 3], the output should be smallestProduct(arr) = 0

There are four possible products, and the smallest one is 0:

-1 * 0 * -2 = 0
-1 * 0 * 3 = 0
-1 * -2 * 3 = 6
0 * -2 * 3 = 0

https://app.codesignal.com/challenge/8FdeLisamv6cFZPAc
*/

function smallestProduct(arr) {
    arr = arr.sort((a,b) => a - b);
    let last = arr.length-1;
    let countNegative = 0;
    let op1 = arr[0] * arr[1] * arr[2]; // First three
    let op2 = arr[0] * arr[last] * arr[last-1]; // Second option (first + last two)

    // Count the number of negative numbers
    for(let i = 0; i < 3; i++) {
        if(arr[i] < 0) {
            countNegative++;
        }
    }
    
    if(countNegative <= 2 && countNegative > 0) {
        return op2;
    }
    
    if(countNegative === 3) {
        if(Math.abs(arr[1]) > Math.abs(arr[last])) {
            return op1;
        } else {
            return op2;
        }
    }
    
    // Only positive numbers (first three)
    return op1;
}
