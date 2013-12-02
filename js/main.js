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
         'playerName'      : options.name || ''
        ,'playerHero'      : options.playerHero || ''
        ,'priority'        : options.priority || ''
        ,'king'            : options.king || ''
        ,'coins'           : options.coins || ''
        ,'hand'            : options.hand || []
        ,'field'           : options.field || []
        ,'playerStatus'    : options.status || ''
        ,'quartalsOnField' : options.quartersOnField || ''
        ,'cardsInHand'     : options.cardsInHand || ''
    }

    this.useHeroPower = function() {
    
    }
    this.drawCard = function() {
        
    }
    this.takeCoins = function() {
        
    }
    this.buildQuarter = function() {
        
    }
}

var ivanOpt = {
     'playerName'  : 'Ivan'
    ,'playerHero'  : 'Hui'
    ,'cardsInHand' : '3'
}
var ivan = new Player(ivanOpt);

console.log(ivan.options);

// Функция 
function edTest() {
    // console.log(_gDeck);
    // console.log(shuffleDeck);
};
edTest();

})();
