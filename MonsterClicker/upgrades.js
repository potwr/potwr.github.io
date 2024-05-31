function upgrdSharpening()
{
	if(yourMoney >= upgrdSharpeningCost)
	{
		clickPower++;
		document.getElementById("clickdamage").innerHTML = clickPower;
		yourMoney = yourMoney - upgrdSharpeningCost;
		document.getElementById("money").innerHTML = yourMoney;
		upgrdSharpeningCost = Math.ceil(1.1*upgrdSharpeningCost);
		document.getElementById("sharpeningcost").innerHTML = upgrdSharpeningCost;
	}
}