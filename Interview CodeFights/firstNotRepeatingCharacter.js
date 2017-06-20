/*
Note: Write a solution that only iterates over the string once 
and uses O(1) additional memory, since this is what you would be asked to do
during a real interview.

Given a string s, find and return the first instance of a non-repeating character in it. 
If there is no such character, return '_'.

https://codefights.com/interview-practice/task/uX5iLwhc6L5ckSyNC/description
*/

//Option 1 - Map conserva el orden de inserción
function firstNotRepeatingCharacter(s) {
  //Con map se conserva el orden de inserción
  var map = new Map();
  var tmp = 0;
  for(var i = 0; i < s.length; i++){
    if(map.has(s[i])){
      tmp = map.get(s[i]);
      map.set(s[i], ++tmp);
    }else{
      map.set(s[i], 1);
    }
  }
  
  //Return the result
  for(var [key, value] of map){
    if(value === 1){
      return key;
    }
  }
  return '_';
}

s = "abacabad";
console.log(firstNotRepeatingCharacter(s));

/*Option 2 - En el primer recorrido del string contamos
los caracteres y en el segundo recorrido regresamos el
primero que tenga un conteo de 1*/
function firstNotRepeatingCharacter(s) {
  //Count the alphabet
  var alphabet = new Array(26).fill(0);
  var index = 0;

  for(var i = 0; i < s.length; i++){
    index = s[i].charCodeAt(0) - 'a'.charCodeAt(0);
    alphabet[index]++;
  }
  
  /*Recorremos la cadena de nuevo para ver que
  elemento salió primero en el conteo anterior*/
  for(var i = 0; i < s.length; i++){
    index = s[i].charCodeAt(0) - 'a'.charCodeAt(0);
    if(alphabet[index] === 1){
      return s[i];
    }
  }
  return "_";
}

s = "abacabad";
console.log(firstNotRepeatingCharacter(s));

//Option 3
//Una sola pasada al string
function firstNotRepeatingCharacter(s) {
  var sHash = {};
  for(var i = 0; i < s.length; i++){
    if(s[i] in sHash){
      sHash[s[i]].count++;
    }else{
      sHash[s[i]] = {count: 1, index: i};
    }
  }
  console.log(sHash);
  var minOrder = Number.MAX_VALUE;
  var minLetter = null;
  for(var prop in sHash){
    if(sHash[prop].count === 1){
      if(sHash[prop].index < minOrder){
        minOrder = sHash[prop].index;
        minLetter = prop;
      }
    }
  }
  if(!minLetter){
    return "_";
  }else{
    return minLetter;
  }
}

s = "abacabad";
console.log(firstNotRepeatingCharacter(s));