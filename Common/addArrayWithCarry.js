/*
Sumar los digitos del array, ejemplo
array1 = [2,4] y array2 = [3,6], resultado = [6,0]
array1 = [9,0] y array2 = [1,0], resultado = [1,0,0]
Add arrays with carry
*/
function addArrays(array1, array2) {
    var s1 = array1.length;
    var s2 = array2.length;
    var sum = 0;
    var result = [];
    var carry = false;
    if(array1.length > array2.length){
        leadingZero(array2,s1 );
    }else if(array2.length > array1.length){
        leadingZero(array1, s2);
    }
    for(var i =array1.length-1; i >= 0; i--){
        sum = array1[i] + array2[i];
        if(carry){
            sum += 1;
            carry = false;
        }
        if(sum >= 10){
            carry = true;
            result.unshift(sum%10);
        }else{
            result.unshift(sum)
        }
    }
    return result;
}


function leadingZero(array, tam){
    if(array.length < tam){
      array.unshift(0);
      return leadingZero(array, tam);
    }else{
      return array;
    }
    /*
    var tmp = array.length;
    var num = tam - tmp;
    for(var i = 0; i < num; i++){
        array.unshift(0);
    }
    return array;
    */
}

array1 = [3,6];
array2 = [2,4];
console.log(addArrays(array1, array2));