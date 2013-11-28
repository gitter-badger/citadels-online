(function() {
    // Функция присваивания свойств картам
function Card(cardColor, price, points, special, cardName) {
    this.cardColor = cardColor;
    this.price = price;
    this.points = points;
    this.special = special;
    this.cardName = cardName;
}

var dock = new Card("green", 3, 3, false, "Порт");
var harbour = new Card("green", 4, 4, false, "Гавань");
var market = new Card("green", 2, 2, false, "Рынок");
var tavern = new Card("green", 1, 1, false, "Таверна");
var townhall = new Card("green", 5, 5, false, "Ратуша");
var trading_post = new Card("green", 2, 2, false, "Лавка");

var cathedral = new Card("blue", 5, 5, false, "Собор");
var church = new Card("blue", 2, 2, false, "Церковь");
var monastery = new Card("blue", 3, 3, false, "Монастырь");
var temple = new Card("blue", 1, 1, false, "Храм");

var battlefield = new Card("red", 3, 3, false, "Марсово поле");
var fortress = new Card("red", 5, 5, false, "Крепость");
var prison = new Card("red", 2, 2, false, "Тюрьма");
var watchtower = new Card("red", 1, 1, false, "Дозорная башня");

var castle = new Card("yellow", 4, 4, false, "Замок");
var manor = new Card("yellow", 3, 3, false, "Поместье");
var palace = new Card("yellow", 5, 5, false, "Дворец");

var dragon_gate = new Card("purple", 6, 8, false, "Врата дракона");
var graveyard = new Card("purple", 5, 5, false, "Кладбище");
var great_wall = new Card("purple", 6, 6, false, "Великая стена");
var haunted_city = new Card("purple", 2, 2, false, "Город призраков");
var keep = new Card("purple", 3, 3, false, "Форт");
var laboratory = new Card("purple", 5, 5, false, "Лаборатория");
var library = new Card("purple", 6, 6, false, "Библиотека");
var observatory = new Card("purple", 5, 5, false, "Обсерватория");
var school_of_magic = new Card("purple", 6, 6, false, "Школа магии");
var smithy = new Card("purple", 5, 5, false, "Кузня");
var university = new Card("purple", 6, 8, false, "Университет");

function Hero(priority, power, heroName, heroColor) {
    this.priority = priority;
    this.power = power;
    this.heroName = heroName;
    this.heroColor = heroColor;
}

var assasin = new Hero(1, 'kill', "Ассасин", false);
var thief = new Hero(2, 'steal', "Вор", false);
var mage = new Hero(3, 'change', "Чародей", false);
var king = new Hero(4, 'crown', "Король", "yellow");
var bishop = new Hero(5, 'immun', "Епископ", "blue");
var merchant = new Hero(6, 'coin', "Купец", "green");
var architect = new Hero(7, 'power', "Зодчий", false);
var warlord = new Hero(8, 'destroy', "Кондотьер", "red");

// Функция 
function edTest() {
    console.log(_gСards);
}
edTest();

})();
