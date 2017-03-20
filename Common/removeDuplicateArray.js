//Remove duplicates in array

var test = [1,2,3,5,6,1,3,2,5,7,8,9];

var result = test.filter((element,index) => test.indexOf(element) == index);

console.log(result);