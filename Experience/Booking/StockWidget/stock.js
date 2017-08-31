$(document).ready(function(){
	//Get the initial values for the app
	$('#tableStock tbody').html(getInformation(data));
	//$('tbody').detach().html(getInformation(data)).appendTo('table');
    //Canvas settings
    var ctx = $("#myCanvas").get(0).getContext("2d");
    var pieChart = new Chart(ctx).Pie(getPieChartData(dataHotels, totalRooms));

});

//Information for Pie Chart
dataHotels = {};
totalRooms = 0;

function getInformation(response){
	let stock = $.map(response, (item, index) => {
        //Form the object of the chart
        dataHotels[item.name] = item.available;
        totalRooms += item.available;
        /*Draw the table*/
		let tr = $("<tr></tr>");
		let name = $("<td>" + item.name + "</td>").appendTo(tr);
		let rooms = $("<td>" + item.totalRooms + "</td>").appendTo(tr);
		let available = $("<td>" + item.available + "</td>").appendTo(tr);
		let reserved = $("<td>" + item.reserved + "</td>").appendTo(tr);
		return tr;
	});
	return stock;
}

function getPieChartData(dataHotels, totalRooms){
    var data =  [];
    for(var hotel in dataHotels){
        let tmp = {};
        tmp.value = ((dataHotels[hotel] * 360) / totalRooms).toFixed(2) * 1; //Implicit parse to number
        tmp.color = getRandomColor();
        tmp.highlight = 'lightskyblue';
        tmp.label = hotel;
        data.push(tmp);
    }
    return sortPieData(data);
}

/*Para poner de mayor a menos, hacemos un sort
del arreglo tomando como criterio el valor del dato*/
function sortPieData(array){
    return array.sort((a,b) => b.value - a.value);
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    /*Random de las letras, color en hexadecimal*/
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function updateTable(dataHotels, totalRooms){
    $("#myCanvas").remove();
    var canvas = $("<canvas id = 'myCanvas' width = '300' height = '300'></canvas>");
    canvas.appendTo("#containerCanvas");
    var ctx = canvas.get(0).getContext("2d");
    pieChart = new Chart(ctx).Pie(getPieChartData(dataHotels, totalRooms));
}

//Polling technique
/*Es mejor utulizar pollong apoyándonos con el server como usar push
notifications o Socket.IO, otra opción es Websockets, si insistimos usar
el polling en nuestra aplicación, podemos usar setTimeout*/
(function poll() {
   setTimeout(function() {
        /*
            $.ajax({
                type: 'GET',
                url: "myUrl",
                headers: myHeaders,
                dataType: 'json'
            }).done(function(response){
                $('#tableStock tbody').html(getInformation(data));
                updateTable(dataHotels, totalRooms);
                console.log('Testing');
                poll();
            });
        */
       /*$.ajax({ url: "server", success: function(data) {
            sales.setValue(data.value);
       }, dataType: "json", complete: poll });*/
        //Update the content
        //getInformation(data);
        $('#tableStock tbody').html(getInformation(data));
        updateTable(dataHotels, totalRooms);
        console.log('Testing');
        poll();
    }, 5000); //5 seconds
})();

//Opción 2
/*
(function poll(){
   setTimeout(function(){
      $.ajax({ url: "server", success: function(data){
        //Update your dashboard gauge
        salesGauge.setValue(data.value);

        //Setup the next poll recursively
        poll();
      }, dataType: "json"});
  }, 30000);
})();
*/

//Option 3
/*
socket.on('sales', function (data) {
    //Update your dashboard gauge
    salesGauge.setValue(data.value);

    socket.emit('profit', { my: 'data' });
  });
*/

/*$.getJSONa(jax({
			type: 'GET',
			url: 'data.js',
			dataType: 'json'
		}).done(function(response){
			console.log(response);
});)*/

const data = [
	{name: 'Meninger', totalRooms: 253, available: 156, reserved: 97},
	{name: 'Best Western', totalRooms: 834, available: 578, reserved: 256},
	{name: 'White Moon', totalRooms: 145, available: 87, reserved: 58},
	{name: 'Holiday Inn', totalRooms: 821, available: 389, reserved: 432},
	{name: 'Ozzo', totalRooms: 745, available: 534, reserved: 211},	
	{name: 'Fletcher', totalRooms: 489, available: 312, reserved: 177},
	{name: 'Jaz', totalRooms: 823, available: 723, reserved: 100},
	{name: 'HN Collection', totalRooms: 575, available: 289, reserved: 286},
	{name: 'Mercure Amsterdam', totalRooms: 938, available: 742, reserved: 196},
	{name: 'Ramada Apollo', totalRooms: 379, available: 174, reserved: 205},
	{name: 'Amadi Panorama', totalRooms: 321, available: 123, reserved: 198},
	{name: 'Urban Lodge', totalRooms: 935, available: 834, reserved: 101},
];