/*
Find the number of ways to express n as sum of some (at least two) consecutive positive integers.

Example

For n = 9, the output should be
isSumOfConsecutive2(n) = 2.

There are two ways to represent n = 9: 2 + 3 + 4 = 9 and 4 + 5 = 9.

For n = 8, the output should be
isSumOfConsecutive2(n) = 0.

There are no ways to represent n = 8.*/

function isSumOfConsecutive2(n) {
    var result = 0;
    var cont = 0;
    for(var i = 1; i <= n ; i++){
        result = i;
       for(var j = i+1; i <= n ; j++){
            result += j;
            if(result > n){
                result = 0;
                break;
            }else if(result == n){
                cont++;
                break;
            }
        }
    }
    return cont;
}


n = 9;
console.log(isSumOfConsecutive2(n))
