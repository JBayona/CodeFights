/*
Numbers x and y (x ≠ y) are called friendly if the sum of proper divisors of x is equal to y, and the other way round.

Given two integers x and y, your task is to check whether they are friendly or not.

Example

For x = 220 and y = 284, the output should be
friendly_numbers(x, y) = "Yes".

The proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110, which add up to 284; and the proper divisors of 284 are 1, 2, 4, 71 and 142, which add up to 220.

*/

//Opcion 1

function friendly_numbers(x, y) {
  var factorX = getFactors(x);
  var factorY = getFactors(y);

  if(getSum(factorX) == getSum(factorY) && x != y){
    return "Yes";
  }else{
    return "No";
  }
  /*console.log(factorX);
  console.log(getSum(factorX));
  console.log(factorY);
  console.log(getSum(factorY));*/
}

getSum = array => array.reduce((curr,prev) => curr += prev);

getFactors = num => {
  var result = [];
  var i = 1;
  while(i <=  Math.sqrt(num)){
    if(num%i == 0){
      result.push(i);
      if(i != (num/i)){
        result.push(num/i);
      }
    }
    i++
  }
  return result;
}

x = 220;
y = 284;
console.log(friendly_numbers(x,y));

//Opcion 2 Regex

friendly_numbers = (x, y) => s(g(x)) == s(g(y)) && x != y ? "Yes" : "No"
s = a => a.reduce((c,p) => c += p)

g = n => {
  r = []
  i = 1
  while(i <=  Math.sqrt(n)){
    if(n%i == 0){
      r.push(i)
      if(i != (n/i))
        r.push(n/i) 
    }
    i++
  }
  return r
}