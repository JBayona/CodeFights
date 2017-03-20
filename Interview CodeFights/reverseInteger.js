/*
Reverse the digits of the given integer.

Example

For x = 12345, the output should be
reverseInteger(x) = 54321;
For x = -4243, the output should be
reverseInteger(x) = -3424.
*/

reverseInteger = n => {
    if(n < 0){
        n *= -1
        return ([...''+n].reverse().join(''))*(-1);
    }
    return [...''+n].reverse().join('')*1
}

function reverseInteger(x) {
    var y = 0
    while (x) {
        y = y * 10 + x % 10 //Vamos sumando los numeros de derecha a izquierda
        x = x / 10 |0 //Vamos elimnando los números de derecha a izquierda
    }
    return y
}

reverseInteger(12345)
