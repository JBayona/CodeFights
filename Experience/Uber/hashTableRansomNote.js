/*
A kidnapper wrote a ransom note but is worried it will be traced back to him. 
He found a magazine and wants to know if he can cut out whole words from it and 
use them to create an untraceable replica of his ransom note. The words in his note 
are case-sensitive and he must use whole words available in the magazine, meaning he cannot use substrings or concatenation to create the words he needs.

Given the words in the magazine and the words in the ransom note, print Yes if he can replicate 
his ransom note exactly using whole words from the magazine; otherwise, print No.

Input Format

The first line contains two space-separated integers describing the respective values of  
(the number of words in the magazine) and  (the number of words in the ransom note). 
The second line contains  space-separated strings denoting the words present in the magazine. 
The third line contains  space-separated strings denoting the words present in the ransom note.

https://www.hackerrank.com/challenges/ctci-ransom-note
*/

readMagazine = (ransom, magazine) => {
  let map = {};
  var magazine = magazine.split(' ');
  var ransom = ransom.split(' ');

  for(let i = 0; i < magazine.length; i++){
      if(!(magazine[i] in map)){
          map[magazine[i]] = 1;
      }else{
          map[magazine[i]]++;
      }
  }
  //Format result
  for(let i = 0; i < ransom.length; i++){
      if(ransom[i] in map){
          if(map[ransom[i]] > 0){
              map[ransom[i]]--;
          }else{
              console.log("No");
              break;
          }
      }else{
          console.log("No");
          break;
      }
      if(i === ransom.length-1){
          console.log("Yes");
      }
  }
}

  //Opción 2

readMagazine = (ransom, magazine) => {
  let map = {};
  var magazine = magazine.split(' ');
  var ransom = ransom.split(' ');

  for(let i = 0; i < magazine.length; i++){
      if(!(magazine[i] in map)){
          map[magazine[i]] = 1;
      }else{
          map[magazine[i]]++;
      }
  }
  //Format result
  for(let i = 0; i < ransom.length; i++){
      if(!(ransom[i] in map) || map[ransom[i]] <= 0){
        console.log("No");
        break;
      }
      map[ransom[i]]--;
      if(i === ransom.length-1){
          console.log("Yes");
      }
  }
}

//Opción 3 Map
readMagazine = (ransom, magazine) => {
  let map = new Map();
  var magazine = magazine.split(' ');
  var ransom = ransom.split(' ');

  for(let i = 0; i < magazine.length; i++){
      if(!map.has(magazine[i])){
          map.set(magazine[i], 1);
      }else{
          map.set(magazine[i], map.get(magazine[i]+1));
      }
  }
  //Format result
  for(let i = 0; i < ransom.length; i++){
      if(!map.has(ransom[i]) || map.get(ransom[i]) <= 0){
        console.log("No");
        break;
      }
      map.set(ransom[i], map.get(ransom[i])-1);
      if(i === ransom.length-1){
          console.log("Yes");
      }
  }
  }

  let str1 = "give me one grand today night";
  let str2 = "give one grand today";
  readMagazine(str2, str1);