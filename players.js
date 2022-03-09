"use strict";
const prompt = require('prompt-sync')();
class Player {

    constructor(name,wins,gesture){
        this.name = name;
        this.wins = wins;
        this.gesture = gesture;
    }
}

class Human extends Player{

    constructor(name,wins,gesture){
        super(name,wins,gesture);
    }
    
}

class AI extends Player{
    
    constructor(name,wins,gesture){
        super(name,wins,gesture);
    }
}

module.exports.Player = Player;
module.exports.Human = Human;
module.exports.AI = AI;