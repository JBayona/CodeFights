/*
Given an integer product, find the smallest positive integer the product of whose digits is equal to product. If there is no such integer, return -1 instead.

Example

For product = 12, the output should be
digitsProduct(product) = 26;
For product = 19, the output should be
digitsProduct(product) = -1.

https://codefights.com/arcade/intro/level-12/NJJhENpgheFRQbPRA
*/

function digitsProduct(product) {
    var answerDigits = [];
    var answer = 0;
    if (!product) {
        return 10;
    }
    if (product === 1) {
        return 1;
    }
	
	/*Vamos a empezar a dividirlos entre los dividores más grandes para obtener el 
	menor dígito posible que lo multiplique*/
    for (var divisor = 9; divisor > 1; divisor--) {
		//Buscamos sus divisores
        while (product % divisor === 0) {
			//Actualizamos el divisor
            product /= divisor;
			//Vamos metiendo a un arreglo los digitos que lo dividen
            answerDigits.push(divisor);
        }
    }
	/*Si product quedó mayor a uno significa que no hay números que lo multipliquen
	por lo tanto regresamos -1*/
    if (product > 1) {
        return -1;
    }
	/*Este ciclo es para regresar el array en valor de número, pero de atrás
	hacia adelante, por ejemplo el para el 12 la respuesta es [6,2] que nos regresa 26*/
    for (var i = answerDigits.length - 1; i >= 0; i--) {
        answer = answer + answerDigits[i] * Math.pow(10, i);
    }
    return answer;
}

product = 12;
console.log(digitsProduct(product));