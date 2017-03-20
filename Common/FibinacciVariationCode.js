/*
In mathematics, the Fibonacci numbers are the numbers in the following integer sequence, called the Fibonacci sequence. For more information, please click here.

You will be given a message. Your mission is to get all the characters in that message at positions that are present in the Fibonacci sequence (a sequence formed by the the Fibonacci number sorted in ascending order). Please ignore whitespace characters and use the extended Fibonacci.

Return the obtained characters capitalized and connected by the '-' character.

Example

For message = "The Da Vinci Code is a 2003 mystery-detective novel by Dan Brown",
the output should be
FibonacciSecret(message) = "T-H-H-E-D-V-C-E-M-T".

The first Fibonacci is 0 then the first letter is T
The second Fibonacci is 1 then the second letter is H
The third Fibonacci is 1 then the third letter is H
... and so on.
Thus, the answer should be "T-H-H-E-D-V-C-E-M-T".
*/

//Opcion 1
function FibonacciSecret(message) {
    message = message.replace(/\s/g,'').toUpperCase();
    result = [];
    num1 = 0;
    num2 = 1;
    temp = 0;
    if(message[num1]) result.push(message[num1])
    if(message[num2]) result.push(message[num2])
    while(temp <= message.length){
        temp = num1+num2;
        if(message[temp]) result.push(message[temp])
        num1 = num2;
        num2 = temp;
    }
    return result.join('-');
}

//Opcion 2

function FibonacciSecret(message) {
    message = message.replace(/\s/g,'').toUpperCase();
    result = [];
    num1 = 0;
    num2 = 1;
    temp = 0;
    result.push(message[num1])
    result.push(message[num2])
    while(temp <= message.length){
        temp = num1+num2;
        if(message[temp]) result.push(message[temp])
        num1 = num2;
        num2 = temp;
    }
    return result.join('-');
}


message = "The Da Vinci Code is a 2003 mystery-detective novel by Dan Brown";
console.log(FibonacciSecret(message));