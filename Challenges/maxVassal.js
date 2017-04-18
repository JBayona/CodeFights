/*
Given an integer number num, calculate the value of its maximum vassal. Number k is considered to be a vassal of num if:

k > 0;
k3 < num;
k3 has non-trivial divisors in common with num.
Example

For num = 42, the output should be
maxVassal(num) = 3.

33 = 27, and gcd(27, 42) = 3, so 3 is a vassal of 42. It's also the maximum one, since 43 = 64 ≥ 42.

https://codefights.com/challenge/kfNdzuQtQZ23MPDZx

*/

maxVassal = num=> {
  for(i = Math.pow(num, 1/3) | 0; i>=0; i--){
    //Non trivial solutions 
    for(j = 2; j <= i; j++){
      if(num%j == 0 && j*j*j <= num && i%j == 0){
        return i
      }
    }
  }
  return -1
}

num = 42;
console.log(maxVassal(num));