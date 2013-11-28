(function() {
var setting = {

    }
    ,shuffleDeck =[];

//Шаффл для 'var _gСards' начало
Array.prototype.shuffleTwo = function() {
    for (var z = 0; z < this.length; z++) {
        var a = this[z];
        var b = Math.floor(Math.random() * this.length);
        this[z] = this[b];
        this[b] = a;
    }
}

shuffleDeck = $.extend(true, [], _gDeck);
shuffleDeck.shuffleTwo();

// Функция 
function edTest() {
    console.log(_gDeck);
    console.log(shuffleDeck);
};
edTest();

})();
