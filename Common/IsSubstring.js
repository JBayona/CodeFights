function isSubstring(str, substr){
  let index = 0;
  for(let i = 0; i < str.length; i++){
    if(str[i] == substr[index]){
      index++;
    }else{
      index = 0;
    }

    if(index == substr.length){
      return true;
    }
  }
  return false;
}

str = 'jorgebayona';
substr = 'bayona';

console.log(isSubstring(str,substr));