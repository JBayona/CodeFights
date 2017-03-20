/*
Determine if the given number is a power of some non-negative integer.

Example

For n = 125, the output should be
isPower(n) = true;
For n = 72, the output should be
isPower(n) = false.
*/

function isPower(n) {
    if (n == 1) return 1;
    for(var i = 2; i <= n/2; i++){
        for(var j = 2; j <= n/2; j++){
            var res = Math.pow(i,j)
            if(res > n){ //No necesitamos analizar los demas si son mayores
                break;
            }else{
                if(res == n){
                    return true;
                }
            }
        }
    }
    return false;
}

n = 125;
console.log(isPower(n))