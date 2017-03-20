/*
The string s contains dashes that split it into groups of characters. You are given an integer k that represents the number of characters in groups that your output should have. Your goal is to return a new string that breaks s into groups with a length of k by placing dashes at the correct intervals. If necessary, the first group of characters can be shorter than k. It is guaranteed that there are no consecutive dashes in s.

Example

For s = "2-4a0r7-4k" and k = 4, the output should be
stringReformatting(s, k) = "24a0-r74k";

The input string "2-4a0r7-4k" is split into three groups with lengths of 1, 5 and 2. Since k = 4, you need to split the string into two groups of 4 characters each, making the output string "24A0-R74k".

For s = "2-4a0r7-4k" and k = 3, the output should be
stringReformatting(s, k) = "24-a0r-74k".

Given the same input string and k = 3, split the string into groups of 2, 3, and 3 characters to get the output string of "24-a0r-74k".

*/

/*function stringReformatting(s,k){
  var result = '';
  s = s.replace(/-/g,'');
  let first = 0;
  let flagFirst = true;
  var count = 0;
  let element;
  if((s.length)%k == 0){
    flagFirst = false;
  } else{
    first = (s.length)%k;
    flagFirst = true
  }
  for(var i = 0; i < s.length; i++){
    element = s[i];
    if(flagFirst && (count%first) == 0 && i != 0){
      result += '-';
      result += element;
      flagFirst = false;
      count=1;
    }else if(!flagFirst && count%k == 0 && i != 0){
      result += '-';
      result += element;
      count++;
    }else{
      result += element;
      count++;
    }
  }
  return result;
}*/

//Es buena idea recorrer el arreglo de atras en problemas que se 
//necesite que el primer numero tenga o pueda tener un orden diferente
//en este caso lo recorremos hacia atras y evitamos validaciones extra
function stringReformatting(s, k) {
    var s = s.replace(/-/g, "");
    var result = [];
    var element = 0;
    index = 0;
    for(var i=s.length-1; i>=0; i--){
        element = s[i];
        index++;
        result.unshift(element);
        if((index)%k == 0 && i!=0){ //La verificacion de i distinto de pero
          //Para que no lo ponga si ya no hay mas elementos
            result.unshift('-');
        }
    }

    return result.join("");
}

s = "2-4a0r7-4k"; //24a0-r74k
k = 4;
console.log(stringReformatting(s,k));
