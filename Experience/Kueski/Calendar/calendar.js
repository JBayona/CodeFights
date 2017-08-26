events = {};
window.onload = function(){
    var d = new Date();
    var month_name = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    var todaysDay = d.getDate();
    var month = d.getMonth();   //0-11
    var year = d.getFullYear(); //2017
    var first_date = month_name[month] + " " + 1 + " " + year;
    //September 1 2017
    var tmp = new Date(first_date).toDateString();
    //Mon Sep 01 2017 ...
    var first_day = tmp.substring(0, 3);    //Mon
    var day_name = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    var day_no = day_name.indexOf(first_day);   //1
    var days = new Date(year, month+1, 0).getDate();    //30
    //Tue Sep 30 2014 ...
    var calendar = get_calendar(day_no, days,todaysDay);
    assignEvent(calendar);
    document.getElementById("calendar-month-year").innerHTML = month_name[month]+" "+year;
    document.getElementById("calendar-dates").appendChild(calendar);
}

function get_calendar(day_no, days, today){
    var table = document.createElement('table');
    var tr = document.createElement('tr');
    
    //row for the day letters (week)
    for(var i=0; i<=6; i++){
        var td = document.createElement('td');
        td.innerHTML = "SMTWTFS"[i];
        tr.appendChild(td);
    }
    table.appendChild(tr);
    
    //create 2nd row white spaces
    tr = document.createElement('tr');
    var c;
    for(c=0; c<=6; c++){
        var td = document.createElement('td');
        td.innerHTML = "";
        tr.appendChild(td);
    }
    
    //Empieza la numeración
    var count = 1;
    for(; c<=6; c++){
        var td = document.createElement('td');
        if(c == today){
        	td.style.background = 'red';
        	td.style.color = 'white';
        }
        td.innerHTML = count;
        count++;
        tr.appendChild(td);
    }
    table.appendChild(tr);
    
    //rest of the date rows
    for(var i=3; i<=7; i++){
        tr = document.createElement('tr');
        for(var j=0; j<=6; j++){
            if(count > days){
                table.appendChild(tr);
                return table;
            }
            var td = document.createElement('td');
            if(count == today){
            	td.style.background = 'red';
            	td.style.color = 'white';
            }
            td.innerHTML = count;
            td.id = count;
            count++;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
	return table;
}

 function assignEvent(tableCalendar){
 	var cells = tableCalendar.getElementsByTagName("td"); 
	for (var i = 0; i < cells.length; i++) { 
		if(cells[i].id)
   		cells[i].onclick = function() { eventDate(this); };
	}
 }

 function eventDate(data){
 	var eventInput = document.getElementById("textEvent");
 	eventInput.value = "";
 	var element = document.getElementById("event-day")
 	element.innerText = "Event for day " + data.id; //Set the text for the event
 	var inputField = document.getElementById("hiddenInput");
 	inputField.value = data.id; //Aux field
 }

 function addEvent(){
 	var element = document.getElementById("hiddenInput");
 	var eventInput = document.getElementById("textEvent");
 	if(events[element.value]){
 	  events[element.value].push(eventInput.value);
 	}else{
 		events[element.value] = [eventInput.value];
 	}
 	
 	var text = "";
 	for(var prop in events){
 		text += prop + " - " + events[prop].join(',') + "\n";
 	}

 	var pElement = document.getElementById('eventsSummary');
 	pElement.innerText = text;

 	//Clean input
 	eventInput.value = "";
 }