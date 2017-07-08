// O(n) in the worst case, with both iterations n + m 

function firstNoRepetive(str) {
  var hash = {};
  var element = ''
  for(var i = 0; i < str.length; i++){
    element = str[i];
    if(element in hash) hash[element]++;
    else hash[element] = 1;
  }

  for(var prop in hash){
    if(hash[prop] == 1) return prop;
  }
  
}

str =  'teeters';
console.log(firstNoRepetive(str));