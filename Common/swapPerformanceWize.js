var array= [2, -12, 0, 7, 0, -99]; //Array of elements
console.log(checkArray(array));

//Function to check 0's
//@array of elements
function checkArray(array){
	var index = 0; 
    for(var i = 0; i < array.length;i++){
        if(array[i] == 0){ 
        	array[i] = array[index]; //Cambiamos el valor del primer elemento en donde nos hayamos encontrado el cero.
            array[index] = 0; //Como ya sabemos que tiene un cero, lo asignamos directamente, así no guardamos el valor y reducimos el código
            index++; //incrementamos el index para ver si encontramos otro cero
        }
    }
    return array;
}

var array = [1,2,3,4,0,5,0,0,6,7,8];
var index = 0;

for(var i = 0; i < array.length; i++){
	if(array[i] == 0){
  	array[i] = array[index];
  	array[index++] = 0;
  }
}

console.log(array);