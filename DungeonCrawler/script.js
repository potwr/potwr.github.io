let character = {
    name: "potwr",
    coordX: null,
    coordY: null,
    level: 1,
    moneyOwned: 0,
    maxHealth: 1000,
    currentHealth: 1000,
    exp: 0
};

let baseNumber = character.level * 1000;
let isFightOngoing = false;
let isSkillInUse = false;
let playerCardsOpen = {
    character: false,
    account: false,
    inventory: false
};

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function fillMap() {
    window.mapId = randomNumber(0, dungeonMap.length-1);

    for(let i = 0; i < dungeonMap[mapId].length; i++)
    {
        $(".map").append('<div class="map-row map-row-'+(i+1)+'"></div>');

        for(let k = 0; k < dungeonMap[mapId][i].length; k++)
        {
            let isRoomActive;
            if(dungeonMap[mapId][i][k].wayUp == true || dungeonMap[mapId][i][k].wayLeft == true || dungeonMap[mapId][i][k].wayRight == true || dungeonMap[mapId][i][k].wayDown == true)
            {
                isRoomActive = true;
            }
            else
            {
                isRoomActive = false;
            }

            $(".map-row-"+(i+1)).append(`
                <div class="map-cell">
                    <div class="map-cell-horizontal-row">
                        <div class="map-cell-horizontal-space"></div>
                        <div class="map-cell-horizontal-door ${dungeonMap[mapId][i][k].wayUp == true ? "map-cell-door-open" : ""}"></div>
                        <div class="map-cell-horizontal-space"></div>
                    </div>
                    <div class="map-cell-middle-row">
                        <div class="map-cell-collumn">
                            <div class="map-cell-vertical-space"></div>
                            <div class="map-cell-vertical-door ${dungeonMap[mapId][i][k].wayLeft == true ? "map-cell-door-open" : ""}"></div>
                            <div class="map-cell-vertical-space"></div>
                        </div>
                        <div class="map-cell-body ${isRoomActive ? "map-cell-body-used" : ""} ${"cell-"+(k+1)+"-"+(i+1)}"></div>
                        <div class="map-cell-collumn">
                            <div class="map-cell-vertical-space"></div>
                            <div class="map-cell-vertical-door ${dungeonMap[mapId][i][k].wayRight == true ? "map-cell-door-open" : ""}"></div>
                            <div class="map-cell-vertical-space"></div>
                        </div>
                    </div>
                    <div class="map-cell-horizontal-row">
                        <div class="map-cell-horizontal-space"></div>
                        <div class="map-cell-horizontal-door ${dungeonMap[mapId][i][k].wayDown == true ? "map-cell-door-open" : ""}"></div>
                        <div class="map-cell-horizontal-space"></div>
                    </div>
                </div>
            `);

            //fill start coordinates
            if(dungeonMap[mapId][i][k].isEntrance == true)
            {
                character.coordX = k+1;
                character.coordY = i+1;
            }

        }
    }
}

function refreshPositionOnMap() {
    $(".map-cell-active").removeClass("map-cell-active");
    $(".cell-"+character.coordX+"-"+character.coordY).addClass("map-cell-active");

    if(dungeonMap[mapId][character.coordY-1][character.coordX-1].type == "monster")
    {
        fight();
    }
}

document.addEventListener("keydown", function (e) {
    if (!isFightOngoing) {
        switch (e.key.toLowerCase()) {
            case "w":
                if (character.coordY > 1 && dungeonMap[mapId][character.coordY-1][character.coordX-1].wayUp) character.coordY--;
                break;
            case "s":
                if (character.coordY < 9 && dungeonMap[mapId][character.coordY-1][character.coordX-1].wayDown) character.coordY++;
                break;
            case "a":
                if (character.coordX > 1 && dungeonMap[mapId][character.coordY-1][character.coordX-1].wayLeft) character.coordX--;
                break;
            case "d":
                if (character.coordX < 9 && dungeonMap[mapId][character.coordY-1][character.coordX-1].wayRight) character.coordX++;
                break;
        }
    refreshPositionOnMap();
    if (!isFightOngoing) {
        switch (e.key.toLowerCase()) {
            case "p":
                if (!playerCardsOpen.character) {
                    playerCardsOpen.character = true;
                    $(".player-profile").addClass("player-card-open");
                    $(".player-profile-bar-title").show();
                    $(".player-profile-bar").css("height", "10px");
                } else {
                    playerCardsOpen.character = false;
                    $(".player-profile").removeClass("player-card-open");
                    $(".player-profile-bar-title").hide();
                    $(".player-profile-bar").css("height", "5px");
                }
                break;
            case "u":
                break;
            case "i":
                break;
        }
    }
    }
    if(isFightOngoing) {
        switch (e.key.toLowerCase()) {
            case "r":
                useSkill(1);
                break;
            case "f":
                useSkill(2);
                break;
            case "v":
                useSkill(3);
                break;
            case "t":
                useSkill(4);
                break;
            case "g":
                useSkill(5);
                break;
            case "b":
                useSkill(6);
                break;
        }
    }
});

function fight() {
    isFightOngoing = true;

    let monsterNumber = randomNumber(0, monsters.length - 1);
    window.monster = monsters[monsterNumber];
    window.monsterMaxHealth = Math.round(randomNumber(monster.health.min * baseNumber, monster.health.max * baseNumber));
    window.currentMonsterHealth = monsterMaxHealth;

    $(".monster-name").text(monster.name);
    $(".monster-profile-health-value").text(currentMonsterHealth + "/" + monsterMaxHealth);
    $(".monster-profile-health-bar").css("width", "100%");
    $(".fight-area-monster").html("<img src='monsters/" + monster.imageName + "'>");

    $(".fight-profile-health-value").text(character.currentHealth + "/" + character.maxHealth);

    //show fight window and site cover
    $(".fight-area").show();
    $(".site-cover").show();

    //automatic monster attacks
    window.monsterAttack = setInterval(function() {
        if (isFightOngoing) {
            let damage = randomNumber(monster.attack.min * baseNumber, monster.attack.max * baseNumber);
            character.currentHealth -= damage;

            if (character.currentHealth <= 0) {
                endOfFight("defeat");
            }

            //update health display
            $(".fight-profile-health-value").text(character.currentHealth + "/" + character.maxHealth);

            //update health bar with animation
            // $(".fight-profile-health-bar").css("width", (character.currentHealth / character.maxHealth * 100) + "%");
            $(".fight-profile-health-bar").animate({ width: (character.currentHealth / character.maxHealth * 100) + "%" }, 500);

            //update fight log
            updateFightLog(monster.name, "dealt", damage+" damage");
        }
    }, monster.attackSpeed * 1000);
}

function monsterAutomaticFight() {
    if (isFightOngoing) {
        let damage = randomNumber(monster.attack.min * baseNumber, monster.attack.max * baseNumber);
        character.currentHealth -= damage;

        if (character.currentHealth <= 0) {
            clearInterval(monsterAttack);
            alert("You have been defeated!");
            character.currentHealth = 0;
        }

        //update health display
        $(".fight-profile-health-value").text(character.currentHealth + "/" + character.maxHealth);

        //update health bar with animation
        // $(".fight-profile-health-bar").css("width", (character.currentHealth / character.maxHealth * 100) + "%");
        $(".fight-profile-health-bar").animate({ width: (character.currentHealth / character.maxHealth * 100) + "%" }, 500);

        //update fight log
        updateFightLog(monster.name, "dealt", damage+" damage");
    }
}

function fillSkills() {
    for(let i = 0; i < skills.length; i++)
    {
        $(".skill-name-"+skills[i].id).text(skills[i].name);
        $(".skill-cooldown-"+skills[i].id).text("Cooldown: " + skills[i].cooldown + " s");
        $(".skill-description-"+skills[i].id).text(skills[i].description);
    }
}

function updateFightLog(name, text, emphasize, text2, emphasize2) {
    let logEntry = $("<div class='fight-area-log'></div>");
    logEntry.append("<span class='fight-area-log-name'>" + name + "</span>");
    logEntry.append("<span class='fight-area-log-text'> " + text + " </span>");
    logEntry.append("<span class='fight-area-log-emphasize'>" + emphasize + "</span>");
    if (text2) {
        logEntry.append("<span class='fight-area-log-text'> " + text2 + " </span>");
    }
    if (emphasize2) {
        logEntry.append("<span class='fight-area-log-emphasize'>" + emphasize2 + "</span>");
    }
    $(".fight-area-logs").prepend(logEntry);
}

function skillCoolDown(skillId, duration) {
    let obscureIcon = $(".skill-item-icon-obscure-" + skillId);
    let skillReadyToUse = skill.readyToUse;

    skills[skillId-1].readyToUse = false;

    setTimeout(function() {
        skills[skillId-1].readyToUse = true;
    }, duration);

    obscureIcon.css("height", "100%");
    obscureIcon.animate({ height: "0%" }, duration);
}

function expGain() {
    let ratio = ((monsterMaxHealth - (monster.health.min * baseNumber))/((monster.health.max * baseNumber) - (monster.health.min * baseNumber)));
    return Math.ceil(ratio * monster.maxExpGain);
}

function endOfFight(type) {
    if (type === "victory")
    {
        clearInterval(monsterAttack);
        currentMonsterHealth = 0;
        isFightOngoing = false;
        alert("You defeated the monster!");
        character.exp += expGain();
        $(".fight-profile-exp-value").text(character.exp + "/" + levelDetails[character.level - 1].expToPromote);
        $(".fight-profile-exp-bar").animate({ width: (character.exp / levelDetails[character.level - 1].expToPromote * 100) + "%" }, 500);
        $(".fight-area").hide();
        $(".site-cover").hide();
    }
    else if (type === "defeat")
    {
        alert("You were defeated...");
    }
    else if(type == "runaway")
    {
        alert("You successfully ran away!");
    }
}

function useSkill(skillId) {
    
    window.skill = skills.find(s => s.id === skillId);
    
    if (skill && !isSkillInUse)
    {
        // Check if the skill is off cooldown
        if (skill.readyToUse)
        {

            skillCoolDown(skillId, skill.cooldown * 1000);

            // Use the skill
            isSkillInUse = true;
            for(let i = 0; i < skill.hits; i++)
            {
                let damage = randomNumber(skill.damagePerHit.min, skill.damagePerHit.max);
                let crit = Math.random() < skill.critChance;

                if (crit) {
                    damage *= 2; // Double damage on critical hit
                    updateFightLog(character.name, "landed a critical hit", damage + " damage");
                } else {
                    updateFightLog(character.name, "hit", damage + " damage");
                }

                currentMonsterHealth -= damage;

                if (currentMonsterHealth <= 0 && isFightOngoing) {
                    endOfFight("victory");
                }

                // Update monster health display
                $(".monster-profile-health-value").text(currentMonsterHealth + "/" + monsterMaxHealth);
                $(".monster-profile-health-bar").animate(
                    { width: (currentMonsterHealth / monsterMaxHealth * 100) + "%" },
                    Math.round(skill.castTime * 1000) / skill.hits
                );

                setTimeout(function()
                {}, (Math.round(skill.castTime * 1000) / skill.hits)+10);
            }


            // Apply skill effects
            // applySkillEffects(skill);

            isSkillInUse = false;

        } else {
            updateFightLog(character.name, "tried to use", skill.name, "but it was on cooldown");
        }
    }
}