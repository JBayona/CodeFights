function josephCircle(n){
  var power = 0;
  var remaining = 0;
  //Formula
  // n = 2^a + l (donde a es la potencia maxima de dos que cabe en el numero y l es el sobrante para llegar al numero)
  //Sabemos que con potencias de dos, siempre el primer tirador es el que sobrevive
  //result = 2l + 1
  power = getHighestPower(n);
  remaining = n - Math.pow(2,power);
  return (2*remaining) + 1;
}

//Recursive function to get the highest power in the number of two
getHighestPower = (n, i = 0, result = 0) => 1 << i <= n ? getHighestPower(n, ++i, i-1) : result 

/*function getHighestPower(n){
  i = 0;
  power = 0;
  while(1 << i <= n){
    power = i;
    i++;
  }
  return power;
}*/

n = 4099;
console.log(josephCircle(n));
