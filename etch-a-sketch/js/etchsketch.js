var cellsOnASide = 80;

$(document).ready(function(){
	create_layout();
	$('td.cell').mouseenter(function(){
		$(this).css("background", "black");
	});
});

function create_layout(){
	for(i=1; i <= cellsOnASide; i++){
		$('table').append('<tr></tr>');
		var currentRow = $('tr:last');
		for(x=1; x <= cellsOnASide; x++){
			currentRow.append('<td class="cell"></td>')
		}
	}
}