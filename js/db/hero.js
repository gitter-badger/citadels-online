var _gHero = { 
    'assassin': {
            'priority'   : '1', 
            'heroName'   : 'Ассасин',
            'heroColor'  : false,
            'crown'      : false
    },
    'thief': {
            'priority'   : '2', 
            'heroName'   : 'Вор',
            'heroColor'  : false,
            'crown'      : false
    },
    'mage': {
            'priority'   : '3', 
            'heroName'   : 'Чародей',
            'heroColor'  : false,
            'crown'      : false
    },
    'king': {
            'priority'   : '4', 
            'heroName'   : 'Король',
            'heroColor'  : 'yellow',
            'crown'      : true
    },
    'bishop': {
            'priority'   : '5', 
            'heroName'   : 'Епископ',
            'heroColor'  : 'blue',
            'crown'      : false
    },
    'merchant': {
            'priority'   : '6', 
            'class'      : 'merchant',
            'heroName'   : 'Купец',
            'heroColor'  : 'green',
            'crown'      : false,
            'heroPower'  : function usePower() {
                                console.log("Hello!");
                                
            }
    },
    'architect': {
            'priority'   : '7', 
            'heroName'   : 'Зодчий',
            'heroColor'  : false,
            'crown'      : false
    },
    'warlord': {
            'priority'   : '8', 
            'heroName'   : 'Кондотьер',
            'heroColor'  : 'red',
            'crown'      : false
    }

};