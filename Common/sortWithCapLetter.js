/*
You are given a string, your goal is to rearrange its letters in alphabetical order. If the same letter is present both in lowercase and uppercase forms in the initial string, the uppercase occurrence should go first in the resulting string.

Example

For str = "Vaibhav", the output should be
sortIt(str) = "aabhiVv".
*/

function sortIt(str) {
  return [...str].sort(function(a,b){
    nameA = a.toLowerCase();
    nameB = b.toLowerCase();
    if(nameA == nameB){
      if(a < b) return -1;
      if(a > b) return 1;
      return 0;
    }else if(nameA < nameB){
      return -1
    }else if(nameA > nameB){
      return 1;
    }
  }).join('');
}

//Reducido

sortIt = str => 
  [...str].sort(function(a,b){
    nameA = a.toLowerCase();
    nameB = b.toLowerCase();
    if(nameA == nameB){
      if(a < b) return -1;
      if(a > b) return 1;
      return 0;
    }else if(nameA < nameB){
      return -1
    }else if(nameA > nameB){
      return 1;
    }
  }).join('');

  sortIt = s => 
  [...s].sort((a,b) =>{
    c = a.toLowerCase()
    d = b.toLowerCase()
    if(c == d){
      if(a < b) return -1
      if(a > b) return 1
      return 0;
    }if(c < d)
      return -1
    if(c > d)
      return 1
  }).join('')


str = "Vaibhav"
console.log(sortIt(str));