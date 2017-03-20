/*
Given a list of numbers, your task is to find all its elements that are not smaller than 10. The result you should return can be found from these values as follows:

the tens of the ith (0-based) found value should be added to the result if i is even;
the tens of the ith (0-based) found value should be subtracted from the result if i is odd.
Example

For numbers = [9, 10, 6, 3, 24, 0, 7], the output should be
TenPower(numbers) = -1.

There are two numbers than are not smaller than 10: 10 and 24. The result can thus be obtained as 1 - 2 = -1.
*/

//Opcion 1
result = 0;
i = 0;
function TenPower(numbers) {
    numbers.forEach((item) => {
        if(item >= 10){
            if(i%2 == 0){
                result += Math.floor((item%100)/10);
                i++;
            }else{
                result -= Math.floor((item%100)/10)
                i++;
            }
        }
    })
    return result;
}

//Opcion 2
result = i = 0;
TenPower = numbers => {
    numbers.forEach((item) => {
        if(item >= 10){
            num = Math.floor((item%100)/10);
            if(i%2 == 0) result += num;
            else result -= num;
            i++;
        }
    })
    return result;
}

numbers = [9, 10, 6, 3, 24, 0, 7];
console.log(TenPower(numbers));