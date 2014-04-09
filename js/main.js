(function() {
var setting = {
  
    }
    ,heroes = [  'assassin'
                ,'thief'
                ,'mage'
                ,'king'
                ,'bishop'
                ,'merchant'
                ,'architect'
                ,'warlord']
    ,shuffledHeroes = []
    ,deck = [];

//Создание колоды
function createDeck() { 
    for(var i = 0; i <=65; i++) {
        deck.push('card_'+i);  
    }
    return deck;
}

//Шаффл
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
    for (var i = 0; i < 3; i++) {
        if (i > 0 && this[0] == 'king') {
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
    shuffledHeroes = $.extend(true, [], heroes);
    shuffledHeroes.shuffle();
    shuffledHeroes.removeExtraHeroes();
}

//Раздача карт
function handingOut(arrDeck, arrPlayers) {
    for (var i = 0; i < arrPlayers.length; i++) {
        for (z = 0; z < 4; z++) {
            arrPlayers[i].options.hand[z] = arrDeck.shift();
        }
    }
}

//Visual - Показ Героев на экране
Array.prototype._vShowMeHeroes = function() {
    var heroChoise = '<div class="shading"><div class="hero-choice"></div></div>';
    $(heroChoise).appendTo('body');
    for (var i = 0; i < this.length; i++) {
        var id = this[i];
        $('.hero-choice').append('<div class="card hero-card '+id+'"></div>');   
    }
    $('.shading').fadeIn(200, 'linear');
}

createDeck();
deck.shuffle();

//Конструктор игрока
function Player(options) {
    this.options = {
         'playerName'      : options.playerName || ''
        ,'playerHero'      : options.playerHero || ''
        ,'coins'           : options.coins || 2
        ,'hand'            : options.hand || []
        ,'field'           : options.field || []
        ,'playerStatus'    : options.playerStatus || ''
        ,'quartersOnField' : options.quartersOnField || ''
    }
}
//Способности игрока
Player.prototype = {
    useHeroPower: function() {
        var hClass = this.options.playerHero.heroClass;
        arg = ['first_param'];
        _gHeroPowers[hClass].apply(this, arg);
    },
    drawCard: function() {

    },
    takeCoins: function() {
        this.options.coins += 2;
    },
    buildQuarter: function() {
        
    }
}

var ivanOpt = {
    'playerName'        : 'Ivan',
    'playerHero'        : _gHero['merchant']
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

handingOut(deck, players);

ivan.useHeroPower();


// Функция 
function edTest() {
    // console.log(_gDeck);
    console.log(deck);
    // console.log(ivan);
    // console.log(ivan.options.hand.length);
    // console.log(_gDeck[0].cardColor);
    // console.log(_gHero.length);
    console.log(players);
    
};
edTest();


$('#choose-a-hero').on('click', function(){
        $('.hero-choice').empty('<div>');
        heroShuffle();
        console.log(shuffledHeroes);
        shuffledHeroes._vShowMeHeroes();
});

$('body').on('click', '.hero-card', function() {
    var allHero = $('.hero-card');
    var chosenHero = $(this);
    if(!allHero.hasClass('hero-pick')) {
        chosenHero.toggleClass('hero-pick');
    } else if(chosenHero.hasClass('hero-pick')) {
        chosenHero.toggleClass('hero-pick');
    }
});

})();