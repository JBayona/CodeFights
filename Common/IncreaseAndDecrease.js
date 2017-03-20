function findMinIncrease(array) {
  return array.sort((a,b) => b - a).concat(fromTo(Math.min(...array)+1, Math.max(...array)));
}

function fromTo(from, to){
  var tmp = [];
  for(var i = from; i <= to; i++){
    tmp.push(i);
  }
  return tmp;
}

array =  [1,4,3,5,2];
console.log(findMinIncrease(array));



function findMinIncrease(array) {
  var sorted = array.sort((a,b) => b - a);
  return sorted.concat(fromTo(sorted));
}

function fromTo(array){
  var arr = array.slice(0, array.length-1);
  return arr.reverse();
}

array =  [1,4,3,5,2];
console.log(findMinIncrease(array));
