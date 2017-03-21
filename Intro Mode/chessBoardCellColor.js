/*
Given two cells on the standard chess board, determine whether they have the same color or not.

Example

For cell1 = "A1" and cell2 = "C3", the output should be
chessBoardCellColor(cell1, cell2) = true.

https://codefights.com/arcade/intro/level-6/t97bpjfrMDZH8GJhi/description
*/

/*
Se asigna en las columnas letras desde A hasta H, que es lo mismo que 1-8, y cada celda es un número de 1 al 8,
por ejemplo la celda [A,1] es equivalente a [1,1] la celda [h,7] es equivalente a [8,8], la regla dice que si ambos 
números son pares o impares, la casilla es negra, de lo contrario es blanca.
En nuestro algoritmo hacemos un split para tener la letra y el número, sacamos el código ASCII de la letra que empieza 
con número impar A= 65, para nuestro fin es lo mismo que empiece con 65 o 1, sólo nos interesa si es par o impar, entonces
almacenamos todos los valores en variables, los sumamos porque sí la regla dice que si los dos son pares o nones, es negra
de lo contrario blanca, entonces si sumamos dos números pares siempre saldrá un número par, la suma de un número par con un 
impar nos da un impar, entonces sólo verificamos si el módulo de 2 es el mismo en los dos casos, si sí, ambas son negras, si no
pero son iguales, ambas son blancas o si no son iguales, una será blanca y la otra negra
*/
function chessBoardCellColor(cell1, cell2) {
    var c1 = cell1.split("");
    var c2 = cell2.split("");

    var a = c1[0].charCodeAt(0);
    var b = parseInt(c1[1]);
    
    var c = c2[0].charCodeAt(0);
    var d = parseInt(c2[1]);
    
    return (a+b)%2 == (c+d)%2
}

cell1 = "A1"
cell2 ="C3"
console.log(chessBoardCellColor(cell1, cell2));