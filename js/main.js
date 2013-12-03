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

function Player(options) {
    this.options = {
         'playerName'      : options.playerName || ''
        ,'playerHero'      : options.playerHero || ''
        ,'playerColor'     : options.playerHero.heroColor || false
        ,'playerPriority'  : options.playerHero.priority || ''
        ,'playerCrown'     : options.playerHero.crown || false
        ,'coins'           : options.coins || ''
        ,'hand'            : options.hand || []
        ,'field'           : options.field || []
        ,'playerStatus'    : options.playerStatus || ''
        ,'quartalsOnField' : options.quartersOnField || ''
        ,'cardsInHand'     : options.hand.length || ''
    }

    this.useHeroPower = function() {
        options.playerHero.heroPower();
    }

    this.drawCard = function() {
        
    }

    this.takeCoins = function() {
        
    }

    this.buildQuarter = function() {
        
    }
}

var ivanOpt = {
     'playerName'       : 'Ivan'
    ,'playerHero'       : _gHero.merchant
    ,'hand'             : [shuffleDeck[0],shuffleDeck[2]]
    ,'coins'            : 3
}

var ivan = new Player(ivanOpt);

console.log(ivan.options);

ivan.useHeroPower();

// Функция 
function edTest() {
    // console.log(_gDeck);
    // console.log(shuffleDeck);
};
edTest();

})();
