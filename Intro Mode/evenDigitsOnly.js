/*
Check if all digits of the given integer are even.

Example

For n = 248622, the output should be
evenDigitsOnly(n) = true;
For n = 642386, the output should be
evenDigitsOnly(n) = false.

https://codefights.com/arcade/intro/level-6/6cmcmszJQr6GQzRwW/description
*/

function evenDigitsOnly(n) {
  return [...''+n].map(Number).every((element => element%2 == 0));
}

n = 248622; //true
//n = 642386; //false
console.log(evenDigitsOnly(n));