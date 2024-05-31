function squireClick()
{
	if(yourMoney >= squireCost)
	{
		ownedSquires++;
		document.getElementById("squires").innerHTML = ownedSquires;
		yourMoney = yourMoney - squireCost;
		document.getElementById("money").innerHTML = yourMoney;
		squireCost = Math.ceil(1.1*squireCost);
		document.getElementById("squirecost").innerHTML = squireCost;
	}
}

function sellswordClick()
{
	if(yourMoney >= sellswordCost)
	{
		ownedSellswords++;
		document.getElementById("sellswords").innerHTML = ownedSellswords;
		yourMoney = yourMoney - sellswordCost;
		document.getElementById("money").innerHTML = yourMoney;
		sellswordCost = Math.ceil(1.1*sellswordCost);
		document.getElementById("sellswordcost").innerHTML = sellswordCost;
	}
}

function flingerClick()
{
	if(yourMoney >= flingerCost)
	{
		ownedFlingers++;
		document.getElementById("flingers").innerHTML = ownedFlingers;
		yourMoney = yourMoney - flingerCost;
		document.getElementById("money").innerHTML = yourMoney;
		flingerCost = Math.ceil(1.1*flingerCost);
		document.getElementById("flingercost").innerHTML = flingerCost;
	}
}

function raiderClick()
{
	if(yourMoney >= raiderCost)
	{
		ownedRaiders++;
		document.getElementById("raiders").innerHTML = ownedRaiders;
		yourMoney = yourMoney - raiderCost;
		document.getElementById("money").innerHTML = yourMoney;
		raiderCost = Math.ceil(1.1*raiderCost);
		document.getElementById("raidercost").innerHTML = raiderCost;
	}
}

function paladinClick()
{
	if(yourMoney >= paladinCost)
	{
		ownedPaladins++;
		document.getElementById("paladins").innerHTML = ownedPaladins;
		yourMoney = yourMoney - paladinCost;
		document.getElementById("money").innerHTML = yourMoney;
		paladinCost = Math.ceil(1.1*paladinCost);
		document.getElementById("paladincost").innerHTML = paladinCost;
	}
}

function archerClick()
{
	if(yourMoney >= archerCost)
	{
		ownedArchers++;
		document.getElementById("archers").innerHTML = ownedArchers;
		yourMoney = yourMoney - archerCost;
		document.getElementById("money").innerHTML = yourMoney;
		archerCost = Math.ceil(1.1*archerCost);
		document.getElementById("archercost").innerHTML = archerCost;
	}
}

function knightClick()
{
	if(yourMoney >= knightCost)
	{
		ownedKnights++;
		document.getElementById("knights").innerHTML = ownedKnights;
		yourMoney = yourMoney - knightCost;
		document.getElementById("money").innerHTML = yourMoney;
		knightCost = Math.ceil(1.1*knightCost);
		document.getElementById("knightcost").innerHTML = knightCost;
	}
}

function crossbowmanClick()
{
	if(yourMoney >= crossbowmanCost)
	{
		ownedCrossbowmen++;
		document.getElementById("crossbowmen").innerHTML = ownedCrossbowmen;
		yourMoney = yourMoney - crossbowmanCost;
		document.getElementById("money").innerHTML = yourMoney;
		crossbowmanCost = Math.ceil(1.1*crossbowmanCost);
		document.getElementById("crossbowmancost").innerHTML = crossbowmanCost;
	}
}

