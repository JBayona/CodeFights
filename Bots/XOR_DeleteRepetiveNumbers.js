//Unique
function extraNumber(A, B, C) {
		var array = [A,B,C];
		console.log(array);
		var unique = array.filter(function(item,index,array){
			return array.indexOf(item) === index;
		});
		console.log(unique);
	}

console.log(extraNumber(5,5,1));


For A = 2, B = 4 and C = 2, the output should be
extraNumber(A, B, C) = 4.

function extraNumber(A, B, C) {
    return A ^ B ^ C;
}


XOR (^): Numeros impares con dos iguales y uno diferente se cancelan, te regresan el numero diferente.
3 ^ 1 ^ 3 = 1

OR (Regresan los numeros)

Checar con JS las operaciones con binarios.