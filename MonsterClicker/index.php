<head>
<link href="https://fonts.googleapis.com/css?family=Oleo+Script+Swash+Caps" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Aladin" rel="stylesheet">
<link rel="Stylesheet" type="text/css" href="style.css"/>
<meta charset="utf-8">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script src="team.js"></script>
<script src="animations.js"></script>
<script type="text/javascript">
var monsterMaxHP;
var monsterCurrentHP = 0;
var monsterName;
var monsterCash;
var monsterExp;
var clicks = 0;
var yourMoney = 0;
var moneyRecord = 0;
var yourLevel = 1;
var yourExp = 0;
var clickPower = 1;
var buildingsPower = 0;
var multiplier = 1.3;

//BUILDINGS PROPERTIES
	var ownedSquires = 0;
	var squirePower = 0.5;
	var squireCost = 10;

	var ownedSellswords = 0;
	var sellswordPower = 2;
	var sellswordCost = 50;
	
	var ownedFlingers = 0;
	var flingerPower = 7;
	var flingerCost = 220;
	
	var ownedRaiders = 0;
	var raiderPower = 20;
	var raiderCost = 790;
	
	var ownedPaladins = 0;
	var paladinPower = 50;
	var paladinCost = 2470;
	
	var ownedArchers = 0;
	var archerPower = 70;
	var archerCost = 4325;
	
	var ownedKnights = 0;
	var knightPower = 120;
	var knightCost = 9275;
	
	var ownedCrossbowmen = 0;
	var crossbowmanPower = 150;
	var crossbowmanCost = 14500;
	
//UPGRADES PROPERTIES
	var upgrdSharpeningCost = 150;

</script>
<script src="monsters.js"></script>
<script src="upgrades.js"></script>
<script>
window.setInterval(function(){
	if(yourMoney > moneyRecord)
	{
		moneyRecord = yourMoney;
	}
	
	if(moneyRecord > 0.7 * flingerCost)
	{
		document.getElementById("flingeroption").style.display = "block";
	}
	
	if(moneyRecord > 0.7 * raiderCost)
	{
		document.getElementById("raideroption").style.display = "block";
	}
	
	if(moneyRecord > 0.7 * paladinCost)
	{
		document.getElementById("paladinoption").style.display = "block";
	}
	
	if(moneyRecord > 0.7 * archerCost)
	{
		document.getElementById("archeroption").style.display = "block";
	}
	
	if(moneyRecord > 0.7 * knightCost)
	{
		document.getElementById("knightoption").style.display = "block";
	}
	
	if(moneyRecord > 0.7 * crossbowmanCost)
	{
		document.getElementById("crossbowmanoption").style.display = "block";
	}
}, 50);

window.setInterval(function(){
	buildingsPower = ownedSquires * squirePower + ownedSellswords * sellswordPower + ownedFlingers * flingerPower + ownedRaiders * raiderPower + ownedPaladins * paladinPower + ownedArchers * archerPower + ownedKnights * knightPower + ownedCrossbowmen * crossbowmanPower;
	document.getElementById("hppersec").innerHTML = buildingsPower;
}, 50);

function randomNumber(min, max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

opponent();
var monsterPic = randomNumber(1, 29);

monsterCurrentHP = monsterMaxHP;

function onClick()
{
	if(monsterCurrentHP <= clickPower)
	{
		yourMoney = yourMoney + monsterCash;
		document.getElementById("money").innerHTML = yourMoney;
		yourExp = yourExp + monsterExp;
		if(yourExp >= Math.ceil(yourLevel*100*Math.pow(multiplier, yourLevel)))
		{
			yourExp = yourExp - Math.ceil(yourLevel*100*Math.pow(multiplier, yourLevel));
			yourLevel++;
			document.getElementById("level").innerHTML = yourLevel;
			var percentage = Math.ceil(yourExp/Math.ceil(yourLevel*100*Math.pow(multiplier, yourLevel)));
			var width = 500*percentage;
			$('#characterexpgained').animate({width: "500px"}, 600);
			$('#characterexpgained').animate({width: "0px"}, 1);
			$('#characterexpgained').animate({width: width}, 600);
		}
		else
		{
			var percentage = yourExp/Math.ceil(yourLevel*100*Math.pow(multiplier, yourLevel));
			var width = 500*percentage;
			$('#characterexpgained').animate({width: width}, 600);
		}
		document.getElementById("exp").innerHTML = yourExp+"/"+Math.ceil(yourLevel*100*Math.pow(multiplier, yourLevel));
		document.getElementById("exppercent").innerHTML = Math.ceil(yourExp/yourLevel)+"%";
		
		//EXP AND CASH ANIMATION
		$(".main").append('<div class="exp-animation">'+monsterExp+' EXP</div>');
		$(".main").append('<div class="cash-animation">'+monsterCash+' coins</div>');
		expCashAnimation();
		
		opponent();
		monsterPic = randomNumber(1, 29);
		
		monsterCurrentHP = monsterMaxHP;
		document.getElementById("opponent").innerHTML = '<img id="monsterpic" src="monsterpics/'+monsterPic+'a.png"/>';
		document.getElementById("monstershp").innerHTML = monsterCurrentHP+"/"+monsterMaxHP;
		document.getElementById("actualhp").style.width = Math.ceil(monsterCurrentHP/monsterMaxHP*500)+"px";
	}
	else
	{
		monsterCurrentHP = monsterCurrentHP - clickPower;
		document.getElementById("monstershp").innerHTML = Math.ceil(monsterCurrentHP)+"/"+monsterMaxHP;
		document.getElementById("actualhp").style.width = Math.ceil(monsterCurrentHP/monsterMaxHP*500)+"px";
	}
}

function autoAttack()
{
	if(monsterCurrentHP <= buildingsPower/20)
	{
		yourMoney = yourMoney + monsterCash;
		document.getElementById("money").innerHTML = yourMoney;
		yourExp = yourExp + monsterExp;
		if(yourExp >= Math.ceil(yourLevel*100*Math.pow(multiplier, yourLevel)))
		{
			yourExp = yourExp - Math.ceil(yourLevel*100*Math.pow(multiplier, yourLevel));
			yourLevel++;
			document.getElementById("level").innerHTML = yourLevel;
			var percentage = Math.ceil(yourExp/Math.ceil(yourLevel*100*Math.pow(multiplier, yourLevel)));
			var width = 500*percentage;
			$('#characterexpgained').animate({width: "500px"}, 600);
			$('#characterexpgained').animate({width: "0px"}, 1);
			$('#characterexpgained').animate({width: width}, 600);
		}
		else
		{
			var percentage = yourExp/Math.ceil(yourLevel*100*Math.pow(multiplier, yourLevel));
			var width = 500*percentage;
			$('#characterexpgained').animate({width: width}, 600);
		}
		document.getElementById("exp").innerHTML = yourExp+"/"+Math.ceil(yourLevel*100*Math.pow(multiplier, yourLevel));
		document.getElementById("exppercent").innerHTML = Math.ceil(yourExp/yourLevel)+"%";
		
		//EXP AND CASH ANIMATION
		$(".main").append('<div class="exp-animation">'+monsterExp+' EXP</div>');
		$(".main").append('<div class="cash-animation">'+monsterCash+' coins</div>');
		expCashAnimation();
			
		opponent();
		monsterPic = randomNumber(1, 29);
		
		monsterCurrentHP = monsterMaxHP;
		document.getElementById("opponent").innerHTML = '<img id="monsterpic" src="monsterpics/'+monsterPic+'a.png"/>';
		document.getElementById("monstershp").innerHTML = monsterCurrentHP+"/"+monsterMaxHP;
		document.getElementById("actualhp").style.width = Math.ceil(monsterCurrentHP/monsterMaxHP*500)+"px";
	}
	else
	{
		monsterCurrentHP = monsterCurrentHP - buildingsPower/20;
		document.getElementById("monstershp").innerHTML = Math.ceil(monsterCurrentHP)+"/"+monsterMaxHP;
		document.getElementById("actualhp").style.width = Math.ceil(monsterCurrentHP/monsterMaxHP*500)+"px";
	}
}
	
window.setInterval(function()
{
	autoAttack();
}, 50);

function save()
{
	var save =
	{
		yourMoney: yourMoney,
		moneyRecord: moneyRecord,
		yourLevel: yourLevel,
		yourExp: yourExp,
		
		//UPGRADES
		clickPower: clickPower,
		upgrdSharpeningCost: upgrdSharpeningCost,
		
		//BUILDINGS
		ownedSquires: ownedSquires,
		squirePower: squirePower,
		squireCost: squireCost,
		
		ownedSellswords: ownedSellswords,
		sellswordPower: sellswordPower,
		sellswordCost: sellswordCost,
		
		ownedFlingers: ownedFlingers,
		flingerPower: flingerPower,
		flingerCost: flingerCost,
		
		ownedRaiders: ownedRaiders,
		raiderPower: raiderPower,
		raiderCost: raiderCost,
		
		ownedPaladins: ownedPaladins,
		paladinPower: paladinPower,
		paladinCost: paladinCost,
		
		ownedArchers: ownedArchers,
		archerPower: archerPower,
		archerCost: archerCost,
		
		ownedKnights: ownedKnights,
		knightPower: knightPower,
		knightCost: knightCost,
		
		ownedCrossbowmen: ownedCrossbowmen,
		crossbowmanPower: crossbowmanPower,
		crossbowmanCost: crossbowmanCost,
		
		buildingsPower: buildingsPower
	}
	localStorage.setItem("gameSave", JSON.stringify(save));
}

window.setInterval(function()
{
	save();
}, 30000);

var gameSave = JSON.parse(localStorage.getItem("gameSave"));

</script>
<div class="cover"></div>
<div class="wrapper">

	<!--LEFT COLUMN-->
	<div class="narrow column">
		<div class="narrow-title">TEAM</div>
		
		<!--SQUIRE-->
		<div class="teamoption" onClick="squireClick()">
			<div class="team-left">
				<span class="teamoptionname">Squire</span><br>
				<span class="teamoptiondescription">
					<a id="squirepower">0.5</a> HP/s<br>
					Cost: <a id="squirecost">10</a> coins<br>
				</span>
			</div>
			<div class="team-right" id="squires">0</div>
		</div>
		
		<!--SELLSWORD-->
		<div class="teamoption" onClick="sellswordClick()">
			<div class="team-left">
				<span class="teamoptionname">Sellsword</span><br>
				<span class="teamoptiondescription">
					<a id="sellswordpower">2</a> HP/s<br>
					Cost: <a id="sellswordcost">50</a> coins<br>
				</span>
			</div>
			<div class="team-right" id="sellswords">0</div>
		</div>
		
		<!--FLINGER-->
		<div class="teamoption" id="flingeroption" onClick="flingerClick()" style="display: none;">
			<div class="team-left">
				<span class="teamoptionname">Flinger</span><br>
				<span class="teamoptiondescription">
					<a id="flingerpower">7</a> HP/s<br>
					Cost: <a id="flingercost">220</a> coins<br>
				</span>
			</div>
			<div class="team-right" id="flingers">0</div>
		</div>
		
		<!--RAIDER-->
		<div class="teamoption" id="raideroption" onClick="raiderClick()" style="display: none;">
			<div class="team-left">
				<span class="teamoptionname">Raider</span><br>
				<span class="teamoptiondescription">
					<a id="raiderpower">20</a> HP/s<br>
					Cost: <a id="raidercost">790</a> coins<br>
				</span>
			</div>
			<div class="team-right" id="raiders">0</div>
		</div>
		
		<!--PALADIN-->
		<div class="teamoption" id="paladinoption" onClick="paladinClick()" style="display: none;">
			<div class="team-left">
				<span class="teamoptionname">Paladin</span><br>
				<span class="teamoptiondescription">
					<a id="paladinpower">50</a> HP/s<br>
					Cost: <a id="paladincost">2470</a> coins<br>
				</span>
			</div>
			<div class="team-right" id="paladins">0</div>
		</div>
		
		<!--ARCHER-->
		<div class="teamoption" id="archeroption" onClick="archerClick()" style="display: none;">
			<div class="team-left">
				<span class="teamoptionname">Archer</span><br>
				<span class="teamoptiondescription">
					<a id="archerpower">70</a> HP/s<br>
					Cost: <a id="archercost">4325</a> coins<br>
				</span>
			</div>
			<div class="team-right" id="archers">0</div>
		</div>
		
		<!--KNIGHT-->
		<div class="teamoption" id="knightoption" onClick="knightClick()" style="display: none;">
			<div class="team-left">
				<span class="teamoptionname">Knight</span><br>
				<span class="teamoptiondescription">
					<a id="knightpower">120</a> HP/s<br>
					Cost: <a id="knightcost">9275</a> coins<br>
				</span>
			</div>
			<div class="team-right" id="knights">0</div>
		</div>
		
		<!--CROSSBOMAN-->
		<div class="teamoption" id="crossbowmanoption" onClick="crossbowmanClick()" style="display: none;">
			<div class="team-left">
				<span class="teamoptionname">Crossbowman</span><br>
				<span class="teamoptiondescription">
					<a id="crossbowmanpower">150</a> HP/s<br>
					Cost: <a id="crossbowmancost">14500</a> coins<br>
				</span>
			</div>
			<div class="team-right" id="crossbowmen">0</div>
		</div>
		
	</div>
	
	<!--MAIN COLUMN-->
	<div class="main column">
		<div class="header">
			<div class="characterlevel headertitle">Level <a id="level">1</a></div>
			<div class="charactermoney headertitle"><a id="money">0</a> coins</div>
		</div>
		<div class="characterexp">
			<div class="characterexpgained" id="characterexpgained"></div>
			<div class="characterexpvalues">
				<div class="characterexp-left characterexptitle">EXP</div>
				<div class="characterexp-center characterexptitle" id="exppercent">0%</div>
				<div class="characterexp-right characterexptitle" id="exp">0/100</div>
			</div>
		</div>
		<div class="clickpower">Click damage: <a id="clickdamage">1</a> HP</div>
		<div class="teampower">Team damage: <a id="hppersec">0</a> HP/s</div><br>
		<div onClick="onClick()" id="opponent" class="opponent" style="font-weight: bold;"></div>
		<div class="hpbar">
			<div class="actualhp" id="actualhp"></div>
			<div class="hpvalue"><a id="monstershp"></a> HP</div>
		</div>
	</div>
	
	<!--RIGHT COLUMN-->
	<div class="narrow column" id="upgrades">
		<div class="narrow-title">UPGRADES</div>
		
		<div class="upgradeoption" onClick="upgrdSharpening()" id="upgrdsharpening">
			<div class="upgradename">Sharpening</div>
			<div class="upgradedescription">+1 to your click damage</div>
			<div class="upgradecost"><a id="sharpeningcost">150</a> coins</div>
		</div>
		
	</div>
	
</div>

<script>
document.getElementById("opponent").innerHTML = '<img id="monsterpic" src="monsterpics/'+monsterPic+'a.png"/>';
document.getElementById("monstershp").innerHTML = monsterMaxHP+"/"+monsterMaxHP;
document.getElementById("exp").innerHTML = "0/"+Math.ceil(yourLevel*100*Math.pow(multiplier, yourLevel));

if(typeof gameSave.yourMoney !== undefined)
{
	yourMoney = gameSave.yourMoney;
	document.getElementById("money").innerHTML = yourMoney;
	
	moneyRecord = gameSave.moneyRecord;
	
	yourLevel = gameSave.yourLevel;
	document.getElementById("level").innerHTML = yourLevel;
	
	yourExp = gameSave.yourExp;
	document.getElementById("exp").innerHTML = yourExp+"/"+Math.ceil(yourLevel*100*Math.pow(multiplier, yourLevel));
	
	//UPGRADES
		clickPower = gameSave.clickPower;
	document.getElementById("clickdamage").innerHTML = clickPower;
	
		upgrdSharpeningCost = gameSave.upgrdSharpeningCost;
	document.getElementById("sharpeningcost").innerHTML = upgrdSharpeningCost;
	
	//BUILDINGS
		ownedSquires = gameSave.ownedSquires;
	document.getElementById("squires").innerHTML = ownedSquires;
		squirePower = gameSave.squirePower;
	document.getElementById("squirepower").innerHTML = squirePower;
		squireCost = gameSave.squireCost;
	document.getElementById("squirecost").innerHTML = squireCost;
	
		ownedSellswords = gameSave.ownedSellswords;
	document.getElementById("sellswords").innerHTML = ownedSellswords;
		sellswordPower = gameSave.sellswordPower;
	document.getElementById("sellswordpower").innerHTML = sellswordPower;
		sellswordCost = gameSave.sellswordCost;
	document.getElementById("sellswordcost").innerHTML = sellswordCost;
	
		ownedFlingers = gameSave.ownedFlingers;
	document.getElementById("flingers").innerHTML = ownedFlingers;
		flingerPower = gameSave.flingerPower;
	document.getElementById("flingerpower").innerHTML = flingerPower;
		flingerCost = gameSave.flingerCost;
	document.getElementById("flingercost").innerHTML = flingerCost;
	
		ownedRaiders = gameSave.ownedRaiders;
	document.getElementById("raiders").innerHTML = ownedRaiders;
		raiderPower = gameSave.raiderPower;
	document.getElementById("flingerpower").innerHTML = flingerPower;
		raiderCost = gameSave.raiderCost;
	document.getElementById("raidercost").innerHTML = raiderCost;
	
		ownedPaladins = gameSave.ownedPaladins;
	document.getElementById("paladins").innerHTML = ownedPaladins;
		paladinPower = gameSave.paladinPower;
	document.getElementById("paladinpower").innerHTML = paladinPower;
		paladinCost = gameSave.paladinCost;
	document.getElementById("paladincost").innerHTML = paladinCost;
	
		ownedArchers = gameSave.ownedArchers;
	document.getElementById("archers").innerHTML = ownedArchers;
		archerPower = gameSave.archerPower;
	document.getElementById("archerpower").innerHTML = archerPower;
		archerCost = gameSave.archerCost;
	document.getElementById("archercost").innerHTML = archerCost;
	
		ownedKnights = gameSave.ownedKnights;
	document.getElementById("knights").innerHTML = ownedKnights;
		knightPower = gameSave.knightPower;
	document.getElementById("knightpower").innerHTML = knightPower;
		knightCost = gameSave.knightCost;
	document.getElementById("knightcost").innerHTML = knightCost;
	
		ownedCrossbowmen = gameSave.ownedCrossbowmen;
	document.getElementById("crossbowmen").innerHTML = ownedCrossbowmen;
		crossbowmanPower = gameSave.crossbowmanPower;
	document.getElementById("crossbowmanpower").innerHTML = crossbowmanPower;
		crossbowmanCost = gameSave.crossbowmanCost;
	document.getElementById("crossbowmancost").innerHTML = crossbowmanCost;
	
	buildingsPower = gameSave.buildingsPower;
	document.getElementById("hppersec").innerHTML = buildingsPower;
	
	document.getElementById("exppercent").innerHTML = Math.ceil(yourExp/yourLevel)+"%";
	var percentage = Math.ceil(yourExp/yourLevel);
	var decimal = percentage/100;
	var width = 500*decimal;
	document.getElementById("characterexpgained").style.width = width+"px";
	
	opponent();
	monsterCurrentHP = monsterMaxHP;
	document.getElementById("monstershp").innerHTML = monsterMaxHP+"/"+monsterMaxHP;
}

document.getElementById("opponent").addEventListener("mousedown", function(){document.getElementById("monsterpic").src = 'monsterpics/'+monsterPic+'b.png';});
document.getElementById("opponent").addEventListener("mouseup", function(){document.getElementById("monsterpic").src = 'monsterpics/'+monsterPic+'a.png';});
</script>