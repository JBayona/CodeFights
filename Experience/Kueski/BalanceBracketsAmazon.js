// FUNCTION SIGNATURE BEGINS, THIS FUNCTION IS REQUIRED
function hasBalancedBrackets(str)
{    
    var flag = false;
    var stack = [];
    str = str.split('');
    for(var i = 0; i < str.length; i++){
        var element = str[i];
       if( element === '(' || element === '{' || element === '[' || element === '<'){
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
       }else if(element == '>'){
           if(stack[stack.length-1] == '<'){
               stack.pop();
           }else{
               flag = true;
               break;
           }
       }
    }
    if(flag) return 0;
    if(stack.length === 0) return 1;
    return 0;
}
// FUNCTION SIGNATURE ENDS



// FUNCTION SIGNATURE ENDS
str = '(h[e{lo}!]~)()()()'
console.log(hasBalancedBrackets(str));