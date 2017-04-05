/*
Define an integer's roundness as the number of trailing zeroes in it.

Given an integer n, check if it's possible to increase n's roundness by swapping some pair of its digits.

Example

For n = 902200100, the output should be
increaseNumberRoundness(n) = true.

One of the possible ways to increase roundness of n is to swap digit 1 with digit 0 preceding it: roundness of 902201000 is 3, and roundness of n is 2.

For instance, one may swap the leftmost 0 with 1.

For n = 11000, the output should be
increaseNumberRoundness(n) = false.

Roundness of n is 3, and there is no way to increase it.

https://codefights.com/arcade/code-arcade/loop-tunnel/KLbRMcWhaZi3dvYH5
*/

/*
n: 902200100 true
n: 11000 false
n: 99080 true
n: 1022220 true
n: 106611 true
n: 234230 false
n: 888 false
*/

function increaseNumberRoundness(n) {
    var response = false;
    var findCero = true;
    var trailZero = 0;
    array = [...''+n].reverse().map(Number);
	//Reverse para recorrerlo en forma normal ya que nos interesa el trail de ceros del final
    for(var i = 0; i < array.length; i++){
        if(array[i] == 0){ 
		/*Busco si hay algun cero, si si significa que ya empieza el trail de los ceros 
		ya que estamos recorriendo por atras con el reverse*/
            findZero = true; //Usamos una bandera para indicar que hemos comenzado con el trail de los ceros
            trailZero++;
        }else if(array[i] != 0 && findZero == true){ 
		/*Si no es cero y findZero es true significa que ya encontramos el trail 
		por lo que solo necesitamos verificar si hay un cero en lo que resta del array, 
		por esto hacemos un slice desde la posicion en donde no es cero hasta el final y de eso 
		buscamos si hay un cero con includes, si si es posible mejorar el roundness de los contrario no*/  
            if(array.slice(i).includes(0)){
                return true;
            }
        }
    }
    return false;
}

n = 902200100
console.log(increaseNumberRoundness(n));