//Info
//Symbole do pobrania: https://www.dropbox.com/sh/0qan16qx19tknvq/AADDj4b9UEFHECtU_bq0mgn6a?dl=0
//Paleta kolorów: https://coolors.co/1c140a-c44e28-725542-9a876b-f7f5f3

var playerList = [
    ["Ponury", false, 0, 1],
    ["Nilo", false, 0, 2],
    ["Lilith", false, 0, 3],
    ["Squick", false, 0, 4],
    ["x", false, 0, 5]
];

function closeAddPlayerAlert()
{
    $('.add-player-alert').css("display", "none");
    document.getElementById('playername').value = '';
    document.getElementById('playermonster').checked = false;
}

function openAddPlayerAlert()
{
    $('.add-player-alert').css("display", "block");
    document.getElementById("playername").focus();
}

var starterCharacters = [
    ['Ponury', false, , 1],
    ["Nilo", false, , 2],
    ["Lilith", false, , 3],
    ["Squick", false, , 4],
    ["x", false, , 5]
]

function createPlayerTableCode(a)
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
    playerList.push([document.getElementById("playername").value, document.getElementById("playermonster").checked]);
    
    createPlayerTableCode(playerList.length);
    
    closeAddPlayerAlert();
}

function compareByInitiative(a, b) {
    if (a[2] === b[2]) {
        if (a[1] != b[1]) {
            return a[1]
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