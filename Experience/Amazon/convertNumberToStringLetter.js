/*
1. Given an integer, write a function that turns it into an 
English string (123,456 -> "one hundred twenty three thousand, four hundred fifty six")
*/

// blank space for handler easier the indexes
let singleDigits = [""," one", " two", " three", " four", " five",
				  " six", " seven", " eight", " nine"];
// blank space for handler easier the indexes
let twoDigits = [ " ten", " eleven", " twelve", " thirteen", " fourteen",
			   " fifteen", " sixteen", " seventeen", " eighteen", " nineteen"];
// blank space for handler easier the indexes
let tensMultiple = ["", "", " twenty", " thirty", " forty", " fifty"," sixty", " seventy", " eighty", " ninety"];
let tensPower = [" hundred", " thousand"];
let result = "";
function convertIntoToWords(num){
	let tam = num.toString().length;
	if(num === 0) return "zero";
	if(tam === 1){
	  result += singleDigits[num];
	}
	if(tam === 2){
	  if(num >= 10 && num <= 19){
		result += twoDigits[num%10];
	  }else{
		result += tensMultiple[floor(num/10)];
		//Single digit
	  result += singleDigits[floor(num%10)];
	  }
	}
	if(tam === 3){
	  result += singleDigits[floor(num/100)];
	  result += tensPower[0];
	  return convertIntoToWords(Math.floor(num%100));
	}
	if(tam > 3 && tam < 7){
	  convertIntoToWords(floor(num/1000));
	  result += tensPower[1];
	  return convertIntoToWords(floor(num%1000));
	}
}

function floor(n){
	return Math.floor(n);
}

//num = 9823;
num = 20; 
convertIntoToWords(num);
console.log(result);

