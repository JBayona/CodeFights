/*
Given a string of digits, return all of the possible letter combinations that the number could represent. 
The mapping of digits to letters is the same as you would find on a telephone's buttons, as in the example below:

https://codefights.com/interview/k77f4rHntp3NbzeXg/description

*/

function pressingButtons(buttons) {
  var len = buttons.length;
  var result = [];
  var map = {
    '1': [''],
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n','o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'],
  };
  if(len === 0) return result;
  //Al menos da una vuelta
  return genStrings([''], 0, len, buttons, map);
}

function genStrings(currentArr, index, len, buttons, map){
  var length = currentArr.length;
  var next = [];
  var temp = '';

  if(index === len) return currentArr;

  for(var i = 0; i < length; i++){
    for(var j = 0; j < map[buttons.charAt(index)].length; j++){
      temp = currentArr[i] + map[buttons.charAt(index)][j];
      next.push(temp);
    }
  }
  return genStrings(next, index+1, len, buttons, map);
}

buttons = "42";
console.log(pressingButtons(buttons));



