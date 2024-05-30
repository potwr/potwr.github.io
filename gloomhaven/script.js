//Info
//Symbole do pobrania: https://www.dropbox.com/sh/0qan16qx19tknvq/AADDj4b9UEFHECtU_bq0mgn6a?dl=0
//Paleta kolorów: https://coolors.co/1c140a-c44e28-725542-9a876b-f7f5f3
//Tła do pobrania:
//https://www.gloomhavencards.com/gh/characters/SC

var playerList = [
    ['Ponury', false, 0, 1, 'Kark', 'Adrian'],
    ["Nilo", false, 0, 2, 'Druciarz', 'Mateusz'],
    ["Lilith", false, 0, 3, 'Tkaczka Zaklęć', 'Marzena'],
    ["Squick", false, 0, 4, 'Myślołap', 'Kuba'],
    ["Cali", false, 0, 5, 'Szelma', 'Maciek']
];

function closeAddPlayerAlert()
{
    $('.add-player-alert').css("display", "none");
    document.getElementById('playername').value = '';
    document.getElementById('owner').value = '';
    document.getElementById('playermonster').checked = true;
    $('.add-player-alert-background').css("display", "none");
}

function openAddPlayerAlert()
{
    $('.add-player-alert').css("display", "block");
    document.getElementById("playername").focus();
    $('.add-player-alert-background').css("display", "block");
}

var starterCharacters = [
    ['Ponury', false, 0, 1, 'Kark', 'Adrian'],
    ["Nilo", false, 0, 2, 'Druciarz', 'Mateusz'],
    ["Lilith", false, 0, 3, 'Tkaczka Zaklęć', 'Marzena'],
    ["Squick", false, 0, 4, 'Myślołap', 'Kuba'],
    ["Cali", false, 0, 5, 'Szelma', 'Maciek']
]

function createPlayerTableCode(a)
{
    let playerTableCode = '<div class="player-line"><div class="player-line-top" style="background-image: url(backgrounds/';
    
    if(playerList[a-1][1] == false && playerList[a-1][3] != undefined)
    {
        playerTableCode = playerTableCode + playerList[a-1][3] + '.jpeg); background-size: 250%; ';
    }

    if(playerList[a-1][1] == true)
    {
        playerTableCode = playerTableCode + 'monster.jpeg); background-position: 0% 20%; background-size: 100%; box-shadow: inset 0 0 0 1000px rgba(115,11,0,0.6); ';
    }

    if(playerList[a-1][1] == false && playerList[a-1][3] == undefined)
    {
        playerTableCode = playerTableCode + 'ally.jpeg); background-position: 50% 40%; box-shadow: inset 0 0 0 1000px rgba(172,119,21,0.6); background-size: 200%; ';
    }
    
    switch(playerList[a-1][3]) {
        case 1:
            playerTableCode = playerTableCode + 'background-position: 0% 35%; background-size: 100%; box-shadow: inset 0 0 0 1000px rgba(97,166,201,0.6);'
            break;

        case 2:
            playerTableCode = playerTableCode + 'background-position: 0% 34%; background-size: 100%; box-shadow: inset 0 0 0 1000px rgba(194,183,146,0.6);'
            break;

        case 3:
            playerTableCode = playerTableCode + 'background-position: 40% 28%; background-size: 150%; box-shadow: inset 0 0 0 1000px rgba(172,123,176,0.6);'
            break;

        case 4:
            playerTableCode = playerTableCode + 'background-position: 0% 27%; background-size: 100%; box-shadow: inset 0 0 0 1000px rgba(106,123,153,0.6);'
            break;

        case 5:
            playerTableCode = playerTableCode + 'background-position: 0% 20%; background-size: 100%; box-shadow: inset 0 0 0 1000px rgba(174,208,118,0.5);'
            break;
    }

    playerTableCode = playerTableCode + '"><div class="player-line-top-left"><input class="player-line-initiative-input" type="number" min="0" max="99" inputmode="numeric" pattern="[0-9]{2}" value="'+playerList[a-1][2]+'" id="player-line-initiative-input-'+a+'" onclick="this.select();"><div class="player-line-top-titles"><span class="titles-class-name">'+playerList[a-1][4]+'</span>';
    
    if(playerList[a-1][1] != true)
    {
        playerTableCode = playerTableCode + '<span class="titles-divider">·</span><span class="titles-player-real-name">'+playerList[a-1][5]+'</span>';
    }
    
    playerTableCode = playerTableCode + '</div></div><div class="player-line-top-right"><button class="delete-player" onclick="deletePlayer('+(a-1)+')">X</button></div></div><div class="player-line-bottom">';

    if(playerList[a-1][1] == true || (playerList[a-1][1] == false && playerList[a-1][3] == undefined))
    {
        playerTableCode = playerTableCode + '<span class="player-name monster-name">';
    }

    if(playerList[a-1][3] != undefined)
    {
        playerTableCode = playerTableCode + '<img class="character-symbol character-symbol-of-default-player'+playerList[a-1][3]+'" src="symbols/'+playerList[a-1][3]+'.svg"><span class="player-name">';
    }

    playerTableCode = playerTableCode + playerList[a-1][0];

    if(playerList[a-1][1] == true || playerList[a-1][3] != undefined)
    {
        playerTableCode = playerTableCode + '</span>';
    }

    $('.player-table').append(playerTableCode);
}

function createPlayerTableCodeOld(a)
{
    let playerTableCode = '<div class="player-line"><div class="player-line-order-number">'+a+'</div><div class="player-line-name">';
    
    if(playerList[a-1][1] == true)
    {
        playerTableCode = playerTableCode + '<span class="monster-name">';
    }

    if(playerList[a-1][3] != undefined)
    {
        playerTableCode = playerTableCode + '<img class="character-symbol" src="symbols/'+playerList[a-1][3]+'.png"><span class="default-player'+playerList[a-1][3]+'">';
    }

    playerTableCode = playerTableCode + playerList[a-1][0];
    
    if(playerList[a-1][1] == true || playerList[a-1][3] != undefined)
    {
        playerTableCode = playerTableCode + '</span>';
    }
    
    playerTableCode = playerTableCode + '</div><button class="delete-player" onclick="deletePlayer('+(a-1)+')">X</button><div class="player-line-initiative"><input type="number" value="'+playerList[a-1][2]+'" class="player-line-initiative-input" id="player-line-initiative-input-'+a+'"></div></div>';
    
    $('.player-table').append(playerTableCode);
}

function addPlayer()
{
    let playerType;
    if(document.getElementById("playermonster").checked == true)
    {
        playerType = "Przeciwnik";
    }
    else
    {
        playerType="Sojusznik";
    }

    playerList.push([document.getElementById("playername").value, document.getElementById("playermonster").checked, 0, undefined, playerType, document.getElementById("owner").value]);
    
    createPlayerTableCode(playerList.length);
    
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
    for(k=1; k<=a; k++)
    {
        className = 'player-line-initiative-input-'+k;
        playerList[k-1][2] = parseInt(document.getElementById(className).value);
    }

    playerList.sort(compareByInitiative);
    
    $('.player-table').empty();

    for(k=1; k<=a; k++)
    {
        createPlayerTableCode(k);
    }
}

function deletePlayer(number)
{
    playerList.splice(number, 1);
    sortPlayers();
}

function addFirstPlayers()
{
    for(z=1; z<=5; z++)
    {
        createPlayerTableCode(z);
    }
}