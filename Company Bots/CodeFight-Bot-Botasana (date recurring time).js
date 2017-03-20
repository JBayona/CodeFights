function tasksTypes(deadlines, day) {
	var today = 0;
	var uncoming = 0;
	var later = 0;
	for (var i =0; i < deadlines.length; i++){
		if(deadlines[i] <= day){
			today++;
		}else if(deadlines[i] <= (7+day) && deadlines[i] > day){
			uncoming++;
		}else if(deadlines[i] > 7){
			later++;
		}
	}
		return [today,uncoming,later];
}

//Test 1
/*
deadlines: [1, 2, 3, 4, 5]
day: 2
[2, 3, 0]

console.log(tasksTypes([1, 2, 3, 4, 5],2));*/

//Test 2
/*
deadlines: [1, 2, 3, 4, 5]
day: 2
[2, 3, 0]
*/
//console.log(tasksTypes([1, 2, 4, 2, 10, 3, 1, 4, 5, 4, 9, 8],1));

//Test 3
/*
deadlines: [1]
day: 1
[1, 0, 0]
*/
//console.log(tasksTypes([1],1));

//Test 4
/*
deadlines: [8]
day: 1
[0, 1, 0]
*/
//console.log(tasksTypes([8],1));

//Test 5
/*
deadlines: [4, 14, 16]
day: 7
[1, 1, 1]
*/
console.log(tasksTypes([4,14,16],7));

function smartAssigning(information) {
	var array = [];
	for(var i = 0; i < information.length; i++){
		if(information[i][1] == 1){
			array.push(information[i]);
		}
	}

	var task = array[0][3];
	var projects = array[0][2];
	var index = 0;
	for(var i = 0; i < array.length; i++){
		if(array[i][3] < array[index][3]){ //task
			task = array[i][3];
			index = i
		}else if(array[i][3] == array[index][3]){ //task
			if(array[i][2] < array[index][2]){
				projects = array[i][2];
				index = i;
			}
		}
   }
   return array[index][0];
}

	if(array[i][3] < array[index][3]){
(5:16:36 PM) vincent.gerard@oracle.com: if(array[i][2] < array[index][2])){

//Test 1
/*
deadlines: [["John","1","2","6"], 
 ["Martin","1","1","5"]]
"Martin"
*/
console.log(smartAssigning([["John","1","2","6"],["Martin","1","1","5"]]));

//Test 2
/*
deadlines: [["John","1","2","6"],
 ["Martin","0","1","5"]]
"John"
*/
//console.log(smartAssigning([["John","1","2","6"],["Martin","0","1","5"]]));

//Test 3
/*
deadlines: [["John","1","1","6"],
 ["Martin","0","1","5"]]
"John"
*/
//console.log(smartAssigning([["John","1","1","6"],["Martin","1","2","6"]]));

//Test 4
/*
deadlines: [["John","1","10","10"]]
"John"
*/
//console.log(smartAssigning([["John","1","10","10"]]));

//Test 5
/*
deadlines: [["John","1","1","2"], ["Martin","0","0","0"],["Luke","1","2","1"]]
"Luke"
*/
//console.log(smartAssigning([["John","1","1","2"], ["Martin","0","0","0"],["Luke","1","2","1"]]));

If you have a task that you need to complete on a regular basis, you can set it up in Asana as a recurring task. One option is to schedule the task to repeat every k weeks on specified days of the week.

It would be useful to be able to view the first n dates for which the task is scheduled. Given the first date for which the task is scheduled, return an array of the first n dates.

In this task, you'll likely need month lengths and weekday names, provided here:

Month lengths from January to December: 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31.

During leap years February has 29 days.
Names of weekdays: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday".

January 1, 2015 was a Thursday.

Example

Sumar el numero de dias a cada valor del elemento que te da, del dia que cae mas el numero de dias dependiendo de los numeros de la semana que tenemos

For firstDate = "01/01/2015", k = 2, daysOfTheWeek = ["Monday", "Thursday"] and n = 4, the output should be

recurringTask(firstDate, k, daysOfTheWeek, n) = 
    ["01/01/2015", "05/01/2015", "15/01/2015", "19/01/2015"]

firstDate: "01/01/2015"
k: 2
daysOfTheWeek: ["Monday", "Thursday"]
n: 4
Output:
Empty
Expected Output:
["01/01/2015", 
 "05/01/2015", 
 "15/01/2015", 
 "19/01/2015"]
Console Output:
Empty

Input:
firstDate: "30/05/1995"
k: 4
daysOfTheWeek: ["Tuesday"]
n: 1
Output:
Empty
Expected Output:
["30/05/1995"]
Console Output:
Empty

firstDate: "22/02/2020"
k: 1
daysOfTheWeek: ["Saturday"]
n: 2
Output:
Empty
Expected Output:
["22/02/2020", 
 "29/02/2020"]
Console Output:
Empty

firstDate: "01/02/2100"
k: 4
daysOfTheWeek: ["Sunday","Monday"]
n: 4
Output:
Empty
Expected Output:
["01/02/2100", 
 "07/02/2100", 
 "01/03/2100", 
 "07/03/2100"]
Console Output:
Empty

firstDate: "23/02/2000"
k: 2
daysOfTheWeek: ["Wednesday","Friday"]
n: 4
Output:
Empty
Expected Output:
["23/02/2000", 
 "25/02/2000", 
 "08/03/2000", 
 "10/03/2000"]
Console Output:
Empty

firstDate: "31/12/2999"
k: 1
daysOfTheWeek: ["	"]
n: 2
Output:
Empty
Expected Output:
["31/12/2999", 
 "07/01/3000"]
Console Output:
Empty

var result = [];
  
function recurringTask(firstDate, k, daysOfTheWeek, n){

  //The date parameter is dd/mm/yyyy to pass to Date() constructor we need it in format mm/dd/yyyy
  var chunks = firstDate.split('/'); 
  var firstDate = chunks[1]+'/'+chunks[0]+'/'+chunks[2];
  
  var daysWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var array = [];
  var delta = 0;
  var currentOffset = undefined;
  
	//Loop to set true and false depending the required days of the week
	for(var i=0; i < daysWeek.length; i++){
		for(var j=0; j < daysOfTheWeek.length; j++){
			if(daysWeek[i] === daysOfTheWeek[j]){
				array.push(true);
				break;
			}else if(daysWeek[i] !== daysOfTheWeek[j] && daysOfTheWeek.length-1 == j){
				array.push(false);
			}
		}
	}
	
  //The offset will be the day of the week of the initial day 
  currentOffset = getOffset(firstDate); 
  
  for(var i=0; i < n;){
  	if(array[(currentOffset+delta)%7]){ //Con esto recorreremos todo el array en busca de un true en donde se solicite la fecha,
		//si lo encontramos sumamos la variable que cuenta el número de elementos que solicitan
  		pushDateToArray(firstDate,delta);
    	i++;
  	}
    delta++; //Delta cuenta el número de de días que nos alejamos del offset, con la condición siguiente vemos si ya transcurrió una semanas
    if(delta%7 === 0){
    	delta = 7 * (k);
    }
  }
  
  return result;
  
}

function pushDateToArray(firstDate,delta){
	var date = new Date(firstDate);
	date.setDate(date.getDate() + delta);
	result.push(formatDate(date))
}

function getOffset(firstDate){
	//Get the initial date of the week
	var d = new Date(firstDate);
	console.log(d.getDay());
	return d.getDay();
}

function formatDate(date){
	//Format date as dd/mm/yyyy
	function pad(s) { 
  	return (s < 10) ? '0' + s : s; 
  }
  return [pad(date.getDate()), pad(date.getMonth()+1),date.getFullYear()].join('/');
}

console.log(recurringTask("31/12/2999",1,["Tuesday"],2));