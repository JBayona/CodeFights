/*
Given a rectangular matrix of characters, add a border of asterisks(*) to it.

Example

For

picture = ["abc",
           "ded"]
the output should be

addBorder(picture) = ["*****",
                      "*abc*",
                      "*ded*",
                      "*****"]
*/

function addBorder(picture) {
  var tam = picture[0].length;
  var result = [];
  result.push("*".repeat(tam+2)); //El de la derecha y la izquierda, los de hasta arriba
  picture.forEach((item,index) => {
    result.push("*"+item+"*");
  });
  result.push("*".repeat(tam+2)); //Los de hasta abajo
  return result;
}

picture = ["abc",
           "ded"];
console.log(addBorder(picture));