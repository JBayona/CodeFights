// if a pattern exists within a text or not.
/*
matches("", "Hello world!") --> true
matches("world", "Hello wurld!") --> false
matches("world", "Hello bigworld") --> true
matches("world", "Hello worldwide") --> true
matches("Hello", "Hello worldwide") --> true

boolean matches(String pattern, String text) {
   ...
}
*/

//matches("abc", "aabbcc") --> false

//matches("w.rld", "Hello world!") --> true
//matches("w.rld", "Hello woorld") --> false

//"This is a test in a simple deditfdgeditorfgfg", editor

function matches(pattern, text){
  let index = 0;
  let currentLetter;
  if(!pattern) return true;
  if(!text) return false;
  for(let i = 0; i < text.length; i++){
      currentLetter = text[i];
      if(currentLetter === pattern[index] || pattern[index] === '.'){
          index++;
      }else{
          index = 0
          if(currentLetter === pattern[index] || pattern[index] === '.'){
              index++;
          }
      }
      if(index === pattern.length){
          return true;
      }
  }
  return false;
}

/*
text = "Hello world!"
pattern = 'world

index = 5
currentLetter = H
i = 6

*/
