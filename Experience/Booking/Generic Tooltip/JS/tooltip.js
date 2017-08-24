let Tooltip = {
	init: function(el, tooltipMsg){
		let element = $(el);
		if(element){
			/*Si fuera más de un elemento necesitamos un for*/
			/*Esta forma de mandar los eventos los manda como parte
			del dataset del elemento*/
			//element.mouseover({content: tooltipMsg}, this.showTooltip);
			element.mouseover({content: tooltipMsg}, this.showTooltip);
			element.mouseout(this.hideTooltip);
		}
	},
	showTooltip: function(event){
		/*relative position para 	que sea relativo al padre*/
		let targetElement = $(event.target).addClass('parent');
		let span = $("<span></span>").addClass("tooltip");
		/*El mensaje se envía dentro del dataset*/
		let message = event.data.content;
		span.text(message);
		targetElement.append(span);
	},
	hideTooltip: function(event){
		$(event.target).find(".tooltip").remove();
	}
};


$(document).ready(function(){
	Tooltip.init('div','Div tooltip');
	Tooltip.init('#myDiv2','Div tooltip 2');
	Tooltip.init('p', 'Paragraph tooltip');
	Tooltip.init('span', 'Span tooltip');
	Tooltip.init('body *', 'Todos!');
});