/*
Have you ever heard of an IQ-address? For the given integer n, it is calculated as follows:

Let result = "".
If n = 1, prepend "1" to the beginning of result and return it as an answer.
Prepend n % 10.5 to the beginning of result.
Divide n by 2 with rounding up to the nearest integer.
Go to step 2.
Given an integer n, your task is to return IQ-address generated from it.

Example

For n = 21, the output should be
iqAddress(n) = "12.03.06.00.50.0".

Here's why:

21% 10.5 = 0.0
11% 10.5 = 0.5
6 % 10.5 = 6.0
3 % 10.5 = 3.0
2 % 10.5 = 2.0
Thus, the answer is "1"+"2.0"+"3.0"+"6.0"+"0.5"+"0.0" = "12.03.06.00.50.0".
*/

function iqAddress(n){
    result = [];
    while(n != 1){
        result.push((n%10.5).toFixed(1));
        n /= 2;
        n = Math.round(n);
    }
    result.push('1')
    str = result.reverse().join('');
    console.log(str);
}

n = 21;
console.log(iqAddress(n))

iqAddress  = n => {
    r = []
    while(n != 1){
        r.push((n%10.5).toFixed(1))
         n = n / 2 + 0.5 | 0
    }
    r.push('1')
    return r.reverse().join('')
}

//Reduced

f = iqAddress = n =>
    n - 1 ? f(n + 1 >> 1) + (n % 10.5).toFixed(1) : '1'
