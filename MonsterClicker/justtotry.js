//cat1 -> clickPower++
//cat2 -> 2*clickPower
//cat3 -> buildingsPower * 0.1

var upgrade =
[
{upgrdName: "Sharpening", upgrdDesc: "+1 to your click power", upgrdCat: 1},
{upgrdName: "Leather hilt", upgrdDesc: "Doubles your damage", upgrdCat: 2},
{upgrdName: "Visit the gym", upgrdDesc: "Damage inreased by 10% of your team damage", upgrdCat: 3},
];

var json = JSON.parse(upgrade[1]);
document.write(json.upgrdName);

for(var i = 0; i<
