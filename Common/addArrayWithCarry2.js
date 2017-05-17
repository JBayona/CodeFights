/*
Sumar los digitos del array, ejemplo
array1 = [2,4] y array2 = [3,6], resultado = [6,0]
array1 = [9,0] y array2 = [1,0], resultado = [1,0,0]
Add arrays with carry
*/

function addArray(array1,array2){
  var lenA = array1.length-1;
  var lenB = array2.length-1;
  var a,b, temp = 0;
  var carry = false;
  var result = [];
  while(lenA >= 0 || lenB >= 0){
  	a = lenA >= 0 ? array1[lenA] : 0;
    b = lenB >= 0 ? array2[lenB] : 0;
    temp = a + b;
    if(carry){
    	temp += 1;
      carry = false;
    }
    if(temp >= 10){
    	carry = true;
      result.unshift((temp)%10);
    }else{
    	result.unshift(temp);
    }
    lenA--;
    lenB--;
  }
  return result;
}

array1 = [2,6];
array2 = [4];
console.log(addArray(array1,array2));