/*
Given some integer, find the maximal number you can obtain by deleting exactly one digit of the given number.

Example

For n = 152, the output should be
deleteDigit(n) = 52;
For n = 1001, the output should be
deleteDigit(n) = 101.

https://codefights.com/arcade/intro/level-11/vpfeqDwGZSzYNm2uX/solutions/nGZQD4ze4KwLeyQA3
*/

//Opcion 1
function deleteDigit(n) {
    s = n.toString();
    res = '0'
    for (var i=0;i<s.length;i++) {
        x = s.slice(0,i) + s.slice(i+1,s.length);
        if (x>res) res = x;
    }
    return Number(res);
}

//Opcion 2
function deleteDigit(n) {
  var result = [];
  n = ''+n;
  for(var i = 0; i < n.length; i++){
    result.push(parseInt(removeChar(i,n)));
  }
  //console.log(result);
  return Math.max(...result);
}

removeChar = function(index, string){
  result = "";
  for(var i = 0; i < string.length; i++){
    if(index != i){
      result += string[i];
    }
  }
  return result;
}

//Opción 3

function deleteDigit(n) {
    var answer = 0,
        digits = [];
    while (n) {
        digits.push(n % 10); // digits = [2,5,1]
        n = Math.floor(n / 10);
    }
    //Ciclo para saber que elemento va a ignorar
    for (var deletedIndex = 0; deletedIndex < digits.length; deletedIndex++) {
        //Variable para obtener la suma de los elementos
        var number = 0;
        //Empieza de atrás en adelante, es decir 1,5,2
        for (var i = digits.length - 1; i >= 0; i--) {
            if (i !== deletedIndex) {
                /*
                En este ciclo se hace lo siguiente en base al index
                number = (1*10) + 5 = 15
                number = (1*10) + 2 = 12
                number = (5*10) + 2 = 52
                */
                number = number * 10 + digits[i];
            }
        }
        //Se almacena el mayor por cada iteración del index a eliminar
        answer = Math.max(number, answer);
    }
    return answer;
}

n = 152;
console.log(deleteDigit(n));