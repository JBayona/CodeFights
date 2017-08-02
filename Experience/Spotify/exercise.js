var myArray = [1, 2, 3];
myArray.forEach(function(item) {
  console.log(item);
});

setTimeout(function() {
  console.log(0);
}, 0);

for (var i=0; i < myArray.length; i++) {
  console.log(myArray[i]);
  if (i === (myArray.length - 1)) {
    setTimeout(function() {
      console.log(10);
    }, 0);
  }
}
// 1,2,3 1,2,3 0,10

var a = function(x, y) { return x + x + y; };
var z = function(fn, value) {
  return fn.bind(null, value);
};
var b = z(a, 3);
b(10);

//value = 3 + 3 + 10

// Implement the "times" function which accepts a function and a number X and returns a function that can be called X number of times. 
// Time function here


// Usage


function times(fn, number){
  var count = 0;
  return function(){
     if(count < number){
        count++;
        return fn();  
     }else{
      return undefined;
     }
  }
}

var return1 = function() { return 1; };
var return1Twice = times(return1, 2);
console.log(typeof return1Twice); // function
console.log(return1Twice()); // 1
console.log(return1Twice()); // 1
console.log(return1Twice()); // undefined


// Implement the "times" function which accepts a function and a number X and returns a function that can be called X number of times. 
// Time function here


// Usage

function times(fn, number){
  var count = 0;
  return function(value){
     if(count < number){
        count++;
        return fn(value);  
     }else{
      return undefined;
     }
  }
}

var returnX = function(x) { return x; };
var return1Twice = times(returnX, 2);
console.log(typeof return1Twice); // function
console.log(return1Twice(3)); // 3
console.log(return1Twice(3)); // 3
console.log(return1Twice(3)); // undefine

/**
 * Given a soiurce object, return a new object that has a property for each unique key in the source object, and an array of values
 * corresponding to those keys in the source object.
 */
function grouper(obj) {
  const result = {};
  let tmp;
  for(let prop in obj){
    tmp = obj[prop];
    if(!(tmp in result)){
      result[tmp] = [prop];
    }else{
      result[tmp].push(prop);
    }
  }
  return result;
}

var source = {
  'shorthair': 'cat',
  'bengal': 'cat',
  'husky': 'dog',
  'siamese': 'cat',
  'bulldog': 'dog',
  'beagle': 'dog'
}

console.log(grouper(source));
//   { dog: ['husky', 'bulldog', 'beagle'], cat: ['shorthair', 'bengal', 'siamese'] }