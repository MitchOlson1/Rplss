"use strict";
const prompt = require('prompt-sync')();
class Player {

    constructor(name,wins){
        this.name = name;
        this.wins = wins;
    }
}

class Human extends Player{

    constructor(name,wins){
        super(name,wins);
    }
    
}

class AI extends Player{
    
    constructor(name,wins){
        super(name,wins);
    }
}

module.exports.Player = Player;
module.exports.Human = Human;
module.exports.AI = AI;