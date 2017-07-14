/*
Given an array strings, determine whether it follows the sequence given in the patterns array. In other words, there should be no i and j for which strings[i] = strings[j] and patterns[i] ≠ patterns[j] or for which strings[i] ≠ strings[j] and patterns[i] = patterns[j].

Example

For strings = ["cat", "dog", "dog"] and patterns = ["a", "b", "b"], the output should be
areFollowingPatterns(strings, patterns) = true;
For strings = ["cat", "dog", "doggy"] and patterns = ["a", "b", "b"], the output should be
areFollowingPatterns(strings, patterns) = false.

https://codefights.com/interview-practice/task/3PcnSKuRkqzp8F6BN/description
*/

//Opción 1
function areFollowingPatterns(strings, patterns){
  let hash = {};
  let seen = {};
  let string;
  let pattern;
  //Si no tienen el mismo tamaño no puede ser true
  if(strings.length !== patterns.length) return false;
  //Iteramos sobre nuestro string
  for(s in strings){
    string = strings[s];
    pattern = patterns[s];
    /*Usamos el pattern como key, si ya está definido
    debe tener la misma cadena, si no es falso*/
    if(hash[pattern]){
      if(hash[pattern] !== string) return false;
    }
    /*Puede darse el caso que sea un nuevo key pero con una
    cadena que ya usamos, no podemos hacer esto, aquí se 
    verifica si repiten key pero con el valor correcto, o un
    nuevo key usando una cadena repetida*/
    if(seen[string] && hash[pattern] !== string) return false;
    //We have not seen before this info
    hash[pattern] = string;
    seen[string] = true;
  } 
  return true;
}

//Opción 2
/*function deleteDuplicate(strings, patterns) {
  return deleteDup(strings).length === deleteDup(patterns).lenth;
}

deleteDuplicate = arr => arr.filter((item,index) => arr.indexOf(item) === index);*/

strings = ["cat", "dog", "dog"];
patterns = ["a", "b", "c"];
console.log(areFollowingPatterns(strings, patterns));