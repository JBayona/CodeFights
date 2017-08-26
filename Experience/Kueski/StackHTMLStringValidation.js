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