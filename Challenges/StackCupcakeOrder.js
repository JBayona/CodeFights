/*
Mom bakes the bliny (flat pancakes) and puts them on a plate one on top of another: the first one, then the second and so on. From time to time one of her numerous kids rushes into the kitchen, grabs the topmost pancake, eats it and runs away.

Determine if the bliny could have been eaten in the given order, where order is some rearrangement of the numbers from 1 to n.

Example

For order = [2, 1, 3], the output should be
bliny(order) = true.

First kid's intrusion happened when the pancake 2 was ready. Then the second child ate the pancake 1. Then the mother baked pancake 3 and it was eaten.

For order = [3, 1, 2], the answer should be
bliny(order) = false.

*/


function bliny(order) {

	stack = [];
	control = order[0];
	for(var i = 1; i <= order[0]; i++){
		stack.push(i);
	}

	for(var i = 0; i < order.length; i++){
		if(stack[stack.length-1] > order[i]){
			return false;
		}
		if(stack[stack.length-1] < order[i]){
			while(stack[stack.length-1] < order[i]){
				stack.push(++control);
			}
		}
		if (stack[stack.length-1] == order[i]){
			stack.pop();
			if(stack.length == 0 ) stack.push(0)
		}
	}
	return true;
}

order: [2, 1, 3]
Output:
Empty
Expected Output:
true

order: [3, 1, 2]
Output:
Empty
Expected Output:
false

Input:
order: [5, 3, 2, 4, 1]
Output:
Empty
Expected Output:
false

Input:
order: [5, 4, 7, 6, 3, 8, 2, 9, 10, 1]
Output:
Empty
Expected Output:
true

Input:
order: [1, 10, 9, 11, 12, 8, 13, 7, 6, 14, 4, 3, 5, 2]
Output:
Empty
Expected Output:
false

Input:
order: [1, 3, 2, 5, 6, 8, 7, 10, 9, 11, 13, 12, 4]
Output:
Empty
Expected Output:
true