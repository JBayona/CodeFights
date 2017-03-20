var isValid = function(s) {
    array = s.split('');
    stack = [];
    flag = false;
    var element = null;
    for(var i = 0; i < array.length; i++){
      element = array[i];
      if(element == '(' || element == '{' || element == '['){
        stack.push(element);
      }else if(element == ')'){
        if(stack[stack.length-1] == '('){
          stack.pop();
        }else{
          flag = true;
          break;
        }
      }else if(element == '}'){
        if(stack[stack.length-1] == '{'){
          stack.pop();
        }else{
          flag = true;
          break;
        }
      }else if(element == ']'){
        if(stack[stack.length-1] == '['){
          stack.pop();
        }else{
          flag = true;
          break;
        }
      }
    }

    if(!flag && stack.length == 0){
      return true;
    }
    return false;
    
}; 