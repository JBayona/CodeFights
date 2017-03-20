/*
We want to turn the given integer into a number that has only one non-zero digit using a tail rounding approach. This means that at each step we take the last non 0 digit of the number and round it to 0 or to 10. If it's less than 5 we round it to 0 if it's larger than or equal to 5 we round it to 10 (rounding to 10 means increasing the next significant digit by 1).

Example

For value = 15, the output should be
rounders(value) = 20;

For value = 1234, the output should be
rounders(value) = 1000.

1234 -> 1230 -> 1200 -> 1000.

For value = 1445, the output should be
rounders(value) = 2000.

1445 -> 1450 -> 1500 -> 2000.
*/


function rounders(value) {
    number = [...''+value].map(Number).reverse();
    result = [];
    carry = false;
    temp = 0;
    number.forEach((item,index) => {
        if(index == number.length-1){
            if(carry){
                 result.unshift(item+1); //Cuando sea 999 y sea al final
                  //lo va a sumar para que de 10 
                 //y así se pone el nuevo dígito
            }else{
                result.unshift(item);
            }
        }else{
            item = item;
            if(carry){
                item += 1;
            }
            if(item >= 5){
                carry = true;
            }else{
                carry = false;
            }
            result.push(0);
        }
    })

    return Number(result.join(''));
}

value = 99;
console.log(rounders(value));
