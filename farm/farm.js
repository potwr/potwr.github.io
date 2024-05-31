//BASICS
var yourMoney = 100;
var yourPoints = 0;
var yourLevel = 1;

//CELLS
var cell = [];

for(var l = 1; l <= 204; l++)
{
	cell[l] = [];
	cell[l]['days'] = 0;
	cell[l]['sown'] = "Nothing";
	cell[l]['watered'] = false;
}

//OBSTACLES
cell[1]['obstacle'] = 'Kamień'
cell[2]['obstacle'] = 'Chwast'
cell[3]['obstacle'] = 'Kamień'
cell[4]['obstacle'] = 'Chwast'
cell[5]['obstacle'] = 'Pień'
cell[6]['obstacle'] = 'Chwast'
cell[7]['obstacle'] = 'Chwast'
cell[8]['obstacle'] = 'Chwast'
cell[9]['obstacle'] = 'Chwast'
cell[10]['obstacle'] = 'Kret'
cell[11]['obstacle'] = 'Chwast'
cell[12]['obstacle'] = 'Chwast'
cell[13]['obstacle'] = 'Kamień'
cell[14]['obstacle'] = 'Chwast'
cell[15]['obstacle'] = 'Kamień'
cell[16]['obstacle'] = 'Chwast'
cell[17]['obstacle'] = 'Kamień'
cell[18]['obstacle'] = 'Chwast'
cell[19]['obstacle'] = 'Pień'
cell[20]['obstacle'] = 'Kamień'
cell[21]['obstacle'] = 'Chwast'
cell[22]['obstacle'] = 'Chwast'
cell[23]['obstacle'] = 'Chwast'
cell[24]['obstacle'] = 'Kamień'
cell[25]['obstacle'] = 'Pień'
cell[26]['obstacle'] = 'Kamień'
cell[27]['obstacle'] = 'Chwast'
cell[28]['obstacle'] = 'Kamień'
cell[29]['obstacle'] = 'Chwast'
cell[30]['obstacle'] = 'Pień'
cell[31]['obstacle'] = 'Kamień'
cell[32]['obstacle'] = 'Chwast'
cell[33]['obstacle'] = 'Chwast'
cell[34]['obstacle'] = 'Chwast'
cell[35]['obstacle'] = 'Chwast'
cell[36]['obstacle'] = 'Nic'
cell[37]['obstacle'] = 'Nic'
cell[38]['obstacle'] = 'Nic'
cell[39]['obstacle'] = 'Nic'
cell[40]['obstacle'] = 'Nic'
cell[41]['obstacle'] = 'Nic'
cell[42]['obstacle'] = 'Pień'
cell[43]['obstacle'] = 'Pień'
cell[44]['obstacle'] = 'Chwast'
cell[45]['obstacle'] = 'Chwast'
cell[46]['obstacle'] = 'Kamień'
cell[47]['obstacle'] = 'Kamień'
cell[48]['obstacle'] = 'Chwast'
cell[49]['obstacle'] = 'Chwast'
cell[50]['obstacle'] = 'Pień'
cell[51]['obstacle'] = 'Kamień'
cell[52]['obstacle'] = 'Pień'
cell[53]['obstacle'] = 'Nic'
cell[54]['obstacle'] = 'Nic'
cell[55]['obstacle'] = 'Nic'
cell[56]['obstacle'] = 'Nic'
cell[57]['obstacle'] = 'Nic'
cell[58]['obstacle'] = 'Nic'
cell[59]['obstacle'] = 'Kamień'
cell[60]['obstacle'] = 'Chwast'
cell[61]['obstacle'] = 'Kamień'
cell[62]['obstacle'] = 'Kamień'
cell[63]['obstacle'] = 'Pień'
cell[64]['obstacle'] = 'Pień'
cell[65]['obstacle'] = 'Pień'
cell[66]['obstacle'] = 'Kamień'
cell[67]['obstacle'] = 'Chwast'
cell[68]['obstacle'] = 'Chwast'
cell[69]['obstacle'] = 'Chwast'
cell[70]['obstacle'] = 'Nic'
cell[71]['obstacle'] = 'Nic'
cell[72]['obstacle'] = 'Nic'
cell[73]['obstacle'] = 'Nic'
cell[74]['obstacle'] = 'Nic'
cell[75]['obstacle'] = 'Nic'
cell[76]['obstacle'] = 'Kamień'
cell[77]['obstacle'] = 'Pień'
cell[78]['obstacle'] = 'Kamień'
cell[79]['obstacle'] = 'Kamień'
cell[80]['obstacle'] = 'Pień'
cell[81]['obstacle'] = 'Kamień'
cell[82]['obstacle'] = 'Chwast'
cell[83]['obstacle'] = 'Chwast'
cell[84]['obstacle'] = 'Chwast'
cell[85]['obstacle'] = 'Kamień'
cell[86]['obstacle'] = 'Kamień'
cell[87]['obstacle'] = 'Nic'
cell[88]['obstacle'] = 'Nic'
cell[89]['obstacle'] = 'Nic'
cell[90]['obstacle'] = 'Nic'
cell[91]['obstacle'] = 'Nic'
cell[92]['obstacle'] = 'Nic'
cell[93]['obstacle'] = 'Chwast'
cell[94]['obstacle'] = 'Kamień'
cell[95]['obstacle'] = 'Chwast'
cell[96]['obstacle'] = 'Chwast'
cell[97]['obstacle'] = 'Kret'
cell[98]['obstacle'] = 'Kamień'
cell[99]['obstacle'] = 'Kamień'
cell[100]['obstacle'] = 'Chwast'
cell[101]['obstacle'] = 'Kamień'
cell[102]['obstacle'] = 'Chwast'
cell[103]['obstacle'] = 'Chwast'
cell[104]['obstacle'] = 'Nic'
cell[105]['obstacle'] = 'Nic'
cell[106]['obstacle'] = 'Nic'
cell[107]['obstacle'] = 'Nic'
cell[108]['obstacle'] = 'Nic'
cell[109]['obstacle'] = 'Nic'
cell[110]['obstacle'] = 'Chwast'
cell[111]['obstacle'] = 'Kamień'
cell[112]['obstacle'] = 'Chwast'
cell[113]['obstacle'] = 'Chwast'
cell[114]['obstacle'] = 'Kamień'
cell[115]['obstacle'] = 'Chwast'
cell[116]['obstacle'] = 'Chwast'
cell[117]['obstacle'] = 'Kamień'
cell[118]['obstacle'] = 'Kamień'
cell[119]['obstacle'] = 'Kamień'
cell[120]['obstacle'] = 'Chwast'
cell[121]['obstacle'] = 'Nic'
cell[122]['obstacle'] = 'Nic'
cell[123]['obstacle'] = 'Nic'
cell[124]['obstacle'] = 'Nic'
cell[125]['obstacle'] = 'Nic'
cell[126]['obstacle'] = 'Nic'
cell[127]['obstacle'] = 'Pień'
cell[128]['obstacle'] = 'Chwast'
cell[129]['obstacle'] = 'Pień'
cell[130]['obstacle'] = 'Kamień'
cell[131]['obstacle'] = 'Chwast'
cell[132]['obstacle'] = 'Pień'
cell[133]['obstacle'] = 'Chwast'
cell[134]['obstacle'] = 'Kamień'
cell[135]['obstacle'] = 'Chwast'
cell[136]['obstacle'] = 'Chwast'
cell[137]['obstacle'] = 'Kamień'
cell[138]['obstacle'] = 'Nic'
cell[139]['obstacle'] = 'Nic'
cell[140]['obstacle'] = 'Nic'
cell[141]['obstacle'] = 'Nic'
cell[142]['obstacle'] = 'Nic'
cell[143]['obstacle'] = 'Nic'
cell[144]['obstacle'] = 'Chwast'
cell[145]['obstacle'] = 'Pień'
cell[146]['obstacle'] = 'Pień'
cell[147]['obstacle'] = 'Chwast'
cell[148]['obstacle'] = 'Chwast'
cell[149]['obstacle'] = 'Chwast'
cell[150]['obstacle'] = 'Chwast'
cell[151]['obstacle'] = 'Kamień'
cell[152]['obstacle'] = 'Chwast'
cell[153]['obstacle'] = 'Kamień'
cell[154]['obstacle'] = 'Chwast'
cell[155]['obstacle'] = 'Nic'
cell[156]['obstacle'] = 'Nic'
cell[157]['obstacle'] = 'Nic'
cell[158]['obstacle'] = 'Nic'
cell[159]['obstacle'] = 'Nic'
cell[160]['obstacle'] = 'Nic'
cell[161]['obstacle'] = 'Pień'
cell[162]['obstacle'] = 'Kamień'
cell[163]['obstacle'] = 'Kamień'
cell[164]['obstacle'] = 'Pień'
cell[165]['obstacle'] = 'Chwast'
cell[166]['obstacle'] = 'Kamień'
cell[167]['obstacle'] = 'Chwast'
cell[168]['obstacle'] = 'Chwast'
cell[169]['obstacle'] = 'Chwast'
cell[170]['obstacle'] = 'Chwast'
cell[171]['obstacle'] = 'Chwast'
cell[172]['obstacle'] = 'Nic'
cell[173]['obstacle'] = 'Nic'
cell[174]['obstacle'] = 'Nic'
cell[175]['obstacle'] = 'Nic'
cell[176]['obstacle'] = 'Nic'
cell[177]['obstacle'] = 'Nic'
cell[178]['obstacle'] = 'Pień'
cell[179]['obstacle'] = 'Chwast'
cell[180]['obstacle'] = 'Chwast'
cell[181]['obstacle'] = 'Pień'
cell[182]['obstacle'] = 'Chwast'
cell[183]['obstacle'] = 'Chwast'
cell[184]['obstacle'] = 'Kamień'
cell[185]['obstacle'] = 'Chwast'
cell[186]['obstacle'] = 'Kamień'
cell[187]['obstacle'] = 'Kamień'
cell[188]['obstacle'] = 'Kamień'
cell[189]['obstacle'] = 'Nic'
cell[190]['obstacle'] = 'Nic'
cell[191]['obstacle'] = 'Nic'
cell[192]['obstacle'] = 'Nic'
cell[193]['obstacle'] = 'Nic'
cell[194]['obstacle'] = 'Nic'
cell[195]['obstacle'] = 'Chwast'
cell[196]['obstacle'] = 'Chwast'
cell[197]['obstacle'] = 'Kamień'
cell[198]['obstacle'] = 'Chwast'
cell[199]['obstacle'] = 'Kamień'
cell[200]['obstacle'] = 'Chwast'
cell[201]['obstacle'] = 'Chwast'
cell[202]['obstacle'] = 'Pień'
cell[203]['obstacle'] = 'Kamień'
cell[204]['obstacle'] = 'Chwast'

for(var k = 1; k <= 204; k++)
{
	if(cell[k]['obstacle'] == 'Kamień')
	{
		$("#cellnumber"+k).css("background", "url('textures/txtr_kamien.png')");
	}
	else if(cell[k]['obstacle'] == 'Pień')
	{
		$("#cellnumber"+k).css("background", "url('textures/txtr_pien.png')");
	}
	else if(cell[k]['obstacle'] == 'Kret')
	{
		$("#cellnumber"+k).css("background", "url('textures/txtr_kret.png')");
	}
	else if(cell[k]['obstacle'] == 'Chwast')
	{
		$("#cellnumber"+k).css("background", "url('textures/txtr_chwast.png')");
	}
}

//TOOLS
var toolChosen = [];

toolChosen['harvest'] = false;
toolChosen['water'] = false;

//PLANTS
var plant = [];
for(var k = 1; k <= 40; k++)
{
	plant[k] = [];
}

	plant[1]['name'] = "Marchew";
	plant[1]['days'] = 5;
	plant[1]['chosen'] = true;
	plant[1]['harvest'] = 2;
	plant[1]['points'] = 1;
	plant[1]['price'] = 6;
	plant[1]['level'] = 1;
	
	plant[2]['name'] = "Sałata";
	plant[2]['days'] = 7;
	plant[2]['harvest'] = 2;
	plant[2]['points'] = 1;
	plant[2]['price'] = 8;
	
	plant[3]['name'] = "Ogórek";
	plant[3]['days'] = 20;
	plant[3]['harvest'] = 4;
	plant[3]['points'] = 4;
	plant[3]['price'] = 14;
	
	plant[4]['name'] = "Rzodkiewka";
	plant[4]['days'] = 25;
	plant[4]['harvest'] = 3;
	plant[4]['points'] = 5;
	plant[4]['price'] = 22;
	
	plant[5]['name'] = "Truskawka";
	plant[5]['days'] = 100;
	plant[5]['harvest'] = 4;
	plant[5]['points'] = 12;
	plant[5]['price'] = 44;
	
	plant[6]['name'] = "Pomidor";
	plant[6]['days'] = 110;
	plant[6]['harvest'] = 4;
	plant[6]['points'] = 14;
	plant[6]['price'] = 50;
	
	plant[7]['name'] = "Cebula";
	plant[7]['days'] = 400;
	plant[7]['harvest'] = 4;
	plant[7]['points'] = 48;
	plant[7]['price'] = 176;
	
	plant[8]['name'] = "Szczypior";
	plant[8]['days'] = 460;
	plant[8]['harvest'] = 4;
	plant[8]['points'] = 56;
	plant[8]['price'] = 210;
	
	plant[9]['name'] = "Groszek";
	plant[9]['days'] = 300;
	plant[9]['harvest'] = 4;
	plant[9]['points'] = 36;
	plant[9]['price'] = 180;
	
	plant[10]['name'] = "Kalafior";
	plant[10]['days'] = 820;
	plant[10]['harvest'] = 4;
	plant[10]['points'] = 100;
	plant[10]['price'] = 378;
	
	plant[11]['name'] = "Ziemniak";
	plant[11]['days'] = 800;
	plant[11]['harvest'] = 4;
	plant[11]['points'] = 96;
	plant[11]['price'] = 360;
	
	plant[12]['name'] = 'Czosnek';
	plant[12]['days'] = 1100;
	plant[12]['harvest'] = 4;
	plant[12]['points'] = 132;
	plant[12]['price'] = 510;

	plant[13]['name'] = 'Brokuł';
	plant[13]['days'] = 1000;
	plant[13]['harvest'] = 4;
	plant[13]['points'] = 120;
	plant[13]['price'] = 448;

	plant[14]['name'] = 'Papryka';
	plant[14]['days'] = 2000;
	plant[14]['harvest'] = 5;
	plant[14]['points'] = 240;
	plant[14]['price'] = 732;

	plant[15]['name'] = 'Fasola';
	plant[15]['days'] = 2500;
	plant[15]['harvest'] = 3;
	plant[15]['points'] = 30;
	plant[15]['price'] = 150;

	plant[16]['name'] = 'Szparag';
	plant[16]['days'] = 2100;
	plant[16]['harvest'] = 5;
	plant[16]['points'] = 504;
	plant[16]['price'] = 780;

	plant[17]['name'] = 'Bakłażan';
	plant[17]['days'] = 2400;
	plant[17]['harvest'] = 5;
	plant[17]['points'] = 288;
	plant[17]['price'] = 888;

	plant[18]['name'] = 'Papryczka chili';
	plant[18]['days'] = 2400;
	plant[18]['harvest'] = 4;
	plant[18]['points'] = 288;
	plant[18]['price'] = 1104;

	plant[19]['name'] = 'Jagoda';
	plant[19]['days'] = 1600;
	plant[19]['harvest'] = 6;
	plant[19]['points'] = 192;
	plant[19]['price'] = 504;

	plant[20]['name'] = 'Malina';
	plant[20]['days'] = 2400;
	plant[20]['harvest'] = 5;
	plant[20]['points'] = 288;
	plant[20]['price'] = 760;

	plant[21]['name'] = 'Cebula czerwona';
	plant[21]['days'] = 1800;
	plant[21]['harvest'] = 6;
	plant[21]['points'] = 216;
	plant[21]['price'] = 575;

	plant[22]['name'] = 'Kukurydza';
	plant[22]['days'] = 2400;
	plant[22]['harvest'] = 3;
	plant[22]['points'] = 288;
	plant[22]['price'] = 3000;

	plant[23]['name'] = 'Winogrono';
	plant[23]['days'] = 350;
	plant[23]['harvest'] = 2;
	plant[23]['points'] = 42;
	plant[23]['price'] = 350;

	plant[24]['name'] = 'Arbuz';
	plant[24]['days'] = 7200;
	plant[24]['harvest'] = 10;
	plant[24]['points'] = 3456;
	plant[24]['price'] = 5628;

	plant[25]['name'] = 'Jabłko';
	plant[25]['days'] = 4800;
	plant[25]['harvest'] = 12;
	plant[25]['points'] = 2304;
	plant[25]['price'] = 3096;

	plant[26]['name'] = 'Dynia';
	plant[26]['days'] = 7200;
	plant[26]['harvest'] = 6;
	plant[26]['points'] = 864;
	plant[26]['price'] = 2280;

	plant[27]['name'] = 'Gruszka';
	plant[27]['days'] = 6000;
	plant[27]['harvest'] = 10;
	plant[27]['points'] = 2880;
	plant[27]['price'] = 4680;

	plant[28]['name'] = 'Wiśnia';
	plant[28]['days'] = 9600;
	plant[28]['harvest'] = 18;
	plant[28]['points'] = 4608;
	plant[28]['price'] = 4140;

	plant[29]['name'] = 'Brzoskwinia';
	plant[29]['days'] = 12000;
	plant[29]['harvest'] = 15;
	plant[29]['points'] = 5760;
	plant[29]['price'] = 6240;

	plant[30]['name'] = 'Orzech laskowy';
	plant[30]['days'] = 16800;
	plant[30]['harvest'] = 19;
	plant[30]['points'] = 8064;
	plant[30]['price'] = 6840;

	plant[31]['name'] = 'Kapusta';
	plant[31]['days'] = 810;
	plant[31]['harvest'] = 3;
	plant[31]['points'] = 98;
	plant[31]['price'] = 800;

	plant[32]['name'] = 'Słonecznik';
	plant[32]['days'] = 4800;
	plant[32]['harvest'] = 4;
	plant[32]['points'] = 576;
	plant[32]['price'] = 5500;

	plant[33]['name'] = 'Awokado';
	plant[33]['days'] = 300;
	plant[33]['harvest'] = 6;
	plant[33]['points'] = 36;
	plant[33]['price'] = 190;

	plant[34]['name'] = 'Pomarańcza';
	plant[34]['days'] = 350;
	plant[34]['harvest'] = 5;
	plant[34]['points'] = 42;
	plant[34]['price'] = 240;

	plant[35]['name'] = 'Oliwka';
	plant[35]['days'] = 12000;
	plant[35]['harvest'] = 18;
	plant[35]['points'] = 5760;
	plant[35]['price'] = 7800;

	plant[36]['name'] = 'Cytryna';
	plant[36]['days'] = 1000;
	plant[36]['harvest'] = 5;
	plant[36]['points'] = 120;
	plant[36]['price'] = 400;

	plant[37]['name'] = 'Limonka';
	plant[37]['days'] = 3600;
	plant[37]['harvest'] = 6;
	plant[37]['points'] = 432;
	plant[37]['price'] = 1800;

	plant[38]['name'] = 'Ananas';
	plant[38]['days'] = 460;
	plant[38]['harvest'] = 4;
	plant[38]['points'] = 56;
	plant[38]['price'] = 300;

	plant[39]['name'] = 'Banan';
	plant[39]['days'] = 6000;
	plant[39]['harvest'] = 8;
	plant[39]['points'] = 1440;
	plant[39]['price'] = 6660;

	plant[40]['name'] = 'Kawa';
	plant[40]['days'] = 12500;
	plant[40]['harvest'] = 2;
	plant[40]['points'] = 3000;
	plant[40]['price'] = 13750;

for(var k = 1; k <= 40; k++)
{
	plant[k]['amountToBuy'] = 0;
}

for(var k = 2; k <= 40; k++)
{
	plant[k]['chosen'] = false;
}

var finalPrice = 0;

//CLIENTS
var maleName = ["Abercjusz", "Albert", "Alfons", "Ambroży", "Arbogast", "Bazyli", "Bernard", "Bogdan", "Bogusław", "Borzymir", "Bronisław", "Cezary", "Cecylian", "Chwalimir", "Czesław", "Częstomir", "Dobromił", "Dziersław", "Edmund", "Eugeniusz", "Euzebiusz", "Feliks", "Ferdynand", "Frydolin", "Gracjan", "Hektor", "Henryk", "Hubert", "Imisław", "Izydor", "Ireneusz", "Jędrzej", "Jonasz", "Janusz", "Józef", "Kazimierz", "Korneliusz", "Ksawery", "Laurenty", "Lesław", "Ludwik", "Marcjan", "Maurycy", "Nikodem", "Norbert", "Oktawian", "Olgierd", "Oswald", "Onufry", "Ozjasz", "Pankracy", "Radomił", "Rajmund", "Remigiusz", "Roland", "Rudolf", "Roman", "Ryszard", "Szczepan", "Tadeusz", "Wacław", "Walerian", "Wiesław", "Witold", "Władysław", "Zbigniew", "Zenon", "Zygfryd", "Zygmunt"];
var femaleName = ["Adela", "Aldona", "Alojza", "Anastazja", "Aurelia", "Amelia", "Balbina", "Bogumiła", "Cecylia", "Czesława", "Eleonora", "Elwira", "Ernestyna", "Eulogia", "Faustyna", "Felicja", "Flora", "Gertruda", "Grażyna", "Gloria", "Gryzelda", "Gustawa", "Halina", "Hiacynta", "Honorata", "Hortensja", "Ilona", "Izydora", "Jadwiga", "Janina", "Józefina", "Kazimiera", "Klementyna", "Konstantyna", "Leokadia", "Leopoldyna", "Lucyna", "Lubomira", "Ludmiła", "Ludwina", "Łucja", "Mariola", "Marzanna", "Melania", "Mieczysława", "Miłosława", "Mirosława", "Ofelia", "Oktawia", "Pamela", "Petunia", "Radomiła", "Renata", "Romana", "Róża", "Rudolfina", "Samanta", "Sonia", "Stefania", "Sławomira", "Tamara", "Teodora", "Urszula", "Wacława", "Wanda", "Wisława", "Władysława", "Zofia", "Żaneta"];
var lastName = ["Trąbka", "Boberek", "Tarkawian", "Ostrzyząb", "Brzózka", "Pacha", "Męczywór", "Zaporożec", "Szaleniec", "Boligłowa", "Żur", "Skwarka", "Siekierka", "Szkodnik", "Śmietana", "Świderek", "Potrzeba", "Jamnik", "Kluska", "Dzyndzelek", "Chytry", "Grzebinoga", "Grzebalec", "Chwast", "Łoś", "Jajo", "Skowronek", "Słuchawka", "Bąbel", "Bezszyjec", "Bełkot", "Beksa", "Kolano", "Krzywyzwis", "Paliwoda"];

var client = [];
for(var k = 1; k <= 4; k++)
{
	client[k] = [];
}

function randomNumber(min, max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

function displayInteger(value)
{
	var string = value.toString();
	if(string.length == 1)
	{
		return '0,0'+string;
	}
	else if(string.length == 2)
	{
		return '0,'+string;
	}
	else
	{
		return string.slice(0, string.length-2)+','+string.slice(string.length-2);
	}
}

var price = [];

function createClient(number)
{
	client[number]['sex'] = randomNumber(1, 2);
	if(client[number]['sex'] == 1)
	{
		client[number]['firstname'] = maleName[randomNumber(0, maleName.length-1)];
	}
	else if(client[number]['sex'] == 2)
	{
		client[number]['firstname'] = femaleName[randomNumber(0, femaleName.length-1)];
	}
	client[number]['lastname'] = lastName[randomNumber(0, lastName.length-1)];
	$(".client:nth-of-type("+number+")").empty();
	$(".client:nth-of-type("+number+")").append(client[number]['firstname']+' '+client[number]['lastname']+'<br>Kupię:<br><br>');
	
	if(yourLevel == 1)
	{
		client[number]['numberOfPlants'] = randomNumber(1, 2);
	}
	else if(yourLevel == 2)
	{
		client[number]['numberOfPlants'] = randomNumber(1, 3);
	}
	else if(yourLevel == 3)
	{
		client[number]['numberOfPlants'] = randomNumber(1, 5);
	}
	else
	{
		var variable = randomNumber(1, 10);
		if(variable < 10)
		{
			client[number]['numberOfPlants'] = randomNumber(2, 6);
		}
		else
		{
			client[number]['numberOfPlants'] = randomNumber(2, 8);
		}
	}
	
	client[number]['plant'] = [];
	client[number]['plantAmount'] = [];
	
	for(var k = 1; k <= client[number]['numberOfPlants']; k++)
	{
		client[number]['plant'][k] = randomNumber(1, yourLevel*2);
		for(var l = 1; l <= 4; l++)
		{
			if(k > l)
			{
				while(client[number]['plant'][k] == client[number]['plant'][k-l])
				{
					client[number]['plant'][k] = randomNumber(1, yourLevel*2);
				}
			}
		}
		
		client[number]['plantAmount'][k] = randomNumber(1, 50);
		
		$(".client:nth-of-type("+number+")").append(client[number]['plantAmount'][k]+' × '+plant[client[number]['plant'][k]]['name']+'<br>');
	}
	price[number] = 0;
	for(var z = 1; z <= client[number]['numberOfPlants']; z++)
	{
		price[number] += client[number]['plantAmount'][z] * Math.ceil(randomNumber(Math.ceil(0.1*plant[client[number]['plant'][z]]['price']), Math.ceil(0.6*plant[client[number]['plant'][z]]['price'])));
	}
	$(".client:nth-of-type("+number+")").append('<br>Za '+displayInteger(price[number])+' cB');
	$(".client:nth-of-type("+number+")").append('<br><br><button class="offer-refuse" onClick="offerRefuse('+number+')">Odrzuć</button><button class="offer-accept" onClick="offerAccept('+number+')">Sprzedaj</button>');
}

for(var k = 1; k <= 4; k++)
{
	createClient(k);
}

function offerRefuse(number)
{
	$(".client:nth-of-type("+number+")").animate({height: "0px", width: "215px", padding: "0px"}, 5);
	setTimeout(function(){
		createClient(number);
		$(".client:nth-of-type("+number+")").animate({height: "280px", width: "195px", padding: "10px"}, 5);
		setTimeout(function(){
			$(".client").removeAttr("style");
		}, 200);
	}, 200);
	
}

function offerAccept(number){
	if(client[number]['numberOfPlants'] == 1 && plantInStock[client[number]['plant'][1]] >= client[number]['plantAmount'][1])
	{
		yourMoney += price[number];
		$(".yourmoney").html(displayInteger(yourMoney)+' cB');
		plantInStock[client[number]['plant'][1]] -= client[number]['plantAmount'][1];
		$(".instock"+client[number]['plant'][1]).html(plantInStock[client[number]['plant'][1]]);
		
		$(".client:nth-of-type("+number+")").animate({height: "0px", width: "215px", padding: "0px"}, 5);
		setTimeout(function(){
		createClient(number);
		$(".client:nth-of-type("+number+")").animate({height: "280px", width: "195px", padding: "10px"}, 5);
		setTimeout(function(){
				$(".client").removeAttr("style");
			}, 200);
		}, 200);
	}
	if(client[number]['numberOfPlants'] == 2 && plantInStock[client[number]['plant'][1]] >= client[number]['plantAmount'][1] && plantInStock[client[number]['plant'][2]] >= client[number]['plantAmount'][2])
	{
		yourMoney += price[number];
		$(".yourmoney").html(displayInteger(yourMoney)+' cB');
		plantInStock[client[number]['plant'][1]] -= client[number]['plantAmount'][1];
		$(".instock"+client[number]['plant'][1]).html(plantInStock[client[number]['plant'][1]]);
		plantInStock[client[number]['plant'][2]] -= client[number]['plantAmount'][2];
		$(".instock"+client[number]['plant'][2]).html(plantInStock[client[number]['plant'][2]]);
		
		$(".client:nth-of-type("+number+")").animate({height: "0px", width: "215px", padding: "0px"}, 5);
		setTimeout(function(){
		createClient(number);
		$(".client:nth-of-type("+number+")").animate({height: "280px", width: "195px", padding: "10px"}, 5);
		setTimeout(function(){
				$(".client").removeAttr("style");
			}, 200);
		}, 200);
	}
	if(client[number]['numberOfPlants'] == 3 && plantInStock[client[number]['plant'][1]] >= client[number]['plantAmount'][1] && plantInStock[client[number]['plant'][2]] >= client[number]['plantAmount'][2] && plantInStock[client[number]['plant'][3]] >= client[number]['plantAmount'][3])
	{
		yourMoney += price[number];
		$(".yourmoney").html(displayInteger(yourMoney)+' cB');
		plantInStock[client[number]['plant'][1]] -= client[number]['plantAmount'][1];
		$(".instock"+client[number]['plant'][1]).html(plantInStock[client[number]['plant'][1]]);
		plantInStock[client[number]['plant'][2]] -= client[number]['plantAmount'][2];
		$(".instock"+client[number]['plant'][2]).html(plantInStock[client[number]['plant'][2]]);
		plantInStock[client[number]['plant'][3]] -= client[number]['plantAmount'][3];
		$(".instock"+client[number]['plant'][3]).html(plantInStock[client[number]['plant'][3]]);
		
		$(".client:nth-of-type("+number+")").animate({height: "0px", width: "215px", padding: "0px"}, 5);
		setTimeout(function(){
		createClient(number);
		$(".client:nth-of-type("+number+")").animate({height: "280px", width: "195px", padding: "10px"}, 5);
		setTimeout(function(){
				$(".client").removeAttr("style");
			}, 200);
		}, 200);
	}
	if(client[number]['numberOfPlants'] == 4 && plantInStock[client[number]['plant'][1]] >= client[number]['plantAmount'][1] && plantInStock[client[number]['plant'][2]] >= client[number]['plantAmount'][2] && plantInStock[client[number]['plant'][3]] >= client[number]['plantAmount'][3] && plantInStock[client[number]['plant'][4]] >= client[number]['plantAmount'][4])
	{
		yourMoney += price[number];
		$(".yourmoney").html(displayInteger(yourMoney)+' cB');
		plantInStock[client[number]['plant'][1]] -= client[number]['plantAmount'][1];
		$(".instock"+client[number]['plant'][1]).html(plantInStock[client[number]['plant'][1]]);
		plantInStock[client[number]['plant'][2]] -= client[number]['plantAmount'][2];
		$(".instock"+client[number]['plant'][2]).html(plantInStock[client[number]['plant'][2]]);
		plantInStock[client[number]['plant'][3]] -= client[number]['plantAmount'][3];
		$(".instock"+client[number]['plant'][3]).html(plantInStock[client[number]['plant'][3]]);
		plantInStock[client[number]['plant'][4]] -= client[number]['plantAmount'][4];
		$(".instock"+client[number]['plant'][4]).html(plantInStock[client[number]['plant'][4]]);
		
		$(".client:nth-of-type("+number+")").animate({height: "0px", width: "215px", padding: "0px"}, 5);
		setTimeout(function(){
		createClient(number);
		$(".client:nth-of-type("+number+")").animate({height: "280px", width: "195px", padding: "10px"}, 5);
		setTimeout(function(){
				$(".client").removeAttr("style");
			}, 200);
		}, 200);
	}
	if(client[number]['numberOfPlants'] == 5 && plantInStock[client[number]['plant'][1]] >= client[number]['plantAmount'][1] && plantInStock[client[number]['plant'][2]] >= client[number]['plantAmount'][2] && plantInStock[client[number]['plant'][3]] >= client[number]['plantAmount'][3] && plantInStock[client[number]['plant'][4]] >= client[number]['plantAmount'][4] && plantInStock[client[number]['plant'][5]] >= client[number]['plantAmount'][5])
	{
		yourMoney += price[number];
		$(".yourmoney").html(displayInteger(yourMoney)+' cB');
		plantInStock[client[number]['plant'][1]] -= client[number]['plantAmount'][1];
		$(".instock"+client[number]['plant'][1]).html(plantInStock[client[number]['plant'][1]]);
		plantInStock[client[number]['plant'][2]] -= client[number]['plantAmount'][2];
		$(".instock"+client[number]['plant'][2]).html(plantInStock[client[number]['plant'][2]]);
		plantInStock[client[number]['plant'][3]] -= client[number]['plantAmount'][3];
		$(".instock"+client[number]['plant'][3]).html(plantInStock[client[number]['plant'][3]]);
		plantInStock[client[number]['plant'][4]] -= client[number]['plantAmount'][4];
		$(".instock"+client[number]['plant'][4]).html(plantInStock[client[number]['plant'][4]]);
		plantInStock[client[number]['plant'][5]] -= client[number]['plantAmount'][5];
		$(".instock"+client[number]['plant'][5]).html(plantInStock[client[number]['plant'][5]]);
		
		$(".client:nth-of-type("+number+")").animate({height: "0px", width: "215px", padding: "0px"}, 5);
		setTimeout(function(){
		createClient(number);
		$(".client:nth-of-type("+number+")").animate({height: "280px", width: "195px", padding: "10px"}, 5);
		setTimeout(function(){
				$(".client").removeAttr("style");
			}, 200);
		}, 200);
	}
}

//LEVELS
var pointsToNextLevel = [];

	pointsToNextLevel[1] = 300;
	pointsToNextLevel[2] = 1000;
	pointsToNextLevel[3] = 5000;
	pointsToNextLevel[4] = 15000;
	pointsToNextLevel[5] = 40000;
	pointsToNextLevel[6] = 100000;
	pointsToNextLevel[7] = 200000;
	pointsToNextLevel[8] = 350000;
	pointsToNextLevel[9] = 550000;
	pointsToNextLevel[10] = 800000;
	pointsToNextLevel[11] = 1500000;
	pointsToNextLevel[12] = 2500000;
	pointsToNextLevel[13] = 4500000;
	pointsToNextLevel[14] = 7500000;
	pointsToNextLevel[15] = 15000000;
	pointsToNextLevel[16] = 22000000;
	pointsToNextLevel[17] = 30000000;
	pointsToNextLevel[18] = 40000000;
	pointsToNextLevel[19] = 55000000;
	
//LEVEL TITLES

var levelTitle = [];

	levelTitle[1] = 'Marchewa Stasia';
	levelTitle[2] = 'Ogóras Radzio';
	levelTitle[3] = 'Truskawa Patrycha';
	levelTitle[4] = 'Cebulka Sylwia';
	levelTitle[5] = 'Nagietek Karol';
	levelTitle[6] = 'Ziemniaczek Czesiu';
	levelTitle[7] = 'Brokułek Piotruś';
	levelTitle[8] = 'Słonecznior Szymon';
	levelTitle[9] = 'Bakłażanek Czaruś';
	levelTitle[10] = 'Jagódka Madzia';
	levelTitle[11] = 'Porzeczka Jadwisia';
	levelTitle[12] = 'Różyczka Marcelinka';
	levelTitle[13] = 'Jabłuszko Damianek';
	levelTitle[14] = 'Grucha Wiktoria';
	levelTitle[15] = 'Śliwunia Olunia';
	levelTitle[16] = 'Lilijka Oktawia';
	levelTitle[17] = 'Bławatka Kasia';
	levelTitle[18] = 'Oliwa Terecha';
	levelTitle[19] = 'Kapucha Gryzelda';
	levelTitle[20] = 'Lawendka Kinia';
	
//PLANTS IN STOCK
var plantInStock = [];

plantInStock[1] = 10;
plantInStock[2] = 10;

for(var l = 3; l <= 40; l++)
{
	plantInStock[l] = 0;
}

function plantsOwnedCreate()
{
	$(".left-menu-items").append('<div class="plant-option left-menu-option" id="chosen-plant-option" data-plantnumber="1"><span class="plant-name">'+plant[1]['name']+' <a class="instock1">'+plantInStock[1]+'</a></span></div>');
	$(".left-menu-items").append('<div class="plant-option left-menu-option" data-plantnumber="2"><span class="plant-name">'+plant[2]['name']+' <a class="instock2">'+plantInStock[2]+'</a></span></div>');
	for(var k = 3; k <= 40; k++)
	{
			$(".left-menu-items").append('<div class="plant-option left-menu-option plant-option'+k+'" style="display: none;" data-plantnumber="'+k+'"><span class="plant-name">'+plant[k]['name']+' <a class="instock'+k+'">'+plantInStock[k]+'</a></span></div>');
	}
}

plantsOwnedCreate();

function plantsOwnedRefresh()
{
	for(var k = 1; k <= yourLevel*2; k++)
	{
		$(".plant-option"+k).css("display", "block");
	}
}

function plantsInShopCreate()
{
	$(".shop-menu-items").append('<div class="plant-menu-option plant-menu-option1"><div class="plant-menu-option-verse">'+plant[1]['name']+'</div><div class="shop-price">'+displayInteger(plant[1]['price'])+' cB</div><div class="amount-to-buy"><input class="shop-amount amount1" type="number" min="1" value="1"><button class="add-to-cart" data-add="1">DODAJ</button></div></div>');
	$(".shop-menu-items").append('<div class="plant-menu-option plant-menu-option2"><div class="plant-menu-option-verse">'+plant[2]['name']+'</div><div class="shop-price">'+displayInteger(plant[2]['price'])+' cB</div><div class="amount-to-buy"><input class="shop-amount amount2" type="number" min="1" value="1"><button class="add-to-cart" data-add="2">DODAJ</button></div></div>');
	for(var k = 3; k <= 40; k++)
	{
		$(".shop-menu-items").append('<div class="plant-menu-option plant-menu-option'+k+'" style="display: none;"><div class="plant-menu-option-verse">'+plant[k]['name']+'</div><div class="shop-price">'+displayInteger(plant[k]['price'])+' cB</div><div class="amount-to-buy"><input class="shop-amount amount'+k+'" type="number" min="1" value="1"><button class="add-to-cart" data-add="'+k+'">DODAJ</button></div></div>');
	}
}

plantsInShopCreate();

function plantsInShopRefresh()
{
	for(var k = 1; k <= yourLevel*2; k++)
	{
		$(".plant-menu-option"+k).css("display", "block");
	}
}

function cartItemsCreate()
{
	for(var k = 1; k <= 40; k++)
	{
		$(".cart-list").append('<div class="cart-list-item cart-item'+k+'" data-item="'+k+'"><a class="cart-item-amount">0</a> × '+plant[k]['name']+' <button class="delete-cart-item">✗</button></div>');
	}
}

var hasYesBeenClicked = 0;

function closeAlert()
{
	$(".alert").css("display", "none");
	hasYesBeenClicked = 0;
}

function acceptAlert(price, cellnumber)
{
	if(price > yourMoney && hasYesBeenClicked == 0)
	{
		$(".alertmessage").append('<br><a style="color: red;">Masz za mało pieniędzy!</a>');
		hasYesBeenClicked++;
	}
	else
	{
		hasYesBeenClicked = 0;
		
		yourMoney = yourMoney - price;
		$(".yourmoney").html(displayInteger(yourMoney)+' cB');
		
		cell[cellnumber]['obstacle'] = "Nic";
		$("#cellnumber"+cellnumber).children(".days-left").html("");
		
		$(".alert").css("display", "none");
	}
}

cartItemsCreate();

$(".cell").on("click", function(){
	for(var i = 1; i <= 40; i++)
	{
		if(plant[i]['chosen'] == true && plantInStock[i] > 0 && cell[$(this).data("cellnumber")]['sown'] == "Nothing" && cell[$(this).data("cellnumber")]['obstacle'] == "Nic")
		{
			cell[$(this).data("cellnumber")]['sown'] = i;
			cell[$(this).data("cellnumber")]['days'] = plant[i]['days'];
			plantInStock[i]--;
			$(".instock"+i).html(plantInStock[i]);
			$(this).css("background-image", "url('vegs_txtrs/"+i+".jpg')");
			$(this).children(".darkening").attr("id", "planted");
		}
	}
	
	if(cell[$(this).data("cellnumber")]['days'] == 0 && toolChosen['harvest'] == true && cell[$(this).data("cellnumber")]['obstacle'] == "Nic")
	{
		plantInStock[cell[$(this).data("cellnumber")]['sown']] += plant[cell[$(this).data("cellnumber")]['sown']]['harvest'];
		$(".instock"+cell[$(this).data("cellnumber")]['sown']).html(plantInStock[cell[$(this).data("cellnumber")]['sown']]);
		yourPoints += plant[cell[$(this).data("cellnumber")]['sown']]['points'];
		$(".yourpoints").html(yourPoints);
		$(this).children(".darkening").empty();
		$(this).children(".darkening").attr("id", "light");
		$(this).css("background-image", 'url("textures/txtr.png")');
		cell[$(this).data("cellnumber")]['sown'] = "Nothing";
		cell[$(this).data("cellnumber")]['watered'] = false;
		if(yourPoints >= pointsToNextLevel[yourLevel])
		{
			yourLevel++;
			$(".yourlevel").html(yourLevel);
			$(".level-title").html(levelTitle[yourLevel]);
			plantsOwnedRefresh();
			plantsInShopRefresh();
		}
	}
	
	if(toolChosen['water'] == true && cell[$(this).data("cellnumber")]['watered'] == false && cell[$(this).data("cellnumber")]['sown'] != "Nothing")
	{
		cell[$(this).data("cellnumber")]['watered'] = true;
		$(this).children(".darkening").attr("id", "darkened");
		$(this).children(".darkening").append('<a class="days-left">'+cell[$(this).data("cellnumber")]['days']+'</a>');
	}
	
	if(cell[$(this).data("cellnumber")]['obstacle'] != 'Nic')
	{
		$(".alertmessage").html("Koszt usunięcia ");
		if(cell[$(this).data("cellnumber")]['obstacle'] == "Kamień")
		{
			$(".alertmessage").append("<b>kamienia</b> wynosi 50,00 cB.");
			$(".acceptalert").attr("onClick", "acceptAlert(5000, "+$(this).data("cellnumber")+")");
		}
		else if(cell[$(this).data("cellnumber")]['obstacle'] == "Chwast")
		{
			$(".alertmessage").append("<b>chwasta</b> wynosi 2,50 cB.");
			$(".acceptalert").attr("onClick", "acceptAlert(250, "+$(this).data("cellnumber")+")");
		}
		else if(cell[$(this).data("cellnumber")]['obstacle'] == "Pień")
		{
			$(".alertmessage").append("<b>pnia</b> wynosi 250,00 cB.");
			$(".acceptalert").attr("onClick", "acceptAlert(25000, "+$(this).data("cellnumber")+")");
		}
		else
		{
			$(".alertmessage").append("<b>kreta</b> wynosi 500,00 cB.");
			$(".acceptalert").attr("onClick", "acceptAlert(50000, "+$(this).data("cellnumber")+")");
		}
		
		$(".alertmessage").append("<br>Czy na pewno chcesz usunąć?");
		
		$(".alert").css("display", "block");
	}
});

var wateringPrice = 0;

$(".automatic-watering").on("click", function(){
	wateringPrice = 0;
	for(var k = 1; k <= 204; k++)
	{
		if(cell[k]['sown'] != "Nothing" && cell[k]['watered'] == false)
		{
			wateringPrice++;
		}
	}
	if(wateringPrice <= yourMoney)
	{
		for(var m = 1; m <= 204; m++)
		{
			if(cell[m]['sown'] != "Nothing" && cell[m]['watered'] == false)
			{
				cell[m]['watered'] = true;
				$("#cellnumber"+m).css("background-color", "darkgreen");
				$("#cellnumber"+m).css("color", "#fff");
			}
		}
		yourMoney -= wateringPrice;
		$(".yourmoney").html(displayInteger(yourMoney)+' cB');
	}
});

var harvestingPrice = 0;

$(".automatic-harvesting").on("click", function(){
	harvestingPrice = 0;
	for(var k = 1; k <= 204; k++)
	{
		if(cell[k]['sown'] != "Nothing" && cell[k]['days'] == 0)
		{
			harvestingPrice++;
		}
	}
	if(harvestingPrice <= yourMoney)
	{
		for(var m = 1; m <= 204; m++)
		{
			if(cell[m]['sown'] != "Nothing" && cell[m]['days'] == 0)
			{
				plantInStock[cell[m]['sown']] += plant[cell[m]['sown']]['harvest'];
				$(".instock"+cell[m]['sown']).html(plantInStock[cell[m]['sown']]);
				yourPoints += plant[cell[m]['sown']]['points'];
				$(".yourpoints").html(yourPoints);
				$("#cellnumber"+m).css("background-color", "");
				$("#cellnumber"+m).empty();
				cell[m]['sown'] = "Nothing";
				cell[m]['watered'] = false;
				if(yourPoints >= pointsToNextLevel[yourLevel])
				{
					yourLevel++;
					$(".yourlevel").html(yourLevel);
					$(".level-title").html(levelTitle[yourLevel]);
					plantsOwnedRefresh();
					plantsInShopRefresh();
				}
				$("#cellnumber"+m).css("color", "#000");
			}
		}
		yourMoney -= harvestingPrice;
		$(".yourmoney").html(displayInteger(yourMoney)+' cB');
	}
});

$(".left-menu-option").on("click", function(){
	for(var l = 1; l <= 40; l++)
	{
		plant[l]['chosen'] = false;
	}
	toolChosen['harvest'] = false;
	toolChosen['water'] = false;
	$(".left-menu-option").removeAttr("id");
	$(this).attr("id", "chosen-plant-option");
	
	if($(this).data("plantnumber") != undefined)
	{
		plant[$(this).data("plantnumber")]['chosen'] = true;
	}
	else
	{
		toolChosen[$(this).data("tool")] = true;
	}
});

function nextDay()
{
	for(var k = 1; k <= 204; k++)
	{
		if(cell[k]['days'] > 1 && cell[k]['watered'] == true)
		{
			cell[k]['days']--;
			$("#cellnumber"+k).find(".days-left").html(cell[k]['days']);
		}
		else if(cell[k]['days'] == 1)
		{
			cell[k]['days'] = 0;
			$("#cellnumber"+k).find(".days-left").html("");
			$("#cellnumber"+k).find(".darkening").attr("id", "light");
		}
	}
};
var automaticNextDay;
clearInterval(automaticNextDay);
automaticNextDay = setInterval(function(){
	nextDay();
}, 10000);

$(".open-the-shop").on("click", function(){
	$(".shop").css("display", "block");
});

$(".close-the-shop").on("click", function(){
	$(".shop").css("display", "none");
});

$(".add-to-cart").on("click", function(){
	var number = $(this).data("add");
	var amount = $("input.amount"+number).val();
	plant[number]['amountToBuy'] += parseInt(amount);
	if(plant[number]['amountToBuy'] != 0)
	{
		$(".cart-item"+number).find(".cart-item-amount").html(plant[number]['amountToBuy']);
		$(".cart-item"+number).css("display", "block");
	}
	finalPrice += amount*plant[number]['price'];
	if(finalPrice > yourMoney)
	{
		$(".final-price").css("color", "red");
	}
	$(".final-price").html(displayInteger(finalPrice));
	$(".amount"+number).val(1);
});

$(".delete-cart-item").on("click", function(){
	$(this).closest(".cart-list-item").css("display", "none");
	var number = $(this).closest(".cart-list-item").data("item");
	finalPrice -= plant[number]['amountToBuy']*plant[number]['price'];
	$(".final-price").html(displayInteger(finalPrice));
	plant[number]['amountToBuy'] = 0;
	if(finalPrice <= yourMoney)
	{
		$(".final-price").css("color", "");
	}
});

$(".shop-reset").on("click", function(){
	for(var k = 1; k <= 40; k++)
	{
		plant[k]['amountToBuy'] = 0;
		$(".cart-item"+k).css("display", "none");
	}
	finalPrice = 0;
	$(".cart-list-item").find("cart-item-amount").html(0);
	$(".final-price").html('0,00');
	$(".final-price").css("color", "initial");
});

$(".shop-purchase").on("click", function(){
	if(finalPrice <= yourMoney)
	{
		yourMoney -= finalPrice;
		$(".yourmoney").html(displayInteger(yourMoney)+' cB');
		for(var k = 1; k <= 40; k++)
		{
			if(plant[k]['amountToBuy'] != 0)
			{
				plantInStock[k] += plant[k]['amountToBuy'];
				$(".instock"+k).html(plantInStock[k]);
			}
		}
		for(var k = 1; k <= 40; k++)
		{
			plant[k]['amountToBuy'] = 0;
			$(".cart-item"+k).css("display", "none");
		}
		finalPrice = 0;
		$(".cart-list-item").find("cart-item-amount").html(0);
		$(".final-price").html('0,00');
	}
	else
	{
		$(".final-price").css("color", "black");
		setTimeout(function(){
			$(".final-price").css("color", "red")
		}, 100);
	}
});

$(".plant-option").mouseenter(function(){
	$(".plant-desc").css("display", "block");
});

$(".plant-option").mouseenter(function(){
	$(".plant-desc-name").html(plant[$(this).data("plantnumber")]['name']);
	$(".plant-desc-days").html(plant[$(this).data("plantnumber")]['days']);
	$(".plant-desc-harvest").html(plant[$(this).data("plantnumber")]['harvest']);
	$(".plant-desc-points").html(plant[$(this).data("plantnumber")]['points']);
});

$(".plant-option").mousemove(function(){
	$(".plant-desc").css("left", event.clientX + document.body.scrollLeft + 3);
	$(".plant-desc").css("top", event.clientY + document.body.scrollTop + 3);
});

$(".plant-option").mouseleave(function(){
	$(".plant-desc").css("display", "none");
});

$(".cell").mouseenter(function(){
	if(cell[$(this).data("cellnumber")]['sown'] != "Nothing")
	{
		$(".cell-desc-name").html(plant[cell[$(this).data("cellnumber")]['sown']]['name']);
		$(".cell-desc-days").html(cell[$(this).data("cellnumber")]['days']);
		$(".cell-desc-harvest").html(plant[cell[$(this).data("cellnumber")]['sown']]['harvest']);
		
		if(cell[$(this).data("cellnumber")]['watered'] == true)
			$(".cell-desc-watered").html("Podlano");
		else
			$(".cell-desc-watered").html("Nie podlano");
		
		$(".cell-desc").css("display", "block");
	}
});

$(".cell").mousemove(function(){
	$(".cell-desc").css("left", event.clientX + document.body.scrollLeft + 3);
	$(".cell-desc").css("top", event.clientY + document.body.scrollTop + 3);
});

$(".cell").mouseleave(function(){
	$(".cell-desc").css("display", "none");
});

function randomBackground()
{
	var rand = randomNumber(1, 13);
	
	$(".header").css("background", "linear-gradient(rgba(30, 30, 30, 0.35), rgba(30, 30, 30, 0.35)), url('background/bg"+rand+".jpg')");
	$(".header").css("background-size", "1100px");
	
	$(".left-menu").css("background", "linear-gradient(rgba(30, 30, 30, 0.35), rgba(30, 30, 30, 0.35)), url('background/bg"+rand+".jpg') 0px -100px");
	$(".header").css("background-size", "1100px");
}

randomBackground();

//GAME SAVING
var savePlantInStock = [];
var saveDetails;
var saveCell = [];

function readGameSave()
{
	if(localStorage.getItem("saveDetails") !== null)
	{
		saveDetails = JSON.parse(localStorage.getItem("saveDetails"));
		
		yourMoney = saveDetails.yourMoney;
		$(".yourmoney").html(displayInteger(yourMoney) + ' cB');
		
		yourLevel = saveDetails.yourLevel;
		$(".yourlevel").html(yourLevel);
		$(".level-title").html(levelTitle[yourLevel]);
		
		yourPoints = saveDetails.yourPoints;
		$(".yourPoints").html(yourPoints);
		
		plantsOwnedRefresh();
		plantsInShopRefresh();
		
		plantInStock = JSON.parse(localStorage.getItem("savePlantInStock"));
		for(var k = 1; k <= 40; k++)
		{
			$(".instock"+k).html(plantInStock[k]);
		}
		
		for(var k = 1; k <= 204; k++)
		{
			cell[k] = JSON.parse(localStorage.getItem("saveCell["+k+"]"));
			
			if(cell[k]['obstacle'] == "Nic" && cell[k]['sown'] == "Nothing")
			{
				$("#cellnumber"+k).children(".days-left").html("");
			}
			
			if(cell[k]['sown'] != "Nothing")
			{
				$("#cellnumber"+k).children(".days-left").html(cell[k]['days']);
				if(cell[k]['watered'] == false)
				{
					$("#cellnumber"+k).css("background-image", "url('vegs_txtrs/"+cell[k]['sown']+".jpg')");
					$("#cellnumber"+k).children(".darkening").attr("id", "planted");
				}
				else
				{
					$("#cellnumber"+k).css("background-image", "url('vegs_txtrs/"+cell[k]['sown']+".jpg')");
					if(cell[k]['days'] != 0)
					{
						$("#cellnumber"+k).children(".darkening").children(".days-left").html(cell[k]['days']);
						$("#cellnumber"+k).children(".darkening").attr("id", "darkened");
					}
				}
			}
		}
		createClient(1);
		createClient(2);
		createClient(3);
		createClient(4);
	}
}

readGameSave();

function gameSave()
{
	saveDetails = {
		yourMoney: yourMoney,
		yourLevel: yourLevel,
		yourPoints: yourPoints
	}
	localStorage.setItem("saveDetails", JSON.stringify(saveDetails));
	
	for(var k = 1; k <= 40; k++)
	{
		savePlantInStock[k] = plantInStock[k];
	}
	localStorage.setItem("savePlantInStock", JSON.stringify(savePlantInStock));
	
	for(var k = 1; k <= 204; k++)
	{
		saveCell[k] = {
			days: cell[k]['days'],
			sown: cell[k]['sown'],
			watered: cell[k]['watered'],
			obstacle: cell[k]['obstacle']
		}
		localStorage.setItem("saveCell["+k+"]", JSON.stringify(saveCell[k]));
	}
}

$("body").on("click", function(){
	gameSave();
});