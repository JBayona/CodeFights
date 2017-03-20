/*
Given an array of strings, return another array containing all of its longest strings.

Example

For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
allLongestStrings(inputArray) = ["aba", "vcd", "aba"].

*/

function allLongestStrings(inputArray) {
    var object = {};
    var max = 0;
    inputArray.forEach(function(item,index){
      if(item.length in object){
        object[item.length].push(item);
      }else{
        object[item.length] = [item];
      }
    })

    //Retrieve the elements
    for(var prop in object){
      max = prop > max ? prop : max;
    }
   return object[max];
}

array = ["aba", "aa", "ad", "vcd", "aba"];
console.log(allLongestStrings(array));
