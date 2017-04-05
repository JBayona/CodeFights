/*
Once Mary heard a famous song, and a line from it stuck in her head. That line was "Will you still love me when I'm no longer young and beautiful?". Mary believes that a person is loved if and only if he/she is both young and beautiful, but this is quite a depressing thought, so she wants to put her belief to the test.

Knowing whether a person is young, beautiful and loved, find out if they contradict Mary's belief.

Example

For young = true, beautiful = true and loved = true, the output should be
willYou(young, beautiful, loved) = false.

Young and beautiful people are loved according to Mary's belief.

For young = true, beautiful = false and loved = true, the output should be
willYou(young, beautiful, loved) = true.

Mary doesn't believe that not beautiful people can be loved.

https://codefights.com/arcade/code-arcade/at-the-crossroads/jZ4ZSiGohzFTeg4yb
*/

function willYou(young, beautiful, loved) {
	result = undefined;
	if(young && beautiful){
		result = true;
	}else{
		result = false;
	}

	if(result != loved){
		return true;
	}else{
		return false;
	}
}

result = undefined;
willYou = (young, beautiful, loved) => 
	if(young && beautiful){
		result = true;
	}else{
		result = false;
	}

	if(result != loved){
		return true;
	}else{
		return false;
	}
}

young = true
beautiful = true
loved = true

console.log(willYou(young,beautiful,loved))