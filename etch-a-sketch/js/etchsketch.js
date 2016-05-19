var cellsOnASide = 80;
var cell_height = "10px";
var cell_width = "10px";

$(document).ready(function(){
	create_layout();
	$('div.cell').mouseenter(function(){
		$(this).css("background", "black");
	});
});

function create_layout(){
	for(i=1; i <= (cellsOnASide*cellsOnASide); i++){
		$('#wrapper').append('<div class="cell"></div>');
	}
	$('div.cell').css("height", cell_height);
	$('div.cell').css("width", cell_width);
}