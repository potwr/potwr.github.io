for(a = 1; a <= 9; a++)
{
	for(b = 1; b <= 9; b++)
	{
		$(".map").append('<div class="cell '+b+'-'+a+' coordX-'+b+' coordY-'+a+'"></div>');
	}
}

$('.5-5').addClass('chosen');
$('.5-5').addClass('1');
let cellNumber = 1;
$('.5-5').text('P');

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

var lastCellCoordX;
var lastCellCoordY;

lastCellCoordX = 5;
lastCellCoordY = 5;

function nextCell() {
	nextCellDirection = randomNumber(1,4);
	if(nextCellDirection == 1) {
		$('.'+lastCellCoordX+'-'+lastCellCoordY).css("border-left", "1px solid brown");
		lastCellCoordX--;
		$('.'+lastCellCoordX+'-'+lastCellCoordY).css("border-right", "1px solid brown");
	}
	else if(nextCellDirection == 2) {
		$('.'+lastCellCoordX+'-'+lastCellCoordY).css("border-bottom", "1px solid brown");
		lastCellCoordY++;
		$('.'+lastCellCoordX+'-'+lastCellCoordY).css("border-top", "1px solid brown");
	}
	else if(nextCellDirection == 3) {
		$('.'+lastCellCoordX+'-'+lastCellCoordY).css("border-right", "1px solid brown");
		lastCellCoordX++;
		$('.'+lastCellCoordX+'-'+lastCellCoordY).css("border-left", "1px solid brown");
	}
	else {
		$('.'+lastCellCoordX+'-'+lastCellCoordY).css("border-top", "1px solid brown");
		lastCellCoordY--;
		$('.'+lastCellCoordX+'-'+lastCellCoordY).css("border-bottom", "1px solid brown");
	}
	
	
	if($('.'+lastCellCoordX+'-'+lastCellCoordY).hasClass('chosen') == false) {
		$('.'+lastCellCoordX+'-'+lastCellCoordY).addClass('chosen');
		cellNumber++;
		//$('.'+lastCellCoordX+'-'+lastCellCoordY).text(cellNumber);
		$('.'+lastCellCoordX+'-'+lastCellCoordY).addClass(`${cellNumber}`);
	}
	else {
		cellNumber++;
		//$('.'+lastCellCoordX+'-'+lastCellCoordY).append(', '+cellNumber)
		$('.'+lastCellCoordX+'-'+lastCellCoordY).addClass(`${cellNumber}`);
		nextCell();
	}
}

for(z = 1; z <= 15; z++) {
	nextCell()
	if(z == 15)
		$('.'+lastCellCoordX+'-'+lastCellCoordY).text("K");
}