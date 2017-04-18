/*
How many strings equal to A can be constructed using letters from the string B? Each letter can be used only once and in one string only.

Example

For A = "abc" and B = "abccba", the output should be
stringsConstruction(A, B) = 2.

We can construct 2 strings A with letters from B.

https://codefights.com/arcade/code-arcade/mirror-lake/chW9F8bCgxYJBcgj3
*/

//Opcion 1
function stringsConstruction(A, B) {
 var countA = {};
 var countB = {};
 var element = 0;
 var min = 0;
 //Count the original string
 for(var i = 0; i < A.length; i++){
  element = A[i];
  if(element in countA){
    countA[element]++;
  }else{
    countA[element] = 1;
  }
 }
 //Counting the substring
 for(var i = 0; i < B.length; i++){
  element = B[i];
  //Solo contamos los que tenemos en la cadena original
  if(element in countA){
    if(element in countB){
      countB[element]++;
    }else{
      countB[element] = 1;
    }
  }
 }
 //Obteniendo el minimo de apariciones sabemos cuanto se repite
 var flag = false;
 for(var prop in countB){
  if(!flag){
    min = Math.floor(countB[prop]/countA[prop]);
    flag = true;  
  }else min = Math.min(min, Math.floor(countB[prop]/countA[prop]));
 }
 return min;
}

//Opcion 2

function stringsConstruction(A, B) {
    var i=0;   
    var n=0;
    B=B.split("");
    while(B.indexOf(A[i])!=-1){
        
        B.splice(B.indexOf(A[i]),1);
        //console.log(B)
        i++;
        if(i==A.length){
            n++;
            i=0;
        }
    }
    return n;
}


a = 1;
b = 2;
n = 2;
console.log(magicalWell(a, b, n))