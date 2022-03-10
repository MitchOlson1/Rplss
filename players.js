"use strict";
const prompt = require('prompt-sync')();
class Player {

    constructor(name){
        this.name = name;
        this.wins = 0;
        this.gesture = "";
        this.gestureList = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
    }
}

class Human extends Player{

    constructor(name){
        super(name);
    }
    chooseGesture(){
        console.log(`${this.name}, Choose a gesture from the following: 0 = Rock, 1 = Paper, 2 = Scissors, 3 = Lizard, or 4 = Spock`);
        let index = parseInt(prompt());
        }    
}

class AI extends Player{
    
    constructor(name){
        super(name);
    }
    chooseGesture(){
    this.gesture = this.gestureList[Math.floor(Math.random()*this.gestureList.length)];
    }
}

module.exports.Player = Player;
module.exports.Human = Human;
module.exports.AI = AI;