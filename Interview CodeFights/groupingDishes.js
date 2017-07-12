/*
You have a list of dishes. Each dish is associated with a list of ingredients used to prepare it. You want to group the dishes by ingredients, so that for each ingredient you'll be able to find all the dishes that contain it (if there are at least 2 such dishes).

Return an array where each element is a list with the first element equal to the name of the ingredient and all of the other elements equal to the names of dishes that contain this ingredient. The dishes inside each list should be sorted lexicographically. The result array should be sorted lexicographically by the names of the ingredients in its elements.

Example

For
  dishes = [["Salad", "Tomato", "Cucumber", "Salad", "Sauce"],
            ["Pizza", "Tomato", "Sausage", "Sauce", "Dough"],
            ["Quesadilla", "Chicken", "Cheese", "Sauce"],
            ["Sandwich", "Salad", "Bread", "Tomato", "Cheese"]]
the output should be
  groupingDishes(dishes) = [["Cheese", "Quesadilla", "Sandwich"],
                            ["Salad", "Salad", "Sandwich"],
                            ["Sauce", "Pizza", "Quesadilla", "Salad"],
                            ["Tomato", "Pizza", "Salad", "Sandwich"]]
For
  dishes = [["Pasta", "Tomato Sauce", "Onions", "Garlic"],
            ["Chicken Curry", "Chicken", "Curry Sauce"],
            ["Fried Rice", "Rice", "Onions", "Nuts"],
            ["Salad", "Spinach", "Nuts"],
            ["Sandwich", "Cheese", "Bread"],
            ["Quesadilla", "Chicken", "Cheese"]]
the output should be
  groupingDishes(dishes) = [["Cheese", "Quesadilla", "Sandwich"],
                            ["Chicken", "Chicken Curry", "Quesadilla"],
                            ["Nuts", "Fried Rice", "Salad"],
                            ["Onions", "Fried Rice", "Pasta"]]
							
https://codefights.com/interview-practice/task/xrFgR63cw7Nch4vXo/description
*/

function groupingDishes(dishes){
	var hash = {};
	var result = [];
	//Create hash with the dishes
	for(let i = 0; i < dishes.length; i++){
	  for(let j = 0; j <dishes[i].length; j++){
		if(j !== 0){
		  if(!(dishes[i][j] in hash)){
			hash[dishes[i][j]] = [dishes[i][0]];
		  }else{
			hash[dishes[i][j]].push(dishes[i][0]);
		  }
		}
	  }
	}
	//Pass to an array
	for(let prop in hash){
	  if(hash[prop].length > 1){
		result.push([prop, ...sorted(hash[prop])]);
	  }
	}
	//Finally sort for first element that is the dish
	return result.sort((a,b)=>{
	  first = a[0];
	  second = b[0];
	  if(first < second) return -1;
	  if(first > second) return 1;
	  return 0;
	});
}

sorted = array => array.sort();

dishes = [["Salad", "Tomato", "Cucumber", "Salad", "Sauce"],
		["Pizza", "Tomato", "Sausage", "Sauce", "Dough"],
		["Quesadilla", "Chicken", "Cheese", "Sauce"],
		["Sandwich", "Salad", "Bread", "Tomato", "Cheese"]];

console.log(groupingDishes(dishes));