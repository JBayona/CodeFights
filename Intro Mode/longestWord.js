/*
Define a word as a sequence of consecutive letters. Find the longest word from the given string.

Example

For text = "Ready, steady, go!", the output should be
longestWord(text) = "steady".

https://codefights.com/arcade/intro/level-12/s9qvXv4yTaWg8g4ma/description
*/

//Opcion 1
function longestWord(text) {
  var answer = '';
  var current = [];

  for (var i = 0; i < text.length; i++) {
    //Mientras la letra este entre a y z ó entre A y Z
    if ('a' <= text[i] && text[i] <= 'z' || 'A' <= text[i] && text[i] <= 'Z') {
      current.push(text[i]);
      if (current.length > answer.length) {
        answer = current.join('');
      }
    } else { //Cuando no es una palabra, limpiamos el array para checar otra
      current = [];
    }
  }
  return answer;
}

//Opcion 2
/*function longestWord(text) {
  //Remove the special characteres
  var strWithoutSpecialChar = text.replace(/[^\w\s]/gi, '');
  var splitWords = strWithoutSpecialChar.split(" ");
  console.log(splitWords);
  var result = '';
  var tam = 0;
  splitWords.forEach((item) => {
    if(item.length > tam){
      tam = item.length;
      result = item;
    }
  });
  return result;
}*/

text = "Ready, steady, go! didn't";
console.log(longestWord(text));