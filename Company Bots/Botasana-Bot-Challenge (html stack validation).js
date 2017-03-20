/*
Asana center pane contains a list of tasks. The tasks are placed within rectangular blocks of size height × width and are stacked upon each other. Additionally, empty stripes of size yOffset × width are left between each two consecutive blocks.

To select multiple tasks Asana allows to use Click + Drag, i.e.

to click the first task in your desired selection;
and then to drag the mouse to the last task in your desired selection.
Consider the initial and the final positions of the mouse, then join them by a line. Each task whose rectangular block has at least one common point with this line becomes selected.

To test your skills, Asana engineers suggest you implement the function that determines which tasks are selected based on the initial and the final mouse positions.

Example

For
dimensions = [135, 9, 1],

tasks = ["Task 1", "Task 2", "Task 3", "Very Important Task", 
         "Not So Important Task", "Yet Another Task", "The last task"]
and

mouseCoordinates = [[132, 42], 
                    [35, 13]]
the output should be

multiSelection(dimensions, tasks, mouseCoordinates) = 
    ["Task 2", "Task 3", "Very Important Task", "Not So Important Task"]
"Task 1" occupies the rectangle with upper left corner at (0, 0) and bottom right corner at (135, 9). "Task 2" is placed within the rectangle with corners at (0, 10) and (135, 19). Rectangle corners for the remaining tasks are the following:

"Task 3": (0, 20), (135, 29)
"Very Important Task": (0, 30), (135, 39)
"Not So Important Task": (0, 40), (135, 49)
"Yet Another Task": (0, 50), (135, 59)
"The last task": (0, 60), (135, 69)


Input/Output

[time limit] 4000ms (js)
[input] array.integer dimensions

Array of three positive integers: [width, height, yOffset].

Constraints:
1 ≤ dimensions[i] ≤ 106.

[input] array.string tasks

A non-empty array of strings representing the task names in the top-down order as they appear in the main pane.

Constraints:
1 ≤ tasks.length ≤ 10,
1 ≤ tasks[i].length ≤ 25.

[input] array.array.integer mouseCoordinates

Mouse coordinates in the format [[x1, y1], [x2, y2]].

Constraints:
0 ≤ x1, x2 < width,
0 ≤ y1, y2 < height · tasks.length + yOffset · (tasks.length - 1).

[output] array.string

Array of selected tasks in the top-down order.

*/

function multiSelection(dimensions, tasks, mouseCoordinates) {

	var width = dimensions[0];
	var height = dimensions[1];
	var offset = dimensions[2];
	var rectangleTasks = [];
	var result = [];
	var objcontrol = {};
	var xControl = 0;
	var yControl = 0;
	var xInitial = 0;
	var yInitial = height;
	var mouseInitial = 0;
	var mouseFinal = 0;
	var xAxis = 0
  
  //Create an object to set the ranges
	for(var i = 0; i < tasks.length; i++){
		objcontrol.name = tasks[i];
	    objcontrol.topXLeft = xInitial;
	    objcontrol.topYLeft = xAxis;  
	    objcontrol.bottomXRight = width;
	    objcontrol.bottomYRight = yInitial+xControl;
    	rectangleTasks.push(objcontrol);
    	objcontrol = {};
    	xControl += offset;
    	yInitial += height;
		xAxis += offset+height;
	}

  for(var i = 0; i < mouseCoordinates.length; i++){
  	for(var j = 0; j < mouseCoordinates[i].length; j++){
        if(i == 0 && j == 1){
        	mouseInitial = mouseCoordinates[i][j];
        }else if(i == 1 && j == 1){
        	mouseFinal = mouseCoordinates[i][j];
        }
    }
  }
  
  var flag = false;
  if(mouseInitial > mouseFinal){
	flag = false;
  }else{
	flag = true;
	swap = mouseFinal;
	mouseFinal = mouseInitial;
	mouseInitial = swap;
  }
  
 
  var yposBottom = 0;
  var yposTop = 0;
  var temp = 0;
  for(var i = 0; i < rectangleTasks.length; i++){
		if(rectangleTasks[i]['bottomYRight'] >= mouseFinal && rectangleTasks[i]['topYLeft'] <= mouseInitial){
    		result.push(rectangleTasks[i]['name']);
		}
  }
  return result;
}
//var dimensions = [200, 4, 2] var tasks =  ["one", "twoe","three","foure", "five","sixe","sevene"] var mouseCoordinates = [[170,4], [120,12]] Expected ["one","twoe","three"]
//var dimensions = [10, 4, 4] var tasks =  ["empty", "test"] var mouseCoordinates = [[3,5],  [8,7]] Expected []
//var dimensions = [200, 4, 8] var tasks =   ["1", "2","3","4","5"] var mouseCoordinates = [[0,12],[199,4]] Expected ["1", "2"]
//var dimensions = [30, 12, 3] var tasks =   ["dlkfj","dlfkje","eitjd","lolol"] var mouseCoordinates = [[1,0],[15,30]] Expected ["dlkfj", "dlfkje","eitjd"]
console.log(multiSelection(dimensions, tasks, mouseCoordinates));

/*
While preparing for your first round interview with Asana, you start exploring Luna, Asana's in-house framework for automating Web application creation. For practice - and fun! - you decide to implement a simple HTML-to-Luna converter.

To keep things straightforward, you will only consider 4 HTML tags: div, p, b, img. Here is how valid HTML is constructed:

an empty string is a valid HTML;
<img /> is valid HTML (note the whitespace character between img and /);
if HTML is valid HTML, then <div>HTML</div>, <p>HTML</p> and <b>HTML</b> are all valid.
if HTML1 and HTML2 are both valid HTML, then HTML1HTML2 is valid HTML.
For example, <div><p><img /></p><b></b></div> is valid HTML, but <div><p></div> is invalid.

The conversion of each tag is performed as follows:

<div><arg1><arg2>...</div> → DIV([arg1, arg2, arg3, ... ]);
<p><arg1><arg2>...</p> → P([arg1, arg2, arg3, ... ]);
<b><arg1><arg2>...</b> → B([arg1, arg2, arg3, ... ]);
<img /> → IMG({})
Example

For html = "<div><img /></div>", the output should be
htmlToLuna(html) = "DIV([IMG({})])";
For html = "<div><p><img /></p><b></b></div>", the output should be
htmlToLuna(html) = "DIV([P([IMG({})]), B([])])";
For html = "<div><p></p><p></p><p></p></div>", the output should be
htmlToLuna(html) = "DIV([P([]), P([]), P([])])".
Input/Output

[time limit] 4000ms (js)
[input] string html

Valid HTML, containing only these 4 tags: div, p, b, img.

Constraints:
0 ≤ html.length ≤ 6 · 104.

[output] string

The given HTML converted into the Luna format.

html: "<div><img /></div>"
Output:
Empty
Expected Output:
"DIV([IMG({})])"
Console Output:
Empty

html: "<div><p><img /></p><b></b></div>"
Output:
Empty
Expected Output:
"DIV([P([IMG({})]), B([])])"
Console Output:
Empty

html: "<div><p></p><p></p><p></p></div>"
Output:
Empty
Expected Output:
"DIV([P([]), P([]), P([])])"
Console Output:
Empty

html: "<img />"
Output:
Empty
Expected Output:
"IMG({})"
Console Output:
Empty

html: ""
Output:
Empty
Expected Output:
Empty
Console Output:
Empty

html: "<div></div><p></p><b></b><img />"
Output:
Empty
Expected Output:
"DIV([])P([])B([])IMG({})"
Console Output:
Empty

html: "<div><div><img /></div></div>"
Output:
Empty
Expected Output:
"DIV([DIV([IMG({})])])"
Console Output:
Empty

*/

function htmlToLuna(html) {

  //var array = ['div','/div','b','/b', 'img /','p','/p'];
  html = html.replace(/</g, '').split('>');
  var lastisClose = false; 
  var stack = [];
  var result = '';
  
  if(html.length === 0){
	return ;
  }
  
  for(var i = 0; i < html.length; i++){
	if(html[i] === 'div'){
	    if (stack.length > 0  && lastisClose) {
		  result += ', ';
		}
		lastisClose = false;
		stack.push(html[i]);
		result += 'DIV([';
	}else if (html[i] === '/div'){
		if(stack[stack.length-1] === 'div'){
			stack.pop();
			result += '])';
			lastisClose = true;
		}
	}else if (html[i] === 'b'){
	    if (stack.length > 0  && lastisClose) {
		  result += ', ';
		}
		lastisClose = false;
		stack.push(html[i]);
		result += 'B([';
	}else if (html[i] === '/b'){
		if(stack[stack.length-1] === 'b'){
			stack.pop();
			result += '])';
			lastisClose = true;
		}
	}else if (html[i] === 'img /'){
	    if (stack.length > 0  && lastisClose) {
		  result += ', ';
		}
		result += 'IMG({})';
		lastisClose = true;
	}else if (html[i] === 'p'){
	    if (stack.length > 0 && lastisClose) {
		  result += ', ';
		}
		lastisClose = false;
		stack.push(html[i]);
		result += 'P([';
	}else if (html[i] === '/p'){
		if(stack[stack.length-1] === 'p'){
			stack.pop();
			result += '])';
			lastisClose = true;
		}
	}
  }
  
  return(result);

}


//var html = "<div><img /></div>";
//var html = ""
var html = "<div></div><p></p><b></b><img />"
console.log(htmlToLuna(html));

//Option 2
function htmlToLuna(html) {

  //var array = ['div','/div','b','/b', 'img /','p','/p'];
  html = html.replace(/</g, '').split('>'); //Deleting < and using > as delimiter char
  var lastisClose = false; 
  var stack = [];
  var result = '';
  
  if(html.length === 0){
	return ;
  }
  
  for(var i = 0; i < html.length-1; i++){
	if (html[i].charAt(html[i].length-1) === '/'){ //Self Closing tag
      if (stack.length > 0  && lastisClose) {
		  result += ', ';
		}
		result += html[i].toUpperCase().replace(/\s\//g, '')+'({})';
		lastisClose = true;
    }else if (html[i].charAt(0) === '/'){ //Close tag
        stack.pop();
        result += '])';
        lastisClose = true;
    }else if(html[i].charAt(0) !== '/'){ //Open tag
	  if (stack.length > 0  && lastisClose) {
        result += ', ';
      }
      lastisClose = false;
      stack.push(html[i]);
      result += html[i].toUpperCase()+'([';
    }
  }
  
  if((stack.length > 0){ //Tags not closed
  	console.log('INVALID HTML');
  }else{
  	return(result);
  }

}
				
var html = "<div><div><img /></div></div>"
console.log(htmlToLuna(html));