let submitEndgameFormular;
import('./endgame.js').then(module => {
    submitEndgameFormular = module.submitEndgameFormular;
});

var ingredientsList = [
    {name: "cheese", key: "KeyC", penalty: 1}, //0
    {name: "bun", key: "KeyB", penalty: 10}, //1
    {name: "salad", key: "KeyS", penalty: 1}, //2 
    {name: "ketchup", key: "KeyK", penalty: 1}, //3
    {name: "mayonnaise", key: "KeyM", penalty: 1}, //4
    {name: "tomato", key: "KeyT", penalty: 1}, //5
    {name: "pickles", key: "KeyP", penalty: 1}, //6
    {name: "onion", key: "KeyO", penalty: 1}, //7
    {name: "buffalo hot", key: "KeyF", penalty: 1}, //8
    {name: "beef", key: "KeyG", penalty: 3}, //9
    {name: "chicken", key: "KeyH", penalty: 3}, //10
    {name: "bacon", key: "KeyA", penalty: 1}, //11
    {name: "veggie burger", key: "KeyV", penalty: 3}, //12
    {name: "mustard", key: "KeyU", penalty: 1}, //13
    {name: "original sauce", key: "KeyR", penalty: 1}, //14
];

// {name: , key: , penalty: },

var beverageMenu = [
    {name: "Coke", key: "Digit1"},
    {name: "Coke Zero", key: "Digit2"},
    {name: "Fanta", key: "Digit3"},
    {name: "Sprite", key: "Digit4"},
//    {name: "Orange Juice", key: "Digit5"},
//    {name: "Apple Juice", key: "Digit6"},
//    {name: "Beer", key: "Digit7"}
];

var sidesMenu = [
    {name: "Fries, small", key: "Digit9"},
    {name: "Fries, big", key: "Digit0"}
];

var ingredientsKeysReserved = [];
for(num = 0; num < ingredientsList.length; num++) {
    ingredientsKeysReserved.push(ingredientsList[num].key);
}

var beverageKeysReserved = [];
for(num = 0; num < beverageMenu.length; num++) {
    beverageKeysReserved.push(beverageMenu[num].key);
}

var sidesKeysReserved = [];
for(num = 0; num < sidesMenu.length; num++) {
    sidesKeysReserved.push(sidesMenu[num].key);
}

var burgerMenu = [
    {name: "Frisco", ingredients: [ingredientsList[14], ingredientsList[2], ingredientsList[7], ingredientsList[5], ingredientsList[9], ingredientsList[0], ingredientsList[11]]},
    {name: "Original", ingredients: [ingredientsList[14], ingredientsList[2], ingredientsList[6], ingredientsList[7], ingredientsList[5], ingredientsList[3], ingredientsList[9], ingredientsList[0]]},
    {name: "Crispy Chicken", ingredients: [ingredientsList[4], ingredientsList[2], ingredientsList[5], ingredientsList[10], ingredientsList[0], ingredientsList[11]]},
    {name: "Classic '68", ingredients: [ingredientsList[13], ingredientsList[0], ingredientsList[9], ingredientsList[0], ingredientsList[3], ingredientsList[7], ingredientsList[6], ingredientsList[13]]},
    {name: "Hamburger", ingredients: [ingredientsList[14], ingredientsList[2], ingredientsList[9]]},
    {name: "Cheeseburger", ingredients: [ingredientsList[14], ingredientsList[2], ingredientsList[9], ingredientsList[0]]},
    {name: "Double Cheeseburger", ingredients: [ingredientsList[14], ingredientsList[2], ingredientsList[9], ingredientsList[0], ingredientsList[9], ingredientsList[0]]},
    {name: "Chicken Burger Jr", ingredients: [ingredientsList[4], ingredientsList[2], ingredientsList[10]]},
    {name: "Veggie Burger", ingredients: [ingredientsList[4], ingredientsList[6], ingredientsList[2], ingredientsList[7], ingredientsList[5], ingredientsList[12], ingredientsList[3]]},
    {name: "Chicken Sandwich", ingredients: [ingredientsList[4], ingredientsList[6], ingredientsList[7], ingredientsList[10]]},
    {name: "Chicken Buffalo", ingredients: [ingredientsList[4], ingredientsList[2], ingredientsList[6], ingredientsList[7], ingredientsList[10], ingredientsList[8]]},
];
//{name: , ingredients: []},
// ingredientsList[], 

var currentPoints = 0;
var werePointsCounted = false;
var numberOfCurrentOrders = 0;
var orderCount = 0;
var currentOrderNumberPrepared = 1;
var currentOrderNumberPreparedPoints = 10;
var currentIngredientPrepared = 0;
var tidyingAnimationOn = false;
let gameIsOn = false;
let gameWasStarted = false;
let gameWasEnded = false;
let automaticFewerPoints;

var orderCompositions = [];

//jeśli max==3, output: 0, 1, 2
function randomNumber(max) {
    return Math.floor(Math.random() * max);
}

function createOrder() {

    let orderSlot = orderCount;
    let menuNumber = randomNumber(burgerMenu.length);
    let ingredientsNumber = burgerMenu[menuNumber].ingredients.length;
    
    $(".order-"+orderSlot+" .order-content").append('<span class="order-name">'+burgerMenu[menuNumber].name+'</span><br>');

    orderCompositions.push({orderNumber: orderCount, ingredients: [ingredientsList[1]], beverages: [], sides: [], beveragesOrdered: false, sidesOrdered: false, ingredientsPrepared: false, beveragesPrepared: false, sidesPrepared: false});

    for(a = 0; a < ingredientsNumber; a++) {
        $(".order-"+orderSlot+" .order-content").append('<span class="order-ingredient order-ingredient-'+(a+1)+'">'+burgerMenu[menuNumber].ingredients[a].name+'</span><br>');
        orderCompositions[orderCount-1].ingredients.push(burgerMenu[menuNumber].ingredients[a]);
    }
    orderCompositions[orderCount-1].ingredients.push(ingredientsList[1]);

    let isBeverage = randomNumber(10);
    if(isBeverage < 6) {
        let beverageNumber = randomNumber(beverageMenu.length);
        $(".order-"+orderSlot+" .order-content").append('<span class="order-beverage">'+beverageMenu[beverageNumber].name+'</span><br>');
        orderCompositions[orderCount-1].beverages.push(beverageMenu[beverageNumber]);
        orderCompositions[orderCount-1].beveragesOrdered = true;
    }
    
    let isSide = randomNumber(10);
    if(isSide < 8) {
        let sideNumber = randomNumber(sidesMenu.length);
        $(".order-"+orderSlot+" .order-content").append('<span class="order-side">'+sidesMenu[sideNumber].name+'</span><br>');
        orderCompositions[orderCount-1].sides.push(sidesMenu[sideNumber]);
        orderCompositions[orderCount-1].sidesOrdered = true;
    }

    if(numberOfCurrentOrders == 0) {
        clearInterval(automaticFewerPoints);
        automaticFewerPoints = setInterval(function() {
            fewerPointsForOrder(1);
        }, automaticFewerPointsInterval);
        currentOrderNumberPreparedPoints = 10;
        $(".kitchen-points-number").html(currentOrderNumberPreparedPoints);
    }

    numberOfCurrentOrders++;
}

function createNewOrderSheet() {
    orderCount++;
    let date = new Date();
    $(".orders").append('<div class="order order-'+(orderCount)+'"><div class="order-header">Order '+("000"+orderCount).slice(-4)+'</div><div class="order-content"></div><div class="order-date">'+date.getDate().toString().padStart(2, '0')+'/'+('0'+(date.getMonth()+1)).slice(-2)+'/'+("00"+date.getFullYear()).slice(-2)+' '+("00"+date.getHours()).slice(-2)+':'+("00"+date.getMinutes()).slice(-2)+'</div></div>');
    $(".order-"+orderCount).css("z-index", orderCount*(-1));

    if(numberOfCurrentOrders < 4) {
        $(".order-"+(orderCount)).animate({right: "+="+((185*(4-numberOfCurrentOrders))+(20*(3-numberOfCurrentOrders)))+"px"}, 100)
    }

    createOrder();
}

function isKeyInIngredientsList(e) {
    let ingredientsLength = ingredientsList.length;
    
    let a = 0;
    while(a < ingredientsLength) {
        if(e.code === ingredientsList[a].key) {
            $(".kitchen-cooking").prepend('<div class="ingredient ingredient-'+ingredientsList[a].name.replace(/\s+/g, '')+'" style="z-index: '+currentIngredientPrepared+'"></div>');
            if(currentIngredientPrepared == orderCompositions[currentOrderNumberPrepared-1].ingredients.length-1) {
                $(".ingredient:first-child").addClass("upper-bun");
            }
            a = ingredientsLength+1;
            return true;
        }
        a++;
    }
    if(a == ingredientsLength) {
        return false;
    }
}

function isKeyInBeveragesList(e) {
    let beveragesLength = beverageMenu.length;

    let a = 0;
    while(a < beveragesLength) {
        if(e.code === beverageMenu[a].key && orderCompositions[currentOrderNumberPrepared-1].beveragesPrepared == false) {
            $(".kitchen-cooking").append('<div class="beverage beverage-'+beverageMenu[a].name.replace(/\s+/g, '')+'"><span class="beverage-name">'+beverageMenu[a].name+'</span></div>');
            a = beveragesLength+1;
            return true;
        }
        a++;
    }
    if(a == beveragesLength) {
        return false;
    }
}

function isKeyInSidesList(e) {
    let sidesLength = sidesMenu.length;

    let a = 0;
    while(a < sidesLength) {
        if(e.code === sidesMenu[a].key && orderCompositions[currentOrderNumberPrepared-1].sidesPrepared == false) {
            let sideSize;
            switch(a) {
                case 0:
                    sideSize = "small";
                    break;

                case 1:
                    sideSize = "big";
                    break;
            }

            $(".kitchen-cooking").append('<div class="side"></div>');

            for(b = 1; b <= 6; b++) {
                $(".side").append('<div class="side-fry side-fry'+b+' side-fry-'+sideSize+'"></div>');
            }

            $(".side").append('<div class="side-bag side-bag-'+sideSize+'"><span class="side-name">Crispy Fries</span></div>');

            a = sidesLength+1;
            return true;
        }
        a++;
    }
    if(a == sidesLength) {
        return false;
    }
}

function isCurrentIngredientCorrect(e) {
    let currentOrder = orderCompositions[currentOrderNumberPrepared-1];
    let currentIngredient = orderCompositions[currentOrderNumberPrepared-1].ingredients[currentIngredientPrepared];

    if(ingredientsKeysReserved.includes(e.code) && currentOrder.ingredientsPrepared == false) {
        if(e.code == currentIngredient.key) {
            $(".order-"+currentOrderNumberPrepared+" .order-ingredient-"+currentIngredientPrepared).css("color", "lightgreen");
            currentIngredientPrepared++;
        }
        else {
            let errorReason = (currentIngredientPrepared == 0) ? "no bun" : "wrong ingredient";
            $(".order-"+currentOrderNumberPrepared+" .order-ingredient-"+currentIngredientPrepared).css("color", "red");
            fewerPointsForOrder(currentIngredient.penalty, errorReason);
            currentIngredientPrepared++;
        }
    }

    if(beverageKeysReserved.includes(e.code) && currentOrder.beveragesPrepared == false) {
        if(currentOrder.beveragesOrdered == true && e.code == currentOrder.beverages[0].key) {
            $(".order-"+currentOrderNumberPrepared+" .order-beverage").css("color", "lightgreen");
        }
        else if(currentOrder.beveragesOrdered == true && e.code != currentOrder.beverages[0].key) {
            $(".order-"+currentOrderNumberPrepared+" .order-beverage").css("color", "red");
            fewerPointsForOrder(2, 'wrong beverage');
        }
        else {
            fewerPointsForOrder(2, "no beverage in the receipt");
        }
    }

    if(sidesKeysReserved.includes(e.code) && currentOrder.sidesPrepared == false) {
        if(currentOrder.sidesOrdered == true && e.code == currentOrder.sides[0].key) {
            $(".order-"+currentOrderNumberPrepared+" .order-side").css("color", "lightgreen");
        }
        else if(currentOrder.sidesOrdered == true && e.code != currentOrder.sides[0].key) {
            $(".order-"+currentOrderNumberPrepared+" .order-side").css("color", "red");
            fewerPointsForOrder(2, 'wrong fries size');
        }
        else {
            fewerPointsForOrder(2, "no fries in the receipt");
        }
    }

}

function countPoints() {
    if(orderCompositions[currentOrderNumberPrepared-1].ingredientsPrepared == false) {
        fewerPointsForOrder(10, "order not completed");
    }
    
    if(orderCompositions[currentOrderNumberPrepared-1].beveragesOrdered == true && orderCompositions[currentOrderNumberPrepared-1].beveragesPrepared == false) {
        fewerPointsForOrder(2, "no beverage");
    }

    if(orderCompositions[currentOrderNumberPrepared-1].sidesOrdered == true && orderCompositions[currentOrderNumberPrepared-1].sidesPrepared == false) {
        fewerPointsForOrder(2, "no fries");
    }

    if(werePointsCounted == false) {
        currentPoints += currentOrderNumberPreparedPoints;
        $(".header-points-tracker").html(currentPoints);
        werePointsCounted = true;
    }

}

function deleteOrderAnimation() {
    $(".order-"+currentOrderNumberPrepared).animate({"height": "-100px"}, {duration: 500, queue: false});
    $(".order-"+currentOrderNumberPrepared).animate({"padding-top": "0px"}, {duration: 100, queue: false});
    $(".order-"+currentOrderNumberPrepared).animate({"padding-bottom": "0px"}, {duration: 100, queue: false});

    for(a = 1; a < 4; a++) {
        $(".order-"+(currentOrderNumberPrepared+a)).animate({left: "-=205px"}, {duration: 500, queue: false})
    }

    numberOfCurrentOrders--;
}

function tidyUpKitchen() {
    $(".kitchen-cooking").empty();
    $(".kitchen-points br").nextAll().remove();

    werePointsCounted = false;
    currentOrderNumberPrepared += 1;
    currentOrderNumberPreparedPoints = 10;
    currentIngredientPrepared = 0;
    lengthToDownAnimation = 410;

    $(".kitchen-points-number").html(currentOrderNumberPreparedPoints);

    tidyingAnimationOn = false;

    clearInterval(automaticFewerPoints);
    automaticFewerPoints = setInterval(function() {
        fewerPointsForOrder(1);
    }, automaticFewerPointsInterval);
}

var lengthToDownAnimation = 410;

document.addEventListener("keydown", function (e) {
    if(gameIsOn == true) {
        if(currentIngredientPrepared < orderCompositions[currentOrderNumberPrepared-1].ingredients.length) { 
            if(isKeyInIngredientsList(e) == true) {
                $(".ingredient").first().animate({top: "+="+lengthToDownAnimation+"px"}, 100 );
                lengthToDownAnimation -= 20;
                isCurrentIngredientCorrect(e);
            }
        }
        else {
            orderCompositions[currentOrderNumberPrepared-1].ingredientsPrepared = true;
        }

        if(isKeyInBeveragesList(e) == true) {
        $(".beverage").animate({right: "+=230px"}, 100 );
        isCurrentIngredientCorrect(e);
        orderCompositions[currentOrderNumberPrepared-1].beveragesPrepared = true;
        }

        if(isKeyInSidesList(e) == true) {
            $(".side").animate({left: "50px"}, 100);
            isCurrentIngredientCorrect(e);
            orderCompositions[currentOrderNumberPrepared-1].sidesPrepared = true;
        }

        if(e.code == "Enter" && numberOfCurrentOrders > 0 && tidyingAnimationOn == false) {
            countPoints();
            tidyingAnimationOn = true;
            setTimeout(function(){
                deleteOrderAnimation();
                tidyUpKitchen();
            }, 500);
        }
    }

    if(gameIsOn == false && gameWasStarted == false && e.code == "Enter") {
        gameIsOn = true;
        gameWasStarted = true;
        createNewOrderSheet();

        clearInterval(automaticFewerPoints);
        automaticFewerPoints = setInterval(function() {
            fewerPointsForOrder(1);
        }, automaticFewerPointsInterval);

        $(".start-alert").css("display", "none");
        $(".site-obscure").css("display", "none");
    }

    if(gameIsOn == false && gameWasEnded == true && e.code == "Enter") {
        submitEndgameFormular();
    }

});

function isThereSpaceToCreateOrder () {
    if(numberOfCurrentOrders < 4) {
        createNewOrderSheet();
    }
}

function fewerPointsForOrder(amount, reason) {
    if(currentOrderNumberPreparedPoints > amount) {
        currentOrderNumberPreparedPoints -= amount;
    }
    else {
        currentOrderNumberPreparedPoints = 0;
    }

    $(".kitchen-points-number").html(currentOrderNumberPreparedPoints);

    if(currentOrderNumberPreparedPoints == 0) {
        $(".order-"+currentOrderNumberPrepared).css("color", "red");
    }

    if(reason !== undefined) {
        $(".kitchen-points").append('<div class="kitchen-points-penalty"><span class="kitchen-points-penalty-amount">-'+amount+'</span> <span class="kitchen-points-penalty-pts">pts</span> <span class="kitchen-points-penalty-description">'+reason+'</span></div><br>');
    }
}

var automaticNewOrderInterval = 4000;

var automaticNewOrder = setInterval(function() {
    if(gameIsOn == true) {
        isThereSpaceToCreateOrder();
    }
 }, automaticNewOrderInterval);

var automaticFewerPointsInterval = 3000;

function fillInstruction() {
    
    //ingredients
    for(a = 0; a < ingredientsList.length; a++) {
        $(".instruction-ingredients table").append("<tr><td>["+ingredientsList[a].key.slice(-1)+"]</td><td>"+ingredientsList[a].name+"</td><td>"+ingredientsList[a].penalty+" pts</td></tr>");
    }

    //beverages
    for(a = 0; a < beverageMenu.length; a++) {
        $(".instruction-beverages table").append("<tr><td>["+beverageMenu[a].key.slice(-1)+"]</td><td>"+beverageMenu[a].name+"</td><td>2 pts</td></tr>");
    }

    //fries
    for(a = 0; a < sidesMenu.length; a++) {
        $(".instruction-fries table").append("<tr><td>["+sidesMenu[a].key.slice(-1)+"]</td><td>"+sidesMenu[a].name+"</td><td>2 pts</td></tr>");
    }

    //menu
    for(a = 0; a < burgerMenu.length; a++) {
        $(".instruction-menu").append('<span class="instruction-menu-burger-name">'+burgerMenu[a].name+'</span><span class="instruction-menu-burger-ingredients instruction-menu-burger-ingredients-'+a+'"></span>');
        for(b = 0; b < burgerMenu[a].ingredients.length; b++) {
            $(".instruction-menu-burger-ingredients-"+a).append(burgerMenu[a].ingredients[b].name);
            if(b != (burgerMenu[a].ingredients.length-1)) {
                $(".instruction-menu-burger-ingredients-"+a).append(", ");
            }
        }
    }
 }