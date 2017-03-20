/*
You are given a positive integer N, your task is to calculate the total number of primes less than or equal to N with additional requirement that each digit of those primes should be a prime number itself.

Example

For N = 11, the output should be
primeDigits(11) = 4.
There are 5 primes less than N or equal to it: 2, 3, 5, 7 and 11. But there is a digit 1 (even two of them) in 11, and 1 is not a prime number. Thus, the answer is 4.
*/

/*Below is the source code of the functions for primality testing that are actually used on this page. This code works even faster than the fastest version listed above. Here only about a quarter of divisors under sqrt(n) are checked in the main for loop; the other three-quarters (multiples of 2, 3, or 5) are immediately eliminated in the initial checks, before entering the for loop:
*/

//http://www.javascripter.net/faq/numberisprime.htm

function primeDigits(N) {
    var result = 0;
    for(var i = 1; i <= N; i++){
        if(isPrime(i)){
            splitPrime = [...''+i].map(Number);
            //console.log(splitPrime);
            if(splitPrime.length > 1){
                for(var j = 0; j < splitPrime.length; j++){
                    if(!isPrime(splitPrime[j])){
                        break;
                    }
                    if(j == splitPrime.length - 1)result++;
                }
            }else{
                result++;
            }
        }
    }
    return result;
}


var isPrime = function(n) {
 if (isNaN(n) || !isFinite(n) || n%1 || n<2) return false; 
 if (n==leastFactor(n)) return true;
 return false;
}

// leastFactor(n)
// returns the smallest prime that divides n
//     NaN if n is NaN or Infinity
//      0  if n=0
//      1  if n=1, n=-1, or n is not an integer

var leastFactor = function(n){
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

N = 7;
console.log(primeDigits(N));


//Opcion 2, mas lenta que la primera pero con menos codigo


function primeDigits(N) {
    //arrayPrime = [];
    var result = 0;
    for(var i = 1; i <= N; i++){
        if(isPrime(i)){
            //arrayPrime.push(i);
            splitPrime = [...''+i].map(Number);
            //console.log(splitPrime);
            if(splitPrime.length > 1){
                for(var j = 0; j < splitPrime.length; j++){
                    if(!isPrime(splitPrime[j])){
                        break;
                    }
                    if(j == splitPrime.length - 1)result++;
                }
            }else{
                result++;
            }
        }
    }
    return result;
}

function isPrime(n) {
 if (n%1 || n<2) return false; 
 var m=Math.sqrt(n);
 for (var i=2;i<=m;i++) if (n%i==0) return false;
 return true;
}

N = 7;
console.log(primeDigits(N));