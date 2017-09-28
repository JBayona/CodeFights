/*
Given an absolute file path (Unix-style), shorten it to the format /<dir1>/<dir2>/<dir3>/....

Here is some info on Unix file system paths:

/ is the root directory; the path should always start with it even if it isn't there in the given path;
/ is also used as a directory separator; for example, /code/fights denotes a fights subfolder in the code folder in the root directory;
this also means that // stands for "change the current directory to the current directory"
. is used to mark the current directory;
.. is used to mark the parent directory; if the current directory is root already, .. does nothing.
Example

For path = "/home/a/./x/../b//c/", the output should be
simplifyPath(path) = "/home/a/b/c".

Here is how this path was simplified:
* /./ means "move to the current directory" and can be replaced with a single /;
* /x/../ means "move into directory x and then return back to the parent directory", so it can replaced with a single /;
* // means "move to the current directory" and can be replaced with a single /.

https://codefights.com/interview-practice/task/aRwxhGcmvhf6vKPCp
*/

var simplifyPath = function(str) {
    let stack = [];
    let result = '';
    let array = str.split('/');
    let current;
    
    for(let i = 0; i < array.length; i++){
      current = array[i];
      //Si es punto o no tiene nada ignoramos el valor
      if(current === '.' || current.length === 0) continue
      if(current === '..'){
        /*Si tenemos dos puntos y tenemos valores en el stack, sacamos
        el último valor*/
        if(stack.length > 0){
          stack.pop();
        }
      }else{
        /*Si no es nada de lo otro, metemos al stack el directorio*/
        stack.push(current);
      }
    }

    //Format result
    stack.forEach((item) => {
      result += '/' + item;
    });
    if(result === '') result = '/';
    return result;
};

path = "/home/a/./x/../b//c/"
console.log(simplifyPath(path));