$(document).ready(function(){
	//Get the initial values for the app
	$('#tableStock tbody').html(getInformation(data));
	
});

function getInformation(response){
	let stock = $.map(response, (item, index) => {
		let tr = $("<tr></tr>");
		let name = $("<td>" + item.name + "</td>").appendTo(tr);
		let rooms = $("<td>" + item.totalRooms + "</td>").appendTo(tr);
		let available = $("<td>" + item.available + "</td>").appendTo(tr);
		let reserved = $("<td>" + item.reserved + "</td>").appendTo(tr);
		return tr;
	});
	return stock;
}

//Polling technique
(function poll() {
   setTimeout(function() {
       /*$.ajax({ url: "server", success: function(data) {
            sales.setValue(data.value);
       }, dataType: "json", complete: poll });*/
   		getInformation(data);
   		console.log('Testing');
   		poll();
    }, 50000); //5 minutes
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
	{name: 'Meninger', totalRooms: 25345, available: 1234, reserved: 24111},
	{name: 'Best Western', totalRooms: 3456, available: 345, reserved: 311},
	{name: 'White Moon', totalRooms: 34567, available: 2134, reserved: 32433},
	{name: 'Holiday Inn', totalRooms: 1324, available: 1200, reserved: 34},
	{name: 'Ozzo', totalRooms: 345, available: 150, reserved: 195},	
	{name: 'Fletcher', totalRooms: 5673, available: 5600, reserved: 73},
	{name: 'Jaz', totalRooms: 456, available: 23, reserved: 433},
	{name: 'HN Collection', totalRooms: 678, available: 234, reserved: 444},
	{name: 'Mercure Amsterdam', totalRooms: 234, available: 100, reserved: 134},
	{name: 'Ramada Apollo', totalRooms: 789, available: 478, reserved: 311},
	{name: 'Amadi Panorama', totalRooms: 234, available: 53, reserved: 181},
	{name: 'Urban Lodge', totalRooms: 45, available: 13, reserved: 32},
];