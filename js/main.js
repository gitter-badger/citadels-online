(function() {
//Шаффл для 'var _arrayCards' начало
function shuffle(deck) {
    for(var j, x, i = deck.length; 
        i; 
        j = Math.floor(Math.random() * i), 
        x = deck[--i], 
        deck[i] = deck[j], 
        deck[j] = x);
    return deck;
}

shuffledDeck = shuffle(_arrayCards); 
//Шаффл для 'var _arrayCards' конец

//Шаффл для 'var _gСards' начало
Array.prototype.shuffleTwo = function() {
    for (var z = 0; z < this.length; z++) {
        var a = this[z];
        var b = Math.floor(Math.random() * this.length);
        this[z] = this[b];
        this[b] = a;
    }
}

obj = shuffleCards(_gСards);

function shuffleCards(obj) {
    var new_Cards = {};
    var keys = getKeys(obj);
    keys.shuffleTwo();
    for (var key in keys) {
        if (key == "shuffleTwo") {
            continue;
        }
        new_Cards[keys[key]] = obj[keys[key]];
    }
    return new_Cards;
}

function getKeys(obj) {
    var arr = new Array();
    for (var key in obj) {
        arr.push(key);
    }
    return arr;
}
//Шаффл для 'var _gСards' конец

// Функция 
function edTest() {
    console.log(shuffledDeck);
    console.log(obj);
}
edTest();

})();
