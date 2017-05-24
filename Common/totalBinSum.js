/*
/*
Given a number num in its binary representation, your task is to sum all the numbers in base 10 formed by the prefixes of num. 
More formally, sum up int(num[0, i]) for all possible i.
Since the answer can be very big, return it modulo 109 + 7.

Example

For bin = "1001", the output should be
totalBinSum(bin) = 16.

Here are all the prefixes:

12 = 110;
102 = 210;
1002 = 410;
10012 = 910.
Thus, the answer is 1 + 2 + 4 + 9 = 16.

https://codefights.com/challenge/prd5XH6KJtWPRva4w
*/

//Opción 1 
function totalBinSum(num) {
  var prev = 0;
  const BASE = 2;
  var sum = 0;
  var tmp = 0;
  const mod = Math.pow(10,9) + 7;
  for(var i = 0; i < num.length; i++){
    prev = (prev * 2 + (num [i]*1))% mod;
    sum = (sum + prev)%mod;
  }
  return sum;
}

//Opcion 2 recursivo
prev = 0;
sum = 0;
i = 0;
mod = Math.pow(10,9) + 7;
totalBinSum = num => {
  return getResult(num,prev,sum,i);
}

getResult = (num, prev, sum, i) => {
  if(i >= num.length) return sum;
  prev = (prev * 2 + (num [i]*1))% mod;
  sum = (sum + prev)%mod;
  return getResult(num, prev, sum, i+1);
}

bin = "1001";
console.log(totalBinSum(bin));
