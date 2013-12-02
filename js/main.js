(function() {
var setting = {

    }
    ,shuffleDeck =[];

//Шаффл для 'var _gСards' начало
Array.prototype.shuffle = function() {
    for (var z = 0; z < this.length; z++) {
        var a = this[z];
        var b = Math.floor(Math.random() * this.length);
        this[z] = this[b];
        this[b] = a;
    }
}

shuffleDeck = $.extend(true, [], _gDeck);
shuffleDeck.shuffle();

function Player(playerName, playerHero, priority, king, coins, hand, field, playerStatus, quartersOnField, cardsInHand) {
    this.playerName = name;
    this.playerHero = playerHero;
    this.priority = priority;
    this.king = king;
    this.coins = coins;
    this.hand = hand; //массив
    this.field = field; //массив
    this.playerStatus = status;
    this.quartalsOnField = quartersOnField;
    this.cardsInHand = cardsInHand;
    this.useHeroPower = function() {
    
    }
    this.drawCard = function() {
        
    }
    this.takeCoins = function() {
        
    }
    this.buildQuarter = function() {
        
    }
}

// Функция 
function edTest() {
    console.log(_gDeck);
    console.log(shuffleDeck);
};
edTest();

})();
