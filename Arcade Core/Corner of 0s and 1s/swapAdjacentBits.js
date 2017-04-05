/*
You're given an arbitrary 32-bit integer n. Swap each adjacent pair of bits in its binary representation and return the result as a decimal number.

Example

For n = 13, the output should be
swapAdjacentBits(n) = 14.

1310 = 11012 ~> 11102 = 1410.

For n = 74, the output should be
swapAdjacentBits(n) = 133.

7410 = 010010102 ~> 100001012 = 13310.
Note the preceding zero written in front of the initial number.

https://codefights.com/arcade/code-arcade/corner-of-0s-and-1s/dShYZZT4WmvpmfpgB
*/

//0x55555555 = ....0101
//0xAAAAAAAA = ....1010
function swapAdjacentBits(n) {
  return (n >> 1 & 0x55555555) | (n << 1 & 0xAAAAAAAA) ; //El combina los elementos
}

//El 13 es de la siguiente forma
//1101

//Al hacer un and del 1101 con 0x55555 obtengo los digitos de la derecha a izquierda, del primero si, luego no, luego si...
//Al hacer un and del 1101 con 0xAAAAA obtengo el segundo digito y luego no, y luego si ..
//Si nos damos cuenta de comparar esos dos numeros es un shift, entonces uno los recorremos a la izquierda y luego el otro
//a la derecha y al final se unen con un OR

//OR se unen.
//AND mask

swapAdjacentBits =n => (n >> 1 & 0x55555555) | (n << 1 & 0xAAAAAAAA)

n = 13
console.log(swapAdjacentBits(n))
