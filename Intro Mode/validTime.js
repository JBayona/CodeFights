/*
Check if the given string is a correct time representation of the 24-hour clock.

Example

For time = "13:58", the output should be
validTime(time) = true;
For time = "25:51", the output should be
validTime(time) = false;
For time = "02:76", the output should be
validTime(time) = false.

https://codefights.com/arcade/intro/level-12/ywMyCTspqGXPWRZx5/description

*/

function validTime(time) {
  var time = time.split(':');
  var hh = time[0];
  var mm = time[1];

  if(hh.length != 2 && mm.length !=2){
    return false;
  }

  if((hh >= '0' && hh <= '23') && (mm >= '0' &&  mm <= '59')){
    return true;
  }else{
    return false;
  }
}

time = "13:58";
console.log(validTime(time));