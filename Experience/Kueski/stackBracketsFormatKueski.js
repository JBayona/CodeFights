//[]{}() valid
//[{()}] valid
//[{]} invalid

function braces(values) {
    var stack = [];
    var hash = {'(' : ')', '[' : ']', '{' : '}'};
    var current = null;
    var stackPop = null;
    var str = null;
    var flag = false;
    var result = [];
    for(var j = 0; j < values.length; j++){
        str = values[j];
        for(var i = 0; i < str.length; i++){
            current = str[i];
            if(current in hash){
              stack.push(current);
            }else{
              if(stack.length == 0){
                result.push('NO');
                flag = true;
                break;
              }else{
                stackPop = stack.pop();
                if(hash[stackPop] !== current){
                   result.push('NO');
                   flag = true;
                   break;
                }
              }
            }
        }
        if(!flag){
           if(stack.length === 0){
             result.push('YES');
            }else{
                result.push('NO');
            } 
        }
        stack = [];
        flag = false;
    } //Fin for
    return result;
}

test = ['{}[]()','{[}]', '{{{}}}', '[{]}', '({)]'];
console.log(braces(test));
