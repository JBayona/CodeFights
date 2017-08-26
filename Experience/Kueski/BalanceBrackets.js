function regularBracketSequence1(sequence) {
	var balance = 0;
	for (var i = 0; i < sequence.length; i++) {
		if (sequence[i] === '(') {
		  balance++;
		}
		else if(sequence[i] === ')') {
		  balance--;
		}
		if (balance < 0) { //Si balance es cero significa que esta balanceado, si es menor de cero no lo esta
		  return false;
		}
	}
	if (balance) {
		return false;
	}
	return true;
}
sequence = "((())";
//sequence = "(1 + 2) * (2 + 4)";
//sequence = "()()";
console.log(regularBracketSequence1(sequence));