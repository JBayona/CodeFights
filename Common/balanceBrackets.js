/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.
*/

function balanceBrackets(str){
  if(str === null){
    return false;
  }

  var stack = [];
  var hash = {'(' : ')', '[' : ']', '{' : '}'};
  var current = null;
  var stackPop = null;

  /*En la pila solo tenemos parentesis de apertura, cada
  que sea uno de cierre lo sacamos*/
  for(var i = 0; i < str.length; i++){
    current = str[i];
    //Si es un parentesis de apertura, lo metemos a la pila
	//En la pila sólo tendremos paréntesis de apertura
    if(current in hash){
      stack.push(current);
    }else{
      //Es un parentesis de cierre en toda esta seccion
      if(stack.length == 0){
        /*Si es cero y vamos a insertar uno de cierre,
        sabemos que ya no esta balanzeado*/
        return false;
      }else{
        stackPop = stack.pop();
        if(hash[stackPop] !== current){
          return false;
        }
      }
    }
  }

  if(stack.length === 0){
    return true;
  }else{
    return false;
  }

}


str = "()[]{}";
console.log(balanceBrackets(str));