/*
Tenememos un arreglo, el maximo degree son las repeticiones que aparece un elemento en el
array, por ejemplo [1,2,3,4,2,2,3] tiene un degree de 3 porque el 2 aparece tres veces, 
queremos un subarray que contenga ese degree pero el menor length de todos los posibles
subarrays, por ejemplo para [1,2,2,3,1] el 1 y 2 tiene el maximo degree que es 2, un posible
subarray es de [1,2,2,3,1] y el otro es 2 con [2,2], entonces como el subarray de 2 es menor
regresamos el length de este subarray que es 2
*/

function degreeOfArray(arr){
  var hash = {};
  var max = 0;
  var min = Number.MAX_VALUE;
  var tmp = 0;
  arr.forEach((item,index) => {
    if(!(item in hash)){
      hash[item] = {
        count : 1,
        first: index,
        last: index
      };
      max = 1;
    }else{ 
      hash[item].count++;
      max = hash[item].count > max ? hash[item].count : max;
      hash[item].last = index;
    }
  });
  //Format response
  for(var prop in hash){
    if(hash[prop].count === max){
      tmp = hash[prop].last - hash[prop].first + 1;
      min = tmp < min ? tmp : min;
    }
  }
  return min;
}
//1 <= n <= 10^5
//1 <= n <= 10^6
//array = [1,2,2,3,1]; //2
//array = [1,1,2,1,2,2]; //4
//array = [1,2,3,4,5]; //1
console.log(degreeOfArray(array));