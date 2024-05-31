function randomNumber(min, max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

function opponent() {
var monsterHPMin = Math.ceil(yourLevel*10*Math.pow(multiplier, yourLevel-1));
var monsterHPMax = Math.ceil(yourLevel*20*Math.pow(multiplier, yourLevel-1));
monsterMaxHP = randomNumber(monsterHPMin, monsterHPMax);

var monsterCashMin = Math.ceil(yourLevel*2.5*Math.pow(multiplier, yourLevel-1));
var monsterCashMax = Math.ceil(yourLevel*Math.pow(multiplier, yourLevel-1));
monsterCash = randomNumber(monsterCashMin, monsterCashMax);

var monsterExpMin = Math.floor(yourLevel*0.04*monsterMaxHP*Math.pow(1.02, yourLevel-1));
if(monsterExpMin == 0)
{
	monsterExpMin = 1;
}
var monsterExpMax = Math.ceil(yourLevel*0.04*monsterMaxHP*Math.pow(1.06, yourLevel-1));
monsterExp = randomNumber(monsterExpMin, monsterExpMax);
}