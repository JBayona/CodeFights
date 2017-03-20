/*
Given a string that represents a linear algebraic expression, invert each plus or minus sign that is outside of any brackets in the expression.

Note that:

There can be three types of brackets in the expression: round (around me), curly {around me} or square [around me].
The expression will only contain plus and minus signs. There will not be any multiplication or division signs.
The only operands in the expression are variables, so the expression will not contain any numbers.
Each variable can be represented by an arbitrary number of consecutive characters.
The first variable in the input might not have a sign in front of it. In this case, the sign is assumed to be a plus sign.
In the output, there should be a sign in front of each variable, including the first one.
Brackets can form nested constructions of any depth. Brackets of a certain type can contain brackets of the same type inside (e.g. (...(...)...)). In addition, the order of nesting is not fixed (so both (...{...}...) and {...(...)...} are equally possible).
Example:

For linEq = "a + b - (c + d - {e})", the output should be
switchDemSigns(linEq) = "- a - b + (c + d - {e})".

Explanation:

a is outside all of the expression's brackets and does not have a sign in front of it, so it is considered positive in the input. Inverting the sign produces - a in the output.
b is also outside all of the brackets and has a plus sign in front of it, so it should be changed to - b in the output.
The sign right before (c + d - {e}) is negative, so we should put a plus sign there in the output.
All the other signs are inside the brackets, so they remain untouched.
*/

function switchDemSigns(linEq) {
  var stack = [];
  result = '';
  var element = '';
  var flag = false;
  for(var i = 0; i < linEq.length; i++){
    element = linEq[i];
      if(/^[a-zA-Z]*$/.test(element)){
        if(!flag){
          result += '- ' + element;
          flag= true;
        } 
        else result += element;
      }else if(element == '+' && !stack.length){
        result += '-';
        flag= true;
      }else if(element == '-' && !stack.length){
        result += '+';
        flag= true;
      }else if(element == '(' || element == '{' || element == '['){
        if(!flag){
          result += '- ' + element;
          flag= true;
        }else{
          result += element;
        }
        stack.push(element);
      }else if(element == ')' || element == '}' || element == ']'){
        stack.pop();
        result += element;
      }else{
        result += element;
      }
  }
  return result;
}



linEq = "{varA - varB} + [varC - varD]";
console.log(switchDemSigns(linEq));

switchDemSigns = l => {
    s = l[0]== '-' ? '' : '- '
    d = 0
    l.split``.forEach(v=>{
        if ('({['.indexOf(v)>-1) {
            d++
            s+=v
        }
        else if (')}]'.indexOf(v)>-1) {
            d--
            s+=v
        }
            else if ('+-'.indexOf(v)>-1 && d==0) s += '-+'['+-'.indexOf(v)]
        else s+=v
    })
    return s
}
