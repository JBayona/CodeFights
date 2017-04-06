/*
Determine whether the given string can be obtained by one concatenation of some string to itself.
Example

For inputString = "tandemtandem", the output should be
isTandemRepeat(inputString) = true;
For inputString = "qqq", the output should be
isTandemRepeat(inputString) = false;
For inputString = "2w2ww", the output should be
isTandemRepeat(inputString) = false.

https://codefights.com/arcade/code-arcade/book-market/2SDWWyHY9Xw5CpphY
*/
//Opcion 1
function isTandemRepeat(inputString) {
  if(inputString.length == 1 || inputString.length%2 == 1) return false
  var letterFirstWord = inputString[0];
  var indexFinalFistWord = inputString.lastIndexOf(letterFirstWord)-1;
  var firstWord = inputString.slice(0, indexFinalFistWord+1);
  var secondWord = inputString.slice(indexFinalFistWord+1);
  return firstWord === secondWord;
}

//Opcion 2
function isTandemRepeat(inputString) {
  if(inputString.length == 1 || inputString.length%2 == 1) return false
  var substr = inputString.substring(0, inputString.length/2);
  var regex = new RegExp(substr, 'g');
  var tmp  = inputString.replace(regex, '');
  console.log(tmp);
  return tmp == '';
}

//Opcion 3
function isTandemRepeat(inputString) {
    var middle = inputString.length / 2;
    return inputString.slice(0, middle) == inputString.slice(middle);
}

inputString = "tandemtandem"
console.log(isTandemRepeat(inputString));