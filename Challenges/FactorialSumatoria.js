/*
Input:
n: 1
Output:
Empty
Expected Output:
2
Console Output:
Empty

n: 2
Output:
Empty
Expected Output:
5
Console Output:
Empty

n: 3
Output:
Empty
Expected Output:
12
Console Output:
Empty
*/

addToFactorial = n => f(n) + n*(n+1)/2
f  = n => n == 0 ? 1 : n * (f(n - 1))