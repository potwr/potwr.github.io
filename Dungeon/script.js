for(a = 1; a <= 9; a++)
{
	for(b = 1; b <= 9; b++)
	{
		$(".map").append('<div class="bigger-cell"><div class="cell-top"><div class="cell-corner"></div><div class="wall-top cell-'+b+'-'+a+' coordX-'+b+' coordY-'+a+'" data-coordX='+b+' data-coordY='+a+'></div><div class="exit-top cell-'+b+'-'+a+' coordX-'+b+' coordY-'+a+'" data-coordX='+b+' data-coordY='+a+'></div><div class="wall-top cell-'+b+'-'+a+' coordX-'+b+' coordY-'+a+'" data-coordX='+b+' data-coordY='+a+'></div><div class="cell-corner"></div></div><div class="cell-middle"><div class="cell-left-compartment"><div class="wall-left cell-'+b+'-'+a+' coordX-'+b+' coordY-'+a+'" data-coordX='+b+' data-coordY='+a+'></div><div class="exit-left cell-'+b+'-'+a+' coordX-'+b+' coordY-'+a+'" data-coordX='+b+' data-coordY='+a+'></div><div class="wall-left cell-'+b+'-'+a+' coordX-'+b+' coordY-'+a+'" data-coordX='+b+' data-coordY='+a+'></div></div><div class="cell-body cell-'+b+'-'+a+' coordX-'+b+' coordY-'+a+'" data-coordX='+b+' data-coordY='+a+'></div><div class="cell-right-compartment"><div class="wall-right cell-'+b+'-'+a+' coordX-'+b+' coordY-'+a+'" data-coordX='+b+' data-coordY='+a+'></div><div class="exit-right cell-'+b+'-'+a+' coordX-'+b+' coordY-'+a+'" data-coordX='+b+' data-coordY='+a+'></div><div class="wall-right cell-'+b+'-'+a+' coordX-'+b+' coordY-'+a+'" data-coordX='+b+' data-coordY='+a+'></div></div></div><div class="cell-bottom"><div class="cell-corner"></div><div class="wall-bottom cell-'+b+'-'+a+' coordX-'+b+' coordY-'+a+'" data-coordX='+b+' data-coordY='+a+'></div><div class="exit-bottom cell-'+b+'-'+a+' coordX-'+b+' coordY-'+a+'" data-coordX='+b+' data-coordY='+a+'></div><div class="wall-bottom cell-'+b+'-'+a+' coordX-'+b+' coordY-'+a+'" data-coordX='+b+' data-coordY='+a+'></div><div class="cell-corner"></div></div></div>');
	}
}

for(a = 1; a <= 9; a++)
{
	$('.legend-left').append('<div class="map-legend-number map-legend-number-left">'+a+'</div>');
	$('.legend-bottom').append('<div class="map-legend-number map-legend-number-bottom">'+a+'</div>');
}

$('.cell-body.cell-5-9').addClass('chosen');
$('.cell-body.cell-5-9').addClass('first-cell');
let cellNumber = 1;

function randomNumber(min, max)
{
	return Math.floor(Math.random() * (max - min + 1) + min)
}

var lastCellCoordX = 5;
var lastCellCoordY = 9;
var directionsNumber = 3;
var pathLength = 20;

var coordXtoBranch = [];
var coordYtoBranch = [];
var branchedCells = [];

function generateCellsToBranch()
{
	for(x = 1; x <= 10; x++)
	{
		var cellToBranch = randomNumber(3, pathLength);
		if(branchedCells.includes(cellToBranch))
		{
			x--;
		}
		else
		{
			branchedCells.push(cellToBranch);
		}
	}
}

generateCellsToBranch()

function nextCell() {
	nextCellDirection = randomNumber(1, directionsNumber);

	if((nextCellDirection == 1 && lastCellCoordX == 1) || (nextCellDirection == 2 && lastCellCoordY == 1) || (nextCellDirection == 3 && lastCellCoordX == 9) || (nextCellDirection == 4 && lastCellCoordY == 9))
	{
		return;
	}

	for(a = 0; a < branchedCells.length; a++)
		{
			if(cellNumber == branchedCells[a])
			{
				coordXtoBranch[a] = lastCellCoordX;
				coordYtoBranch[a] = lastCellCoordY;
			}
		}

	if(nextCellDirection == 1) { //left
		$('.exit-left.cell-'+lastCellCoordX+'-'+lastCellCoordY).addClass('exit-opened');
		lastCellCoordX--;
		$('.exit-right.cell-'+lastCellCoordX+'-'+lastCellCoordY).addClass('exit-opened');
	}
	else if(nextCellDirection == 2) { //up
		$('.exit-top.cell-'+lastCellCoordX+'-'+lastCellCoordY).addClass('exit-opened');
		lastCellCoordY--;
		$('.exit-bottom.cell-'+lastCellCoordX+'-'+lastCellCoordY).addClass('exit-opened');
	}
	else if(nextCellDirection == 3) { //right
		$('.exit-right.cell-'+lastCellCoordX+'-'+lastCellCoordY).addClass('exit-opened');
		lastCellCoordX++;
		$('.exit-left.cell-'+lastCellCoordX+'-'+lastCellCoordY).addClass('exit-opened');
	}
	else {  //down
		$('.exit-bottom.cell-'+lastCellCoordX+'-'+lastCellCoordY).addClass('exit-opened');
		lastCellCoordY++;
		$('.exit-top.cell-'+lastCellCoordX+'-'+lastCellCoordY).addClass('exit-opened');
	}
	
	
	if($('.cell-body.cell-'+lastCellCoordX+'-'+lastCellCoordY).hasClass('chosen') == false) {
		$('.cell-body.cell-'+lastCellCoordX+'-'+lastCellCoordY).addClass('chosen');
		cellNumber++;
		//$('.cell-body.cell-'+lastCellCoordX+'-'+lastCellCoordY).text(cellNumber);
		$('.cell-body.cell-'+lastCellCoordX+'-'+lastCellCoordY).addClass('next-cell-'+`${cellNumber}`);
	}
	else {
		cellNumber++;
		//$('.cell-body.cell-'+lastCellCoordX+'-'+lastCellCoordY).append(', '+cellNumber)
		$('.cell-body.cell-'+lastCellCoordX+'-'+lastCellCoordY).addClass('next-cell-'+`${cellNumber}`);
		nextCell();
	}
}

function generateMap()
{
for(z = 1; z <= pathLength; z++)
	{
		nextCell()
		if(z > pathLength/2)
		{
			directionsNumber = 4;
		}
		if(z == pathLength)
		{
			$('.cell-body.cell-'+lastCellCoordX+'-'+lastCellCoordY).addClass('end-cell');
		}
	}
}

generateMap();

function generateBranch(arrayNumber, branchLength)
{
	lastCellCoordX = coordXtoBranch[arrayNumber];
	lastCellCoordY = coordYtoBranch[arrayNumber];
	for(l = 1; l <= branchLength; l++)
	{
		nextCell();
	}
}

generateBranch(0, 4);

var characterCoordX = 5;
var characterCoordY = 9;

var characterDirection = 2;
//1 = left
//2 = up
//3 = right
//4 = down

characterCursorDirection = ['', '<div class="character-cursor"><div><div class="character-cursor-15-15"></div><div class="character-cursor-14-15"></div><div class="character-cursor-15-15"></div></div><div><div class="character-cursor-15-14"></div><div class="character-cursor-14-14"></div><div class="character-cursor-15-14">←</div></div><div><div class="character-cursor-15-15"></div><div class="character-cursor-14-15"></div><div class="character-cursor-15-15"></div></div></div>', '<div class="character-cursor"><div><div class="character-cursor-15-15"></div><div class="character-cursor-14-15"></div><div class="character-cursor-15-15"></div></div><div><div class="character-cursor-15-14"></div><div class="character-cursor-14-14"></div><div class="character-cursor-15-14"></div></div><div><div class="character-cursor-15-15"></div><div class="character-cursor-14-15">↑</div><div class="character-cursor-15-15"></div></div></div>', '<div class="character-cursor"><div><div class="character-cursor-15-15"></div><div class="character-cursor-14-15"></div><div class="character-cursor-15-15"></div></div><div><div class="character-cursor-15-14">→</div><div class="character-cursor-14-14"></div><div class="character-cursor-15-14"></div></div><div><div class="character-cursor-15-15"></div><div class="character-cursor-14-15"></div><div class="character-cursor-15-15"></div></div></div>', '<div class="character-cursor"><div><div class="character-cursor-15-15"></div><div class="character-cursor-14-15">↓</div><div class="character-cursor-15-15"></div></div><div><div class="character-cursor-15-14"></div><div class="character-cursor-14-14"></div><div class="character-cursor-15-14"></div></div><div><div class="character-cursor-15-15"></div><div class="character-cursor-14-15"></div><div class="character-cursor-15-15"></div></div></div>'];
$('.cell-body.cell-5-9').append(characterCursorDirection[2]);

function areThereDoors()
{
	if($('.exit-left.cell-'+characterCoordX+'-'+characterCoordY).hasClass("exit-opened"))
	{
		$('.dungeon-door-left').addClass('dungeon-door-present');
	}
	
	if($('.exit-top.cell-'+characterCoordX+'-'+characterCoordY).hasClass("exit-opened"))
	{
		$('.dungeon-door-middle').addClass('dungeon-door-present');
	}
	
	if($('.exit-right.cell-'+characterCoordX+'-'+characterCoordY).hasClass("exit-opened"))
	{
		$('.dungeon-door-right').addClass('dungeon-door-present');
	}
	
	if($('.exit-bottom.cell-'+characterCoordX+'-'+characterCoordY).hasClass("exit-opened"))
	{
		$('.dungeon-door-back').addClass('dungeon-door-present');
	}
}

areThereDoors();

function clearRoom()
{
	$('.dungeon-door-present').removeClass('dungeon-door-present');
	$('.active-cell').removeClass('active-cell');
	$('.cell-body.cell-'+characterCoordX+'-'+characterCoordY).empty();
	$('.first-cell').empty();
}

function directionsSwitch()
{
	switch(characterDirection)
	{
		case 1:
			characterCoordX--;
			break;

		case 2:
			characterCoordY--;
			break;

		case 3:
			characterCoordX++;
			break;

		case 4:
			characterCoordY++;
			break;
	}
}

function goInDirection(directionName)
{
	switch(directionName)
	{
		case "forward":
			if($('.dungeon-door-middle').hasClass("dungeon-door-present"))
			{
				clearRoom();
				characterCoordY--;
				characterDirection = 2;
				$('.cell-body.cell-'+characterCoordX+'-'+characterCoordY).addClass('active-cell');
			}
			break;

		case "left":
			if($('.dungeon-door-left').hasClass("dungeon-door-present"))
			{
				clearRoom();
				characterCoordX--;
				characterDirection = 1;
				$('.cell-body.cell-'+characterCoordX+'-'+characterCoordY).addClass('active-cell');
			}
			break;

		case "right":
			if($('.dungeon-door-right').hasClass("dungeon-door-present"))
			{
				clearRoom();
				characterCoordX++;
				characterDirection = 3;
				$('.cell-body.cell-'+characterCoordX+'-'+characterCoordY).addClass('active-cell');
			}
			break;

		case "back":
			if($('.dungeon-door-back').hasClass("dungeon-door-present"))
			{
				clearRoom();
				characterCoordY++;
				characterDirection = 4;
				$('.cell-body.cell-'+characterCoordX+'-'+characterCoordY).addClass('active-cell');
			}
			break;
	}

	$('.dungeon-door-back').addClass('dungeon-door-present');

	if(characterDirection == 5)
	{
		characterDirection = 1;
	}

	$('.cell-body.cell-'+characterCoordX+'-'+characterCoordY).append(characterCursorDirection[characterDirection]);
	areThereDoors()
}

$('.dungeon-door-middle').click(function() {goInDirection("forward")});
$('.dungeon-door-left').click(function() {goInDirection("left")});
$('.dungeon-door-right').click(function() {goInDirection("right")});
$('.dungeon-door-back').click(function() {goInDirection("back")});

var charMoney = 0;
var charDamage = 1;
var teamDamage = 0;
var playerLevel = 1;

function counterUpdateAnimation(counter)
{
	var source;
	switch(counter)
	{
		case "charMoney":
			counter = 'coin-number';
			source = charMoney;
			break;

		case "charDamage":
			counter = 'your-damage-number';
			source = charDamage;
			break;

		case "teamDamage":
			counter = 'team-damage-number';
			source = teamDamage;
			break;

		case "playerLevel":
			counter = 'player-level-number';
			source = playerLevel;
			break;
	}

	$('.'+counter).animate({"top": 50+"px"}, 100);
	setTimeout(function(){$('.'+counter).html(source);}, 100);
	setTimeout(function(){$('.'+counter).animate({"top": 0+"px"}, 100);}, 200);
}

var allHelpersList = [
	["Squire"],
	["Zoorg"],
	["Dwarf"],
	["Thief"],
	["Flinger"],
	["Archer"],
	["Dark elf"],
	["Swordsman"],
	["Knight"]
];

for(a = 0; a < allHelpersList.length; a++)
{
	$(".tavern-list").append('<div class="tavern-list-option"><span class="tavern-list-option-name">'+allHelpersList[a][0]+'</span><br><span class="tavern-list-option-descr">Lorem ipsum</span><br><span class="tavern-list-option-damage-text">Damage: </span><span class="tavern-list-option-damage-number">20</span><span class="tavern-list-option-damage-unit"> per second</span></div>');
}