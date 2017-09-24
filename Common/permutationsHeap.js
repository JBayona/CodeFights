/*
Este algoritmo usa el heap algorithm para hacer todas las 
permutaciones posibles

O(N!)
*/

var permute = function(str){
  var result = [];
  heapPermutation([...str], str.length, result);
  return result;
}

//Generating permutation using Heap Algorithm
function heapPermutation(a, size, result){
    // if size becomes 1 then prints the obtained
    // permutation
    if (size == 1){
      result.push(a.join(''));
      //result.push(a);
      //console.log(a);
    }

    for (var i=0; i<size; i++){
        heapPermutation(a, size-1, result);

        // if size is odd, swap first and last
        // element
        if (size % 2 == 1){
            var temp = a[0];
            a[0] = a[size-1];
            a[size-1] = temp;
        }

        // If size is even, swap ith and last
        // element
        else{
            var temp = a[i];
            a[i] = a[size-1];
            a[size-1] = temp;
        }
    }
}

str = "abcde";
console.log(permute(str));