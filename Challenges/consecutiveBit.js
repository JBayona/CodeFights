  /*
Given an integer num, write an algorithm that determines if the given number has consecutive 1s in its binary representation.

Example

For num = 3, the output should be
consecutiveBit(num) = true.

310 is 112, which contains a pair of consecutive 1s.

For num = 21, the output should be
consecutiveBit(num) = false.

2110 is 101012, which contains no consecutive 1s.

https://codefights.com/challenge/fW66dxr49QERhv8KK
  */

function consecutiveBit(num) {
  var flag = false;
  var array = num.toString(2).split('').map(Number);
  for(var i = 0; i < array.length; i++){
    if(flag && array[i] == 1){
      return true
    }else if(flag && array[i] !== 1){
      flag = false
    }else if(flag == false && array[i] == 1){
      flag = true;
    }
  }
  return false;
}

num = 3;
console.log(consecutiveBit(num));