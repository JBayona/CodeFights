/*
Evaluate the value of an arithmetic expression in Reverse Polish Notation. Valid operators are +, -, *, /. 
Each operand may be an integer or another expression. For example:

  ["2", "1", "+", "3", "*"] -> ((2 + 1) * 3) -> 9
  ["4", "13", "5", "/", "+"] -> (4 + (13 / 5)) -> 6
*/

function evalRPN(str){
  let array = input.split(' ');    
  let stack = [];
  let element = null;
  let a = 0;
  let b = 0;
  for(let i = 0; i < array.length; i++){  
    element = array[i];
    if(!(isNaN(element))){
      stack.push(parseInt(element));
    }else{
      a = stack.pop(); 
      b = stack.pop(); 
      switch(element){
        case '+' : stack.push(a+b); break;
        case '-' : stack.push(Math.floor(b-a)); break;
        case '*' : stack.push(a*b); break;
        case '/' : stack.push(b/a); break;
      }
    }
  }
  return stack.pop();
}

input = "1 2 + 3 *";
console.log(evalRPN(input));