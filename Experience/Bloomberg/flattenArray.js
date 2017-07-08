var arr = [1,2,3,[4,5,[6]]]
// [1,2,3,4,5,6]


//Option 1
var test = [];
for(var i = 0; i < arr.length; i++){
  if(Array.isArray(arr[i])){
    test = test.concat.apply(test, arr[i]);
  }else{
    test.push(arr[i]);
  }
}
console.log(test);