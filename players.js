"use strict";
const prompt = require('prompt-sync')();
class Player {

    constructor(name,gamesession,wins){
        this.name = name;
        this.gamesession = gamesession;
        this.wins = wins;
    }
}

class Human extends Player{

    constructor(name,gamesession,wins){
        super(name,gamesession,wins);
    }
}

class AI extends Player{
    
    constructor(name,gamesession,wins){
        super(name,gamesession,wins);
    }
}

module.exports.Player = Player;
module.exports.Human = Human;
module.exports.AI = AI;