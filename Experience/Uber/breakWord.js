/*
Write a function that can break a large SMS string given a length limit per substring. Words must
stay together. If a word is longer than the limit, use the word in a new substring and split it as
relevant
*/

function breakWord(str,n){
  let words = str.split(' ');
  let word;
  let tmp = '';
  let result = [];

  for(let i = 0; i < words.length; i++){
    word = words[i];
    if(tmp.length > 0){
      if(tmp.length + word.length + 1 <= n){
        word = tmp + ' ' + word;
        tmp = '';
      }else{
        result.push(tmp);
        tmp = '';
      }
    }
    while(word.length > n){
      result.push(word.substring(0,n));
      word = word.substring(n);
    }
    tmp = word;
  }
  if(tmp.length > 0){
    result.push(tmp);
  }
  return result;
}

str = 'Joe is the funniest guy';
n = 6;
console.log(breakWord(str,n));