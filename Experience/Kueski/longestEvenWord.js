/*
Dado un string, regresar la cadena con longitud par más grande, para el caso
que no haya palabras con longitud impar, se debe retornar un '00'
*/

function longestEvenWord(sentence){
  sentence = sentence.split(' ');
  var max = 0;
  var i = 0;
  var oddWords = sentence.filter(word => word.length % 2 === 0);
  if(oddWords.length === 0) return '00';
  oddWords.forEach((word,index) => {
    if(word.length > max){
      max = word.length;
      i = index;
    }
  });
  return oddWords[i];
}

sentence = 'it is a pleasant day today';
console.log(longestEvenWord(sentence));