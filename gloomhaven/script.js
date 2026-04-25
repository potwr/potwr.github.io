//Info
//Symbole do pobrania: https://www.dropbox.com/sh/0qan16qx19tknvq/AADDj4b9UEFHECtU_bq0mgn6a?dl=0
//Paleta kolorów: https://coolors.co/1c140a-c44e28-725542-9a876b-f7f5f3
//Tła do pobrania:
//https://www.gloomhavencards.com/gh/characters/SC

var playerList = [
    ["Davy Jones", false, 0, 1, 'Dreszczowiec', 'Adrian', []],
    ["Thyme", false, 0, 2, 'Przywoływaczka', 'Mateusz', []],
    ["Lilith", false, 0, 3, 'Tkaczka Zaklęć', 'Marzena', []],
    ["Squick", false, 0, 4, 'Myślołap', 'Kuba', []],
    ["Baller", false, 0, 5, 'Łapiduch', 'Maciek', []]
];

var playerIndexNumber;

var summonTokensColors = [
    {"name": 'fioletowy', "color": '#8a4cd1'},
    {"name": 'zielony', "color": '#a3c755'},
    {"name": 'czerwony', "color": '#d33030'},
    {"name": 'niebieski', "color": '#144393'},
    {"name": 'różowy', "color": '#c169c9'},
    {"name": 'pomarańczowy', "color": '#d3760b'},
    {"name": 'żółty', "color": '#eeda5b'},
    {"name": 'szary', "color": '#737373'}
];

function handleInitiativeInput(event) {
    const input = event.target;
    const value = input.value;
    
    // Check if value has 2 digits (value >= 10)
    if (value.length >= 2 || (value && parseInt(value) >= 10)) {
        // Get current player index from input ID
        const currentIndex = parseInt(input.id.split('-').pop());
        const nextIndex = currentIndex + 1;
        const nextInput = document.getElementById('player-line-initiative-input-' + nextIndex);
        
        // If next input exists, focus on it and select its value
        if (nextInput) {
            nextInput.focus();
            nextInput.select();
        }
    }
}

function closeAddPlayerAlert()
{
    $('.add-player-alert').css("display", "none");
    document.getElementById('playername').value = '';
    $('.add-player-alert-background').css("display", "none");
}

function openAddPlayerAlert()
{
    $('.add-player-alert').css("display", "block");
    document.getElementById("playername").focus();
    $('.add-player-alert-background').css("display", "block");
}

var starterCharacters = [
    ["Davy Jones", false, 0, 1, 'Dreszczowiec', 'Adrian', []],
    ["Thyme", false, 0, 2, 'Przywoływaczka', 'Mateusz', []],
    ["Lilith", false, 0, 3, 'Tkaczka Zaklęć', 'Marzena', []],
    ["Squick", false, 0, 4, 'Myślołap', 'Kuba', []],
    ["Baller", false, 0, 5, 'Łapiduch', 'Maciek', []]
]

function createPlayerTableCode(playerObj, playerIndex)
{
    let player = playerObj;
    let playerTableCode = '<div class="player-line"><div class="player-line-top" style="background-image: url(backgrounds/';
    
    if(player[1] == false && player[3] != undefined)
    {
        playerTableCode = playerTableCode + player[3] + '.jpeg); background-size: 250%; ';
    }

    if(player[1] == true)
    {
        playerTableCode = playerTableCode + 'monster.jpeg); background-position: 0% 20%; background-size: 100%; box-shadow: inset 0 0 0 1000px rgba(115,11,0,0.6); ';
    }

    if(player[1] == false && player[3] == undefined)
    {
        playerTableCode = playerTableCode + 'ally.jpeg); background-position: 50% 40%; box-shadow: inset 0 0 0 1000px rgba(172,119,21,0.6); background-size: 200%; ';
    }
    
    switch(player[3]) {
        case 1:
            playerTableCode = playerTableCode + 'background-position: 50% 5%; background-size: 100%; box-shadow: inset 0 0 0 1000px rgba(118,133,86,0.4);'
            break;

        case 2:
            playerTableCode = playerTableCode + 'background-position: 0% 22%; background-size: 100%; box-shadow: inset 0 0 0 1000px rgba(140,98,185,0.4);'
            break;

        case 3:
            playerTableCode = playerTableCode + 'background-position: 40% 28%; background-size: 150%; box-shadow: inset 0 0 0 1000px rgba(172,123,176,0.4);'
            break;

        case 4:
            playerTableCode = playerTableCode + 'background-position: 0% 27%; background-size: 100%; box-shadow: inset 0 0 0 1000px rgba(106,123,153,0.4);'
            break;

        case 5:
            playerTableCode = playerTableCode + 'background-position: 0% 20%; background-size: 100%; box-shadow: inset 0 0 0 1000px rgba(61,51,45,0.6);'
            break;
    }

    playerTableCode = playerTableCode + '"><div class="player-line-top-left"><input class="player-line-initiative-input" type="number" min="0" max="99" inputmode="numeric" pattern="[0-9]{2}" value="'+player[2]+'" id="player-line-initiative-input-'+playerIndex+'" onclick="this.select();" oninput="handleInitiativeInput(event)"><div class="player-line-top-titles"><span class="titles-class-name">'+player[4]+'</span>';
    
    if(player[1] != true)
    {
        playerTableCode = playerTableCode + '<span class="titles-divider">·</span><span class="titles-player-real-name">'+player[5]+'</span>'; //<button class="add-summon-button" onclick="openAddSummonAlert('+playerIndex+')">+towarzysz</button>'
    }
    
    playerTableCode = playerTableCode + '</div></div><div class="player-line-top-right"><button class="delete-player" onclick="deletePlayer('+playerIndex+')">X</button></div></div><div class="player-line-bottom">';

    if(player[1] == true || (player[1] == false && player[3] == undefined))
    {
        playerTableCode = playerTableCode + '<span class="player-name monster-name">';
    }

    if(player[3] != undefined)
    {
        playerTableCode = playerTableCode + '<img class="character-symbol character-symbol-of-default-player'+player[3]+'" src="symbols/'+player[3]+'.svg"><span class="player-name">';
    }

    playerTableCode = playerTableCode + player[0];

    if(player[1] == true || player[3] != undefined)
    {
        playerTableCode = playerTableCode + '</span><button class="add-summon-button" onclick="openAddSummonAlert('+playerIndex+')">+</button></div></div>';
    }

    if(player[6].length > 0)
    {
        for(let i = 0; i < player[6].length; i++)
        {
            playerTableCode = playerTableCode + '<div class="summon-token" style="background-color: '+player[6][i][1]+';"><div class="summon-token-number">'+player[6][i][3]+'</div></div><div class="summon-line"><div class="summon-line-top"><span class="summon-title">Sojusznik</span><button class="delete-summon" onclick="deleteSummon('+playerIndex+', '+i+')">X</button></div><div class="summon-line-bottom"><span class="summon-name">'+player[6][i][0]+'</span></div>';
        }
    }

    $('.player-table').append(playerTableCode);
}

function addPlayer()
{
    let playerType = "Przeciwnik";

    playerList.push([document.getElementById("playername").value, true, 0, undefined, playerType, '', []]);
    
    createPlayerTableCode(playerList[playerList.length - 1], playerList.length - 1);
    
    closeAddPlayerAlert();
}

function compareByInitiative(a, b) {
    if (a[2] === b[2]) {
        if (a[1] != b[1]) {
            return (a[1] === true) ? 1 : -1;
        }
        else if (a[3] != b[3]) {
            return (a[3] === undefined) ? -1 : 1;
        }
        return 0;
    }
    else {
        return (a[2] < b[2]) ? -1 : 1;
    }
}

function sortPlayers()
{
    let a = playerList.length;
    for(k=0; k<a; k++)
    {
        className = 'player-line-initiative-input-'+k;
        playerList[k][2] = parseInt(document.getElementById(className).value);
    }

    playerList.sort(compareByInitiative);
    
    $('.player-table').empty();

    for(k=0; k<a; k++)
    {
        createPlayerTableCode(playerList[k], k);
    }
}

function deletePlayer(number)
{
    // Update playerList with current initiative values before deleting
    for(let i = 0; i < playerList.length; i++){
        let className = 'player-line-initiative-input-' + i;
        playerList[i][2] = parseInt(document.getElementById(className).value);
    }
    
    playerList.splice(number, 1);
    
    // Sort the updated list
    playerList.sort(compareByInitiative);
    
    // Recreate the table
    $('.player-table').empty();
    for(let k = 0; k < playerList.length; k++){
        createPlayerTableCode(playerList[k], k);
    }
}

function addFirstPlayers()
{
    for(z=0; z<playerList.length; z++)
    {
        createPlayerTableCode(playerList[z], z);
    }
}

function openAddSummonAlert(playerIndex) 
{
    $('.add-summon-alert').css("display", "block");
    document.getElementById("summonname").focus();
    $('.add-player-alert-background').css("display", "block");
    playerIndexNumber = playerIndex;
}

function addSummonToPlayer(playerIndex)
{
    let summonName = document.getElementById("summonname").value;
    let summonColor = document.getElementById("summoncolor").value;
    let summonColorName = document.getElementById("summoncolor").options[document.getElementById("summoncolor").selectedIndex].text;
    let summonTokenNumber = document.getElementsByClassName("summon-number-active-button")[0].innerText;
    if(summonName.trim() !== "") {
        playerList[playerIndex][6].push([summonName, summonColor, summonColorName, summonTokenNumber]);
    }
    sortPlayers();
    closeAddSummonAlert();
}

function closeAddSummonAlert()
{
    $('.add-summon-alert').css("display", "none");
    document.getElementById('summonname').value = '';
    document.getElementById('summoncolor').selectedIndex = 0;
    let buttons = document.getElementsByClassName("summon-number-default-button");
    for(let i = 0; i < buttons.length; i++)
    {
        buttons[i].classList.remove("summon-number-active-button");
    }
    buttons[0].classList.add("summon-number-active-button");
    $('.add-player-alert-background').css("display", "none");
}

function deleteSummon(playerIndex, summonIndex)
{
    playerList[playerIndex][6].splice(summonIndex, 1);
    // Recreate the table to show the updated summons
    sortPlayers();
}

function fillSummonColorsSelect()
{
    let select = document.getElementById("summoncolor");
    for(let i = 0; i < summonTokensColors.length; i++)
    {
        let option = '<option value="' + summonTokensColors[i].color + '">' + summonTokensColors[i].name + '</option>';
        select.innerHTML += option;
    }
}

function activateSummonNumberButton(elem, number)
{
    let buttons = document.getElementsByClassName("summon-number-default-button");
    for(let i = 0; i < buttons.length; i++)
    {
        buttons[i].classList.remove("summon-number-active-button");
    }
    elem.classList.add("summon-number-active-button");
    
}