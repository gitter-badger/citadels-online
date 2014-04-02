(function() {
var setting = {

    }
    ,shuffledDeck = []
    ,shuffledHeroes = [];

//Шаффл для 'var _gСards'
Array.prototype.shuffle = function() {
    for (var z = 0; z < this.length; z++) {
        var a = this[z];
        var b = Math.floor(Math.random() * this.length);
        this[z] = this[b];
        this[b] = a;
    }
};

//Отсев лишних героев
var extraHeroes = [];
var trash = [];

Array.prototype.removeExtraHeroes = function () { 
    for (i = 0; i < 3; i++) {
        if (i > 0 && this[0].heroClass == 'king') {
            trash[i] = this.shift();
            this.push(trash[i]);
            extraHeroes[i] = this.shift();
        }
        else {
            extraHeroes[i] = this.shift();
        }
        
    }   
};

function heroShuffle () {
    shuffledHeroes = $.extend(true, [], _gHero);
    shuffledHeroes.shuffle();
    shuffledHeroes.removeExtraHeroes();
}
//Раздача карт
function handingOut(arrDeck, arrPlayers) {
    for (i = 0; i < arrPlayers.length; i++) {
        for (z = 0; z < 4; z++) {
            arrPlayers[i].options.hand[z] = arrDeck.shift();
        }
    }
}

//Visial - Показ Героев на экране
Array.prototype._vShowMeHeroes = function() {
    for (var i = 0; i < this.length; i++) {
        var id = this[i].heroClass;
        var img = this[i].texture;
        $('.hero_choice').append('<div class="hero_card '+id+'"></div>');
    }
}

shuffledDeck = $.extend(true, [], _gDeck);
shuffledDeck.shuffle();

//Конструктор игрока
function Player(options) {
    this.options = {
        'playerName'      : options.playerName || '',
        'playerHero'      : options.playerHero || '',
        'coins'           : options.coins || 2,
        'hand'            : options.hand || [],
        'field'           : options.field || [],
        'playerStatus'    : options.playerStatus || '',
        'quartalsOnField' : options.quartersOnField || '',
    }

    this.useHeroPower = function() {
        var hClass = this.options.playerHero.heroClass;
        arg = ['first_param'];
        _gHeroPowers[hClass].apply(this, arg);
    }

    this.drawCard = function() {

    }

    this.takeCoins = function() {
        this.options.coins += 2;
    }

    this.buildQuarter = function() {
        
    }
}

var ivanOpt = {
    'playerName'        : 'Ivan',
    'playerHero'        : _gHero[5]
};
var vasyaOpt = {
    'playerName'        : 'Vasya'
};
var petyaOpt = {
    'playerName'        : 'Petya'
};
var valeraOpt = {
    'playerName'        : 'Valera'
};

var ivan = new Player(ivanOpt);
var vasya = new Player(vasyaOpt);
var petya = new Player(petyaOpt);
var valera = new Player(valeraOpt);

var players = [];
players.push(ivan, vasya, petya, valera);

handingOut(shuffledDeck, players);

ivan.useHeroPower();


// Функция 
function edTest() {
    // console.log(_gDeck);
    console.log(shuffledDeck);
    // console.log(ivan);
    // console.log(ivan.options.hand.length);
    // console.log(_gDeck[0].cardColor);
    // console.log(_gHero.length);
    console.log(players);
    
};
edTest();

$('#lookAtHeroesButton').on('click', function(){
        $('.hero_choice').empty('<div>');
        heroShuffle();
        console.log(shuffledHeroes);
        shuffledHeroes._vShowMeHeroes();
});

$('.hero_choice').on('click', '.hero_card', function() {
    var allHero = $('.hero_card');
    var chosenHero = $(this);
    if(!allHero.hasClass('card_highlighted')){
        chosenHero.toggleClass('card_highlighted');
    } else if(chosenHero.hasClass('card_highlighted')) {
        chosenHero.toggleClass('card_highlighted');
    }
});

})();