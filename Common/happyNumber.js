function isHappy(n){
  var store = {};
  while(!(n in store) && n!== 1){
    store[n] = n;
    n = sumNumber(n*1); //Parse
  };
  return n === 1;
}

function sumNumber(n){
  var sum = 0;
  while(n){
    sum += Math.pow((n%10),2);
    n = Math.floor(n/10);
  }
  return sum;
}


n = 19;
console.log(isHappy(n));