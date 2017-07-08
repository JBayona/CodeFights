// Write a function that takes an integer and returns the comma-delineated string representation, e.g. 1234567 -> "1,234,567" 
function formatString(number){
	var temp = [];
	let element;
	number = [...''+number].reverse();
	for(var i = 0; i < number.length; i++){
		element = number[i];
		if(i%3 ==0 && i != 0){
			temp.push(',');
			temp.push(element);
		}else{
			temp.push(element)
		}
	}
	return temp.reverse().join('');
}

n = 1234456
console.log(formatString(n));

function numberWithCommas(x) {
//B - global search
//?= Matches any string that is followed by a specific string n
//(\d{3}) - is a digit and every 3 digits
//?!n - Matches any string that is not followed by a specific string n
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

console.log(numberWithCommas(1234654));

n = 1234456
console.log(n.toLocaleString());
