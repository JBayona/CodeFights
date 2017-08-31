/*
    Canvas en el document.ready
    var myCanvas = document.getElementById("myCanvas");
    myCanvas.width = 300;
    myCanvas.height = 300;
    var ctx = myCanvas.getContext("2d");
    var myPiechart = new Piechart(
        {
            canvas:myCanvas,
            data:getHotelData(dataHotels, totalRooms),
            colors:["#C0C0C0","#FF0000", "#800000","#FFFF00", "#00FF00", "#008000", "#00FFFF", "#FF00FF", 
            "#FFC300", "#D35400", "#C49D33", "#3E79A4"],
            legend:myLegend
        }
    );
    myPiechart.draw();
*/

function getHotelData(dataHotels, totalRooms){
    var formated = {};
    for(hotel in dataHotels){
        formated[hotel] = ((dataHotels[hotel] * 100) / totalRooms).toFixed(2) * 1;
    }
    return formated;
}

//Object we will use to store the information of the statistis
var dataHotels = {};
var totalRooms = 0;


/*
ctx - Reference to the drawing context
startX - X coordinate of the line starting
startY - Y coordinate of the line starting
endX - X coordinate the end of the line
endY - Y coodinate the end of the line
*/
function drawLine(ctx, startX, startY, endX, endY){
    ctx.beginPath();
    ctx.moveTo(startX,startY);
    ctx.lineTo(endX,endY);
    ctx.stroke();
}

function drawArc(ctx, centerX, centerY, radius, startAngle, endAngle){
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.stroke();
}

function drawPieSlice(ctx,centerX, centerY, radius, startAngle, endAngle, color ){
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(centerX,centerY);
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.closePath();
    ctx.fill();
}


/*Pie Chart*/

var Piechart = function(options){
    this.options = options;
    this.canvas = options.canvas;
    this.ctx = this.canvas.getContext("2d");
    this.colors = options.colors;
 
    this.draw = function(){
        var total_value = 0;
        var color_index = 0;
        for (var categ in this.options.data){
            var val = this.options.data[categ];
            total_value += val;
        }
 
        var start_angle = 0;
        for (categ in this.options.data){
            val = this.options.data[categ];
            var slice_angle = 2 * Math.PI * val / total_value;
 
            drawPieSlice(
                this.ctx,
                this.canvas.width/2,
                this.canvas.height/2,
                Math.min(this.canvas.width/2,this.canvas.height/2),
                start_angle,
                start_angle+slice_angle,
                this.colors[color_index%this.colors.length]
            );
 
            start_angle += slice_angle;
            color_index++;
        }
        if (this.options.legend){
            color_index = 0;
            var legendHTML = "";
            for (categ in this.options.data){
                legendHTML += "<div><span style='display:inline-block;width:20px;background-color:"+this.colors[color_index++]+";'>&nbsp;</span> "+categ+"</div>";
            }
            this.options.legend.innerHTML = legendHTML;
        }
    }
}

var myVinyls = {
    "Classical music": 10,
    "Alternative rock": 14,
    "Pop": 2,
    "Jazz": 12
};

/*
ctx - Reference to the drawing context
startX - X coordinate of the line starting
startY - Y coordinate of the line starting
endX - X coordinate the end of the line
endY - Y coodinate the end of the line
*/
function drawLine(ctx, startX, startY, endX, endY){
    ctx.beginPath();
    ctx.moveTo(startX,startY);
    ctx.lineTo(endX,endY);
    ctx.stroke();
}

function drawArc(ctx, centerX, centerY, radius, startAngle, endAngle){
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.stroke();
}

function drawPieSlice(ctx,centerX, centerY, radius, startAngle, endAngle, color ){
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(centerX,centerY);
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.closePath();
    ctx.fill();
}