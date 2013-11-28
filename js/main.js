(function {
    // Функция присваивания свойств картам
function Card(cardColor, price, points, special, cardName) {
    this.cardColor = cardColor;
    this.price = price;
    this.points = points;
    this.special = special;
    this.cardName = cardName;
}

var dock = new Card("green", 3, 3, none, "Порт");
var harbour = new Card("green", 4, 4, none, "Гавань");
var market = new Card("green", 2, 2, none, "Рынок");
var tavern = new Card("green", 1, 1, none, "Таверна");
var townhall = new Card("green", 5, 5, none, "Ратуша");
var trading_post = new Card("green", 2, 2, none, "Лавка");

var cathedral = new Card("blue", 5, 5, none, "Собор");
var church = new Card("blue", 2, 2, none, "Церковь");
var monastery = new Card("blue", 3, 3, none, "Монастырь");
var temple = new Card("blue", 1, 1, none, "Храм");

var battlefield = new Card("red", 3, 3, none, "Марсово поле");
var fortress = new Card("red", 5, 5, none, "Крепость");
var prison = new Card("red", 2, 2, none, "Тюрьма");
var watchtower = new Card("red", 1, 1, none, "Дозорная башня");

var castle = new Card("yellow", 4, 4, none, "Замок");
var manor = new Card("yellow", 3, 3, none, "Поместье");
var palace = new Card("yellow", 5, 5, none, "Дворец");

var dragon_gate = new Card("purple", 6, 8, none, "Врата дракона");
var graveyard = new Card("purple", 5, 5, none, "Кладбище");
var great_wall = new Card("purple", 6, 6, none, "Великая стена");
var haunted_city = new Card("purple", 2, 2, none, "Город призраков");
var keep = new Card("purple", 3, 3, none, "Форт");
var laboratory = new Card("purple", 5, 5, none, "Лаборатория");
var library = new Card("purple", 6, 6, none, "Библиотека");
var observatory = new Card("purple", 5, 5, none, "Обсерватория");
var school_of_magic = new Card("purple", 6, 6, none, "Школа магии");
var smithy = new Card("purple", 5, 5, none, "Кузня");
var university = new Card("purple", 6, 8, none, "Университет");

function Hero(priority, power, heroName, heroColor) {
    this.priority = priority;
    this.power = power;
    this.heroName = heroName;
    this.heroColor = heroColor;
}

var assasin = new Hero(1, kill, "Ассасин", none);
var thief = new Hero(2, steal, "Вор", none);
var mage = new Hero(3, change, "Чародей", none);
var king = new Hero(4, crown, "Король", "yellow");
var bishop = new Hero(5, immun, "Епископ", "blue");
var merchant = new Hero(6, coin, "Купец", "green");
var architect = new Hero(7, power, "Зодчий", none);
var warlord = new Hero(8, destroy, "Кондотьер", "red");

// Функция 
function edTest() {

}
edTest();

})();
