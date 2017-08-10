/*Curried function*/

function sum(a){
  return function(b){
    return a + b;
  }
}

console.log(sum(4)(5)); //9

/*Another example curried funtion*/
square = n => Math.pow(n,2);
plusTwo = n => n + 2;

function compose(f,g){
  return function(val){
    return f(g(val));
  }
}

let squarePlus2 = compose(plusTwo,square)
console.log(squarePlus2(3)); //11
let plusTwoSquare = compose(square, plusTwo);
console.log(plusTwoSquare(3)); //25

/*Restriction curried example*/
number = () => 1;
function times(f,n){
  let count = 0;
  return function(){
    if(count < n){
      count += 1;
      return f();
    }else{
      return;
    }
  }
}

let numberPrint = times(number,3);
//typeof numberPrint => function
console.log(numberPrint()); //1
console.log(numberPrint()); //1
console.log(numberPrint()); //1
console.log(numberPrint()); //undefined

/*Adding modification*/
number = n => n;
function times(f,n){
  let count = 0;
  return function(value){
    if(count < n){
      count += 1;
      return f(value);
    }else{
      return;
    }
  }
}

let numberOfTimes = times(number,3);
console.log(numberOfTimes(5)); //5
console.log(numberOfTimes(5)); //5
console.log(numberOfTimes(5)); //5
console.log(numberOfTimes(5)); //undefined