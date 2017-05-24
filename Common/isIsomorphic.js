/*
Given two strings s and t, determine if they are isomorphic. Two strings are 
isomorphic if the characters in s can be replaced to get t.

For example,"egg" and "add" are isomorphic, "foo" and "bar" are not.
*/

//Option 1

function isIsomorphic(str1,str2){
  return filter(str1).length === filter(str2).length;
}

filter = str => [...str].filter((item,index, arr) => index === arr.indexOf(item))

//Option 2

function isIsomorphic(str1,str2){
  return createSet(str1) === createSet(str2);
}

function createSet(str1){
  return new Set(str1.split('')).size;
}

str1 = "egg";
str2 = "add";
console.log(isIsomorphic(str1, str2));