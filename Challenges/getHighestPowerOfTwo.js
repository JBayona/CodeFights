/*
Let H(N) be the highest power of 2 that divides N. For example, H(1) = 0, since the highest power of 2 that divides 2 is 20 = 1, and H(6) = 1, since 21 divides 6, but 22 does not.

For the given N, find the sum of H(K) for all K in range [1, N].

Example

For N = "1", the output should be
countHighestPower(N) = "0".

The sum consists of a single element H(1) = 0.

For N = "10", the output should be
countHighestPower(N) = "8".

The answer equals H(1) + H(2) + H(3) + ... + H(10) = 0 + 1 + 0 + 2 + 0 + 1 + 0 + 3 + 0 + 1 = 8.
*/

//Opcion 1
//sum = 0;
function countHighestPower(N) {
    for(var i = 2; i <= N; i*=2){
        sum += Math.floor(N/i);
    }
    return ''+sum;
}

//Opcion 2
function countHighestPower(N) {
    return ''+getHighestPower(N,2);
}

function getHighestPower(N,i) {
    if(i > N){
        return 0;
    }else{
        return Math.floor(N/i) + getHighestPower(N, i*2)
    }
}

//Opcion 2 reducido
countHighestPower = N => ''+getHighestPower(N,2);

getHighestPower = (N,i) => i > N ? 0 : Math.floor(N/i) + getHighestPower(N, i*2)

//Opcion 3
sum = 0;
i = 2;
function countHighestPower(N) {
    if(i <= N){
        sum += Math.floor(N/i);
        i*=2;
        return countHighestPower(N);
    }else{
        return ''+sum;
    }
}

n = "10000000000"
console.log(countHighestPower(n));