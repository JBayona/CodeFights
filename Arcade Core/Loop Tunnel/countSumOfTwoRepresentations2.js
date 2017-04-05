/*
Given integers n, l and r, find the number of ways to represent n as a sum of two integers A and B such that l ≤ A ≤ B ≤ r.

Example

For n = 6, l = 2 and r = 4, the output should be
countSumOfTwoRepresentations2(n, l, r) = 2.

There are just two ways to write 6 as A + B, where 2 ≤ A ≤ B ≤ 4: 6 = 2 + 4 and 6 = 3 + 3.

https://codefights.com/arcade/code-arcade/loop-tunnel/hBw5BJiZ4LmXcy92u
*/

/*
A+B = n -> n - B = A
i comienza con el valor superior de B y lo itera hasta que el valor de i es menor o igual al valor inferior de B
Se hace la resta de N - B = A y se verifica que A sea mayor o igual a l, A sea menor o igual a R y que A no sea mayor a B
*/
function countSumOfTwoRepresentations2(n, l, r) {
    count = 0;
    for(var i = r; i >=  l; i--){
        if((n-i) >= l && (n-i) <= r && i >= (n-i)){ //La resta es A (n-i) = A
            count++;
        }
    }
    return count;
}

n = 6
l = 2
r = 4
console.log(countSumOfTwoRepresentations2(n,l,r));