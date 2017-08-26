/*Dado un string hacer match si la primer y última letra son
iguales*/


function match(str){
	var regex = new RegExp(/^(?:([ab])[ab]*\1|[ab])$/);
	return regex.test(str);
}

str= "ababababa";

console.log(match(str));