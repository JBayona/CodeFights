function toCamelCase(input){
	var tmp = input.split(' ');
  var result = '';
  tmp.forEach((word,index) =>{
  	if(index === 0){
			result += word;    
    }else{
    	result += word[0].toUpperCase() + word.slice(1);
    }
  });
  return result;
}

input = "this is a test to convert to camel case";
console.log(toCamelCase(input));