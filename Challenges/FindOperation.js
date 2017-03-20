/*Given a list of values, your task is to insert operators *, /, + and - between them so that the result of the equation would be equal to the given result. Return the correct equation as an answer.

It is guaranteed that each test case has exactly one solution.

Example

For values = [1, 3, 2, 3] and result = 1, the output should be
findOperation(values, result) = "1 / 3 + 2 / 3 = 1".

Input/Output

[time limit] 4000ms (js)
[input] array.integer values

Constraints:
2 ≤ values.length ≤ 8,
0 ≤ values[i] ≤ 99.
*/


findOperation = _ = (v, r) => 
eval(e = v.reduce((a, b) =>
    a + ` ${'+-*/'[Math.random()*4|0]} ` + b
)) - r
? _(v, r) 
: e + ' = ' + r
