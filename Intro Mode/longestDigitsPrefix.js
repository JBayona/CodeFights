/*
Given a string, output its longest prefix which contains only digits.

Example

For inputString="123aa1", the output should be
longestDigitsPrefix(inputString) = "123".

https://codefights.com/arcade/intro/level-9/AACpNbZANCkhHWNs3/description
*/

function longestDigitsPrefix(inputString) {
    var result = "";
    i = 0;
    while(i < inputString.length){
      if(/\d/.test(inputString[i])){
        result += inputString[i];
      }else{
        return result;
      }
      i++;
    }
    return result;
}

function longestDigitsPrefix(inputString) {
    return inputString.match(/^\d*/)[0]
}

inputString="123aa1";
console.log(longestDigitsPrefix(inputString));