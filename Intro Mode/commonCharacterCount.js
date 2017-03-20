/*
Given two strings, find the number of common characters between them.

Example

For s1 = "aabcc" and s2 = "adcaa", the output should be
commonCharacterCount(s1, s2) = 3.

Strings have 3 common characters - 2 "a"s and 1 "c".
*/

function commonCharacterCount(s1, s2) {
  var count = 0;
  var obj1 = {};
  var obj2 = {};
  obj1 = countChar(s1);
  obj2 =countChar(s2);
  
  for(var prop in obj1){
    if((prop in obj1) && (prop in obj2)){
      count += Math.min(obj1[prop],obj2[prop]);
    }
  }
  return count;
}

function countChar(arr){
  var obj = {};
  var item = null;
  for(var i = 0; i < arr.length; i++){
    item = arr[i];
    if(item in obj){
      obj[item]++;
    }else{
      obj[item] = 1;
    }
  }
  return obj;
}

function commonCharacterCount(s1, s2) {
  var a=s1.split(""),r=0
  while (a.length){
    var t=a.pop()
    if(s2.includes(t)){
      r++
      s2=s2.replace(t,"")
    }
  }
  return r
}


s1 = "aabcc"; //3
s2 = "adcaa";
console.log(commonCharacterCount(s1,s2));