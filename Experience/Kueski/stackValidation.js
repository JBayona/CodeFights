var str = "<hola><><como><<<estas>><o>>";
var stack = [];
var array = str.split('');
var flag = false;

for(var i = 0; i < array.length; i++){
	if(array[i] == '<'){
  	stack.push(array[i]);
  }else if(array[i] == '>'){
  	if(stack.length == 0){
     	flag = true;
     	console.log("Invalid expression");
     	break;
    }else{
    	stack.pop();
    }
  }
}

if(!flag){
	if(stack.length>0){
		console.log("Invalid expression");
	}else{
		console.log("Valid expression");
	}
}