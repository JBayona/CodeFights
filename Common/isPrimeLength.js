/*
You are given a non-negative integer N, and your task is to find all the prime integers less than N. Write this numbers down as a string and return the length of the resulting string.

Example

For N = 13, the output should be
primeLength(13) = 6.

There are 5 primes less than N: 2, 3, 5, 7 and 11.
The combination string is 235711 which has the length of 6.
Thus, the final answer is 6.
*/

function primeLength(N) {
     str = '';
     for(i = 1; i < N; i++){
        if(isPrime(i)){
            str += i;
        }
     }
     return str.length;
}

isPrime = function(n) {
 if (isNaN(n) || !isFinite(n) || n%1 || n<2) return false; 
 if (n==leastFactor(n)) return true;
 return false;
}

leastFactor = function(n){
 if (isNaN(n) || !isFinite(n)) return NaN;  
 if (n==0) return 0;  
 if (n%1 || n*n<2) return 1;
 if (n%2==0) return 2;  
 if (n%3==0) return 3;  
 if (n%5==0) return 5;  
 var m = Math.sqrt(n);
 for (var i=7;i<=m;i+=30) {
  if (n%i==0)      return i;
  if (n%(i+4)==0)  return i+4;
  if (n%(i+6)==0)  return i+6;
  if (n%(i+10)==0) return i+10;
  if (n%(i+12)==0) return i+12;
  if (n%(i+16)==0) return i+16;
  if (n%(i+22)==0) return i+22;
  if (n%(i+24)==0) return i+24;
 }
 return n;
}

N = 330246
console.log(primeLength(N))