/*
Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements.

Given two arrays, check whether they are similar.

Example

For A = [1, 2, 3] and B = [1, 2, 3], the output should be
areSimilar(A, B) = true;
For A = [1, 2, 3] and B = [2, 1, 3], the output should be
areSimilar(A, B) = true;
For A = [1, 2, 2] and B = [2, 1, 1], the output should be
areSimilar(A, B) = false.
*/

function areSimilar(A, B) {
  var flagSwap = false;
  var temp = 0;
  for(var i = 0; i < A.length; i++){
    if(A[i] != B[i] && !flagSwap){
      temp = B.indexOf(A[i]);
      if(temp == -1) return false;
      [B[i],B[temp]] = [B[temp], B[i]];
      flagSwap = true;
    }else if(A[i] != B[i] && flagSwap){
      return false;
    }
  }
  return true;
}

function areSimilar(a, b) {
 
    var result = true;
    var size = a.length;    
    var swapped = false;
   
    for (var i=0; i<size; i++)
    {
        if (a[i] != b[i] && !swapped){
            for (var j = i+1; j < size; j++){
                if (b[j]==a[i] && b[j]!=a[j]){
                    var c = b[j];
                    b[j] = b[i];
                    b[i] = c;      
                    swapped = true;
                    break;
                }
               
            }  
        }
        // now check again (after possible swap) if the current elements match
        if (a[i] != b[i]){  
            result = false;
            break;
        }
    }  
 
    return result;    
}

function areSimilar(A, B) {
    var diffs = [];
    for (var i = 0; i < A.length; i++) {
        if (A[i] !== B[i]) {
            diffs.push([A[i], B[i]].sort().join(""));
        }
    }
    
    if (diffs.length > 2 || diffs[0] !== diffs[1]) {
        return false;
    } else {
        return true;
    }
    
}

A = [1, 2, 3];
B = [2, 1, 3];
console.log(areSimilar(A,B));