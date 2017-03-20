/*
Given a non-negative number, your task is to write this number in base 2 and calculate the sum of positions of 1s that are followed by 0s counting from right.

Example

For number = 83, the output should be
majorIndex(number) = 7.

8310 = 1010011 which has 1's followed by 0's in positions 2 and 5 (reading from the right), so the answer is 2 + 5 = 7.

Positions of the digits to be found are colored red.
*/

function majorIndex(number) {
    isOne = false;
    count = 0;
    [...(number*1).toString(2)].map(Number).reverse().forEach((item,index) => {
        if(item == 1){
            isOne = true;
        }else{
            if(isOne &&  item == 0){
                count += index;
                isOne = false;
            }else{
                isOne = false;
            }
        }
    });
    return count;
}