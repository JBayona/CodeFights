/*
Consider an arithmetic expression of the form A#B=C. Check whether it is possible to replace # with one of the four signs: +, -, * or / to obtain a correct expression.

Example

For A = 2, B = 3 and C = 5, the output should be
arithmeticExpression(A, B, C) = true.

We can replace # with a + to obtain 2 + 3 = 5, so the answer is true.

For A = 8, B = 2 and C = 4, the output should be
arithmeticExpression(A, B, C) = true.

We can replace # with a / to obtain 8 / 2 = 4, so the answer is true.

For A = 8, B = 3 and C = 2, the output should be
arithmeticExpression(A, B, C) = false.

8 + 3 = 11 ≠ 2;
8 - 3 = 5 ≠ 2;
8 * 3 = 24 ≠ 2;
8 / 3 = 2.(6) ≠ 2.
So the answer is false.

https://codefights.com/arcade/code-arcade/at-the-crossroads/QrCSNQWhnQoaK9KgK
*/

function arithmeticExpression(A, B, C) {
    var array = ['*','/','+','-'];

    var result = array.some(function(item,index){
        return eval('A'+item+'B') == C
    });
    return result;
}

//var array = ['*','/','+','-'];
//arithmeticExpression = (A, B, C) => array.some((item,index) => eval('A'+item+'B') == C)



A = 8
B = 3
C = 2
console.log(arithmeticExpression(A,B,C))